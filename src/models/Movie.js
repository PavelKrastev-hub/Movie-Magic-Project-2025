import { Schema, Types, model } from "mongoose";
import User from "./User.js";

const movieSchema = new Schema({
   title: String,
   category: String,
   genre: String,
   director: String,
   year: Number,
   imageUrl: String,
   rating: Number,
   description: String,
   casts: [{
      type: Types.ObjectId,
      ref: 'Cast'
   }],
   creator: {
      type: Types.ObjectId,
      ref: User
   }
});

const Movie = model('Movie', movieSchema);

export default Movie;