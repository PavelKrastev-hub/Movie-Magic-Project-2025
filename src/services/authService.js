import bcrypt from 'bcrypt';

import User from "../models/User.js"
import { generateAuthToken } from '../utils/tokenUtils.js';


export default {
   async register(userData) {
      const userExists = await User.exists({ email: userData.email });

      if (userExists) {
         throw new Error('User already exists!');
      }

      const user = await User.create(userData);

      const token = generateAuthToken(user);

      return token;
   },
   async login(email, password) {
      // Validate password
      const user = await User.findOne({ email });

      if (!user) {
         throw new Error('Invalid user or password!');
      }

      // Validate passowrd
      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
         throw new Error('Invalid user or password!');
      }

      // Create token
      const token = generateAuthToken(user)

      return token;
   },
}