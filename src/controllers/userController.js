import { Router } from "express";

const userController = Router();


userController.get('/login', (req, res) => {
  res.render('login');
});

userController.get('/register', (req, res) => {
  res.render('register');
});

export default userController;