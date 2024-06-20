import {
  Avatars,
  Account,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.paulin.lifeswap",
  projectId: "666305740014a49978e0",
  databaseId: "6666b54d002980e66f4a", //database called paulin_lifeswap
  userCollectionId: "6666c60f0027821e559f", //database collection users with attribute keys username, email,avatar and accountId
  livesCollectionId: "66713ae5001b61e7b912", //database collection lives with attribute keys place, occupation, freetime and relationship with users collections with the key of creator
  storageId: "66714ab1002780df804f", //storage bucket files for the images
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

//Register a user - sign up

export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(username); //appwrite function to create a user img with initials
    await signIn(email, password);

    // Continue with adding the user to the database

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
//Sign in, establish a new user session

export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password); //log-in function from appwrite
    return session;
  } catch (error) {
    throw new Error(error);
  }
}

// Get Account
export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    throw new Error(error);
  }
}

// Get Current User
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)] //to get the user currently logged in
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0]; //get only one user
  } catch (error) {
    console.log(error);
    return null;
  }
}

//Get all lives created by users

export async function getAllLives() {
  try {
    const allLives = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.livesCollectionId
    );
    return allLives.documents;
  } catch (error) {
    throw new Error(error);
  }
}
