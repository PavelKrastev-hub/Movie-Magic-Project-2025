import { Router } from "express";
// import bcrypt from "bcrypt";

const userController = Router();


userController.get('/login', (req, res) => {
   res.render('login');
});

userController.get('/register', (req, res) => {
   res.render('register');

});

userController.post('/register', (req, res) => {
   const { email, password, rePass } = req.body;

   console.log(email, password, rePass);
   res.send('Registered successfully!')

   res.end();
});

export default userController;