import mongoose from "mongoose";
import { env } from "../config/env.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(env.mongodbUri);

    console.log(
      `MongoDB connected: ${connection.connection.host}`
    );

  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;


// import { MongoClient } from 'mongodb';

// const client = new MongoClient("mongodb+srv://<db_username>:<db_password>@cluster0.ln9oqhx.mongodb.net/");

// export async function connectToMongoDB() {
//   try {
//     await client.connect();
//     console.log("You successfully connected to MongoDB!");
//     return client;
//   } catch (err) {
//     console.dir(err);
//   }
// }

// // Call this only when your application terminates
// export async function disconnectFromMongoDB() {
//   await client.close();
// }