import { Client, ID, Databases, Query } from "appwrite";
import environment_variables from "../environment_import/environmentVariables";

class TestimonyService {
  client = new Client();
  database;

  constructor() {
    this.client
      .setEndpoint(environment_variables.appwriteEndpoint)
      .setProject(environment_variables.appwriteProjectId);

    this.database = new Databases(this.client);
  }

  async addReview({ review, ratings, userId }) {
    try {
      const userProfile = await this.database.getDocument(
        environment_variables.appwriteDatabaseId,
        environment_variables.appwriteCollectionUserProfileId,
        userId
      );

      const profilePicId = userProfile.profilePicId || null;
      return await this.database.createDocument(
        environment_variables.appwriteDatabaseId,
        environment_variables.appwriteCollectionTestimonyId,
        ID.unique(),
        {
          review,
          ratings,
          userId,
          profilePicId,
        }
      );
    } catch (error) {
      throw new Error("Failed to add review", error);
    }
  }

  async getReviews(limit = 5) {
    try {
      const reviews = await this.database.listDocuments(
        environment_variables.appwriteDatabaseId,
        environment_variables.appwriteCollectionTestimonyId,
        [Query.limit(limit), Query.orderDesc("$createdAt")]
      );

      return reviews.documents;
    } catch (error) {
      throw new Error("Failed to get reviews", error);
    }
  }
}

const testimonyService = new TestimonyService();

export default testimonyService;
