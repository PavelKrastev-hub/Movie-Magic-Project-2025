import { padStart } from "lodash";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
   email: {
      type: email,
      required: true
   },
   password: {
      type: String,
      required: true
   },
});

const User = model('User', userSchema);

export default User;