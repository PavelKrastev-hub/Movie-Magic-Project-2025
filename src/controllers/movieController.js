import { Router } from "express";
import { movies } from "../models/Movie.js";

const movieController = Router();

movieController.get('/create', (req, res) => {
   res.render('create');
});

movieController.post('/create', (req, res) => {
   movies.push(req.body);
   res.redirect('/');
});

export default movieController;