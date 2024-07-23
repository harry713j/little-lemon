import { Client, ID, Databases, Query, Storage } from "appwrite";
import environment_variables from "../environment_import/environmentVariables";

class TestimonyService {
  client = new Client();
  database;
  storage;

  constructor() {
    this.client
      .setEndpoint(environment_variables.appwriteEndpoint)
      .setProject(environment_variables.appwriteProjectId);

    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async addReview({ review, ratings, userId }) {
    try {
      return await this.database.createDocument(
        environment_variables.appwriteDatabaseId,
        environment_variables.appwriteCollectionTestimonyId,
        ID.unique(),
        {
          review,
          ratings,
          userId,
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

  // this will get used when i will add feature where user can upload
  // their other details like profile picture
  /*
  getImagePreview(imageId) {
    return this.storage.getFilePreview(
      environment_variables.appwriteProfileImageBucketId,
      imageId
    );
  }
    */
}
const testimonyService = new TestimonyService();

export default testimonyService;
