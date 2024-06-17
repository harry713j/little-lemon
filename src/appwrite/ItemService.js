import environment_variables from "../environment_import/environmentVariables";
import { Client, ID, Storage, Databases, Query } from "appwrite";

class ItemService {
  client = new Client();
  storage;
  database;

  constructor() {
    this.client
      .setEndpoint(environment_variables.appwriteEndpoint)
      .setProject(environment_variables.appwriteProjectId);

    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async addItem({
    itemName,
    description,
    price,
    itemImage,
    category,
    isSpecial,
  }) {
    try {
      let imageId = null;
      if (itemImage) {
        const imageUpload = await this.storage.createFile(
          environment_variables.appwriteItemImageBucketId,
          ID.unique(),
          itemImage
        );
        imageId = imageUpload.$id;
      }

      return await this.database.createDocument(
        environment_variables.appwriteDatabaseId,
        environment_variables.appwriteCollectionItemId,
        ID.unique(),
        {
          itemName,
          imageId,
          description,
          price,
          category,
          isSpecial,
        }
      );
    } catch (error) {
      throw new Error("failed to add item", error);
    }
  }

  async updateItem(
    itemId,
    { itemName, description, price, itemImage, category, isSpecial }
  ) {
    try {
      const currentItem = await this.database.getDocument(
        environment_variables.appwriteDatabaseId,
        environment_variables.appwriteCollectionItemId,
        itemId
      );
      let imageId = currentItem.imageId;
      if (itemImage) {
        const imageUpload = await this.storage.createFile(
          environment_variables.appwriteItemImageBucketId,
          ID.unique(),
          itemImage
        );
        imageId = imageUpload.$id;
      }

      return await this.database.updateDocument(
        environment_variables.appwriteDatabaseId,
        environment_variables.appwriteCollectionItemId,
        itemId,
        {
          itemName: itemName || currentItem.itemName,
          imageId: imageId,
          description: description || currentItem.description,
          price: price || currentItem.price,
          category: category || currentItem.category,
          isSpecial:
            isSpecial !== undefined ? isSpecial : currentItem.isSpecial,
        }
      );
    } catch (error) {
      throw new Error("failed to update item", error);
    }
  }

  async deleteItem(itemId) {
    try {
      await this.database.deleteDocument(
        environment_variables.appwriteDatabaseId,
        environment_variables.appwriteCollectionItemId,
        itemId
      );
    } catch (error) {
      throw new Error("failed to delete item", error);
    }
  }

  async getItems(limit, offset) {
    try {
      const items = await this.database.listDocuments(
        environment_variables.appwriteDatabaseId,
        environment_variables.appwriteCollectionItemId,
        [Query.limit(limit), Query.offset(offset)]
      );
      return items.documents;
    } catch (error) {
      throw new Error("failed to get items", error);
    }
  }

  async getAllItems() {
    try {
      let allItems = [];
      let offset = 0;
      let limit = 25;
      let fetchedItems;

      do {
        fetchedItems = await this.getItems(limit, offset);
        allItems = allItems.concat(fetchedItems);
        offset += limit;
      } while (fetchedItems.length === limit);

      return allItems;
    } catch (error) {
      throw new Error("failed to get all items", error);
    }
  }

  getImagePreview(imageId) {
    return this.storage.getFilePreview(
      environment_variables.appwriteItemImageBucketId,
      imageId
    );
  }
}

const itemService = new ItemService();

export default itemService;
