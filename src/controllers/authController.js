import { Router } from "express";
// import bcrypt from "bcrypt";

const authController = Router();


authController.get('/login', (req, res) => {
   res.render('auth/login');
});

authController.get('/register', (req, res) => {
   res.render('auth/register');

});

authController.post('/register', (req, res) => {
   const { email, password, rePass } = req.body;

   console.log(email, password, rePass);
   res.send('Registered successfully!')

   res.end();
});

export default authController;