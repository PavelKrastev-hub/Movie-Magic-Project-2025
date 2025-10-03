import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from "../models/User.js"

const JWT_SECRET = 'asdkjnqwinaskcmakjsdbgbnschabsgx'


export default {
   register(userData) {
      return User.create(userData);
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
      const payload = {
         id: user.id,
         email: user.email
      };

      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });

      return token;
   },
}