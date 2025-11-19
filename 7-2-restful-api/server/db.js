/** ===========================================
 *  db.js — Mongo connection helper
 *  -------------------------------------------
 *  TASK DB-1:
 *    - Export connectDB() that connects Mongoose using MONGO_URL
 *    - Log success; throw on failure
 */
// import mongoose from "mongoose";

// export async function connectDB() {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("Mongo connected");
//   } catch (err) {
//     console.error("Connection error:", err.message);
//   }
// }
import mongoose from "mongoose";

/**
 * Connect to MongoDB using process.env.MONGO_URL.
 * Throws on error so callers can handle exit/retry.
 */
export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo connected");
  } catch (err) {
    console.error("Connection error:", err.message);
    throw err;
  }
}

// Optional helper to close connection (useful in tests)
export async function disconnectDB() {
  await mongoose.disconnect();
}