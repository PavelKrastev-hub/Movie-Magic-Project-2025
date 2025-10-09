import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
   email: {
      type: String,
      required: [true, 'Email is required!'],
      unique: [true, 'Email should be unique!'],
      match: [/[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/, 'Invalid email!'],
      minLength: [10, 'Email should be at least 10 characters long!'],
   },
   password: {
      type: String,
      required: [true, 'Password is required!'],
      minLength: [6, 'Password must be at least 6 characters long!'],
      match: [/^[a-zA-Z0-9]+$/, 'Invalid password!'],
   },
});

userSchema.pre('save', async function () {
   this.password = await bcrypt.hash(this.password, 13);
});

const User = model('User', userSchema);

export default User;