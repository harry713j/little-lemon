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

  async createAccount({ email, password, fullName }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        fullName
      );

      if (userAccount) {
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
    console.log(email, password);
    try {
      // Check if a session already exists
      const currentSession = await this.account.getSession("current");
      if (currentSession) {
        return currentSession;
      }
    } catch (error) {
      // If no session exists, proceed with login
      if (error.code !== 404) {
        throw new Error(`Error checking existing session: ${error.message}`);
      }
    }
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
