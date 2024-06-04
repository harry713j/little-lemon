const environment_variables = {
  appwriteEndpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionItemId: String(
    import.meta.env.VITE_APPWRITE_COLLECTION_ID_1
  ),
  appwriteCollectionTestimonyId: String(
    import.meta.env.VITE_APPWRITE_COLLECTION_ID_2
  ),
  appwriteCollectionUserProfileId: String(
    import.meta.env.VITE_APPWRITE_COLLECTION_ID_3
  ),
  appwriteItemImageBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID_1),
  appwriteProfileImageBucketId: String(
    import.meta.env.VITE_APPWRITE_BUCKET_ID_2
  ),
};

export default environment_variables;
