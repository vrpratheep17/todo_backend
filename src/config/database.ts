import { MongoClient, Db } from "mongodb";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
const DB_NAME = process.env.DB_NAME || "todo_db";

let db: Db;

export const connectToDatabase = async (): Promise<Db> => {
  if (db) return db; // reuse if already connected

  const client = new MongoClient(MONGO_URI);
  await client.connect();
  console.log("✅ Connected to MongoDB");

  db = client.db(DB_NAME);
  return db;
};
