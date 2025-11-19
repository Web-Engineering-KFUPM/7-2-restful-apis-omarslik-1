import mongoose from "mongoose";


/** =================================================================
 *  TASK 2 — Create Schema & Model (file: server/models/song.mode.js)
 *  =================================================================
 *  Goal:
 *    - Define a Song schema with fields:
 *        title (String, required)
 *        artist (String, required)
 *        year (Number)
 *    - Export a Mongoose model named "Song".
 *
 *  Hint:
      const songSchema = new mongoose.Schema({
        title:  { type: String, required: true, trim: true },
        artist: { type: String, required: true, trim: true },
        year:   { type: Number, min: 1900, max: 2100 }
      }, { timestamps: true });

      const Song = mongoose.model("Song", songSchema);
 */
// db schema

const songSchema = new mongoose.Schema({
  title:  { type: String, required: true, trim: true },
  artist: { type: String, required: true, trim: true },
  year:   { type: Number, min: 1900, max: 2100 }
}, { timestamps: true });

export const Song = mongoose.model("Song", songSchema);