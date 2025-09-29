import Cast from "../models/Cast.js"
import Movie from "../models/Movie.js";

export default {
   getAll(filter = {}) {
      let query = Cast.find();

      if (filter.includes) {
         query = query.in('_id', filter.includes)
      }

      if (filter.excludes) {
         query = query.nin('_id', filter.excludes);
      }

      return query;
   },
   getOne(movieId) {
      return Movie.findById(movieId);
   },
   create(castData) {
      return Cast.create(castData);
   }
}