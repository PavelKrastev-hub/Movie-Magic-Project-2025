import { Router } from "express";
import userService from "../services/authService.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";

const authController = Router();

authController.get('/register', isGuest, (req, res) => {
   res.render('auth/register');

});

authController.post('/register', isGuest, async (req, res) => {
   const userData = req.body;

   try {

      const token = await userService.register(userData);

      res.cookie('auth', token);

      res.redirect('/');
   } catch (err) {
      const errorMessage = Object.values(err.errors).at(0).message
      res.status(400).render('auth/register', { error: errorMessage, user: userData });
   }


});

authController.get('/login', isGuest, (req, res) => {
   res.render('auth/login');
});

authController.post('/login', isGuest, async (req, res) => {
   const { email, password } = req.body;
   const token = await userService.login(email, password);

   // Attach token to cookie
   res.cookie('auth', token);

   res.redirect('/');
});

authController.get('/logout', isAuth, (req, res) => {
   //Clear auth cookie
   res.clearCookie('auth');

   //Bonus: Invalidate JWT Token

   res.redirect('/');
});

export default authController;