import environment_variables from "../environment_import/environmentVariables";
import { Client, ID, Databases, Query } from "appwrite";

//FIXME: fix this too
class ReservationService {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(environment_variables.appwriteEndpoint)
      .setProject(environment_variables.appwriteProjectId);

    this.databases = new Databases(this.client);
  }

  async createReservation({
    fullName,
    phoneNumber,
    email,
    date,
    time,
    guests,
    occasions = "",
    requests = "",
    isCompleted = false,
  }) {
    console.log("from collection ", fullName, guests, date, time);
    try {
      this.databases.createDocument(
        environment_variables.appwriteDatabaseId,
        environment_variables.appwriteCollectionReservationId,
        ID.unique(),
        {
          fullName,
          phoneNumber,
          email,
          date,
          time,
          guests,
          occasions,
          requests,
          isCompleted,
        }
      );
    } catch (error) {
      throw new Error("Failed to create reservation ", error);
    }
  }

  async getReservations(limit, offset) {
    try {
      const reservations = await this.databases.listDocuments(
        environment_variables.appwriteDatabaseId,
        environment_variables.appwriteCollectionReservationId,
        [Query.limit(limit), Query.offset(offset), Query.orderAsc("date")]
      );

      return reservations.documents;
    } catch (error) {
      throw new Error("Failed to get reservations");
    }
  }

  async getAllReservations() {
    try {
      let limit = 25;
      let allReservations = [];
      let offset = 0;
      let fetchedReservations;

      do {
        fetchedReservations = await this.getReservations(limit, offset);
        allReservations = allReservations.concat(fetchedReservations);
        offset += limit;
      } while (fetchedReservations.length === limit);

      return allReservations;
    } catch (error) {
      throw new Error("Failed to get all reservation");
    }
  }

  async getTodayReservation() {
    try {
      const today = new Date();
      const todayDate = today.toISOString().split("T")[0];

      let limit = 25;
      let offset = 0;
      let allReservations = [];
      let fetchedReservations;

      do {
        fetchedReservations = await this.databases.listDocuments(
          environment_variables.appwriteDatabaseId,
          environment_variables.appwriteCollectionReservationId,
          [
            Query.equal("date", todayDate),
            Query.limit(limit),
            Query.offset(offset),
          ]
        );
        allReservations = allReservations.concat(fetchedReservations.documents);
        offset += limit;
      } while (fetchedReservations.documents.length === limit);

      return allReservations;
    } catch (error) {
      throw new Error("failed get today's reservation");
    }
  }

  async deleteOldReservations() {
    try {
      const thirtyDayAgo = new Date();
      thirtyDayAgo.setDate(thirtyDayAgo.getDate() - 30);

      let limit = 25;
      let offset = 0;
      let fetchedReservations;

      do {
        fetchedReservations = await this.databases.listDocuments(
          environment_variables.appwriteDatabaseId,
          environment_variables.appwriteCollectionReservationId,
          [
            Query.limit(limit),
            Query.offset(offset),
            Query.lessThan("createdAt", thirtyDayAgo),
          ]
        );

        for (let reservation of fetchedReservations.documents) {
          await this.databases.deleteDocument(
            environment_variables.appwriteDatabaseId,
            environment_variables.appwriteCollectionReservationId,
            reservation.$id
          );
        }

        offset += limit;
      } while (fetchedReservations.documents.length === limit);
    } catch (error) {
      throw new Error("Failed to delete reservations");
    }
  }
}

const reservationService = new ReservationService();

export default reservationService;
