import { Client, Account, ID, Storage, Databases } from "appwrite";
import environment_variables from "../environment_import/environmentVariables";

class AuthService {
  client = new Client();
  account;
  storage;
  database;

  constructor() {
    this.client
      .setEndpoint(environment_variables.appwriteEndpoint)
      .setProject(environment_variables.appwriteProjectId);

    this.account = new Account(this.client);
    this.storage = new Storage(this.client);
    this.database = new Databases(this.client);
  }

  async createAccount({ email, password, name, gender, profilePicture }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
        gender
      );

      if (userAccount) {
        let profilePicId = null;
        // if profile picture given by user then upload that to bucket
        if (profilePicture) {
          const imageUpload = await this.storage.createFile(
            environment_variables.appwriteProfileImageBucketId,
            ID.unique(),
            profilePicture
          );
          profilePicId = imageUpload.$id;
        }

        // storing the profile image reference in collection
        await this.database.createDocument(
          environment_variables.appwriteDatabaseId,
          environment_variables.appwriteCollectionUserProfileId,
          userAccount.$id,
          { profilePicId }
        );
        // login the user after they successfully created account
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw new Error("Error creating account ", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw new Error("Error logging in ", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw new Error("Error getting user ", error);
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw new Error("Error logging out ", error);
    }
  }
}

const authService = new AuthService();

export default authService;
