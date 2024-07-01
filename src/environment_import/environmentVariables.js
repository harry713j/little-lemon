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
  appwriteCollectionReservationId: String(
    import.meta.env.VITE_APPWRITE_COLLECTION_ID_4
  ),
  appwriteItemImageBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID_1),
  appwriteProfileImageBucketId: String(
    import.meta.env.VITE_APPWRITE_BUCKET_ID_2
  ),
  googleMapAPIKey: String(import.meta.env.VITE_GOOGLE_MAP_API_KEY),
  emailjsAPIendpoint: String(import.meta.env.VITE_EMAILJS_API_ENDPOINT),
  emailjsServiceId: String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
  emailjsTemplateId: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
  emailjsUserId: String(import.meta.env.VITE_EMAILJS_USER_ID),
  stripeAPIkey: String(import.meta.env.VITE_STRIPE_API_KEY),
};

export default environment_variables;
