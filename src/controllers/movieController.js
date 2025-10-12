import { Router } from 'express';
import movieService from '../services/movieService.js';
import castService from '../services/castService.js';
import { isAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import { Types } from 'mongoose';

const movieController = Router();

movieController.get('/create', isAuth, (req, res) => {
  res.render('movies/create', {
    pageTitle: 'Create Movie',
    categories: getMovieCategoryViewData(),
  });
});

movieController.post('/create', isAuth, async (req, res) => {
  const movieData = req.body;
  const creatorId = req.user.id;

  console.log('Movie Data:', movieData);

  try {
    await movieService.create(movieData, creatorId);

    res.redirect('/');
  } catch (error) {
    res.status(400).render('movies/create', {
      error: getErrorMessage(error),
      movie: movieData,
      categories: getMovieCategoryViewData(movieData.category),
    });
  }
});

movieController.get('/:movieId/details', async (req, res) => {
  const movieId = req.params.movieId;

  try {
    const movie = await movieService.getOneDetailed(movieId);

    const ratingViewData = '&#x2605;'.repeat(Math.floor(movie.rating));

    const isCreator = movie.creator && movie.creator.equals(req.user?.id);

    res.render('movies/details', { movie, rating: ratingViewData, pageTitle: 'Movie Details', isCreator });
  } catch (error) {
    // Redirect without message
    // res.redirect('/404');

    // Render 404 with message(URL not modified)
    res.render('404', { error: 'Movie not found!' });

    // Redirect with message (URL modified)
  }
});

movieController.get('/search', async (req, res) => {
  const filter = req.query;
  const movies = await movieService.getAll(filter);

  res.render('search', { movies, filter, pageTitle: 'Search Movies' });
});

movieController.get('/:movieId/attach', async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId);
  const casts = await castService.getAll({ excludes: movie.casts });

  res.render('casts/attach', { movie, casts });
});

movieController.post('/:movieId/attach', async (req, res) => {
  const movieId = req.params.movieId;
  const castId = req.body.cast;

  await movieService.attach(movieId, castId);
  res.redirect(`/movies/${movieId}/details`);
});

movieController.get('/:movieId/delete', isAuth, async (req, res) => {
  const movieId = req.params.movieId;

  const movie = await movieService.getOne(movieId);
  // Check if creator
  if (!movie.creator?.equals(req.user.id)) {
    return res.redirect('/');
  }

  await movieService.delete(movieId);
  res.redirect('/');
});

movieController.get('/:movieId/edit', async (req, res) => {
  const movieId = req.params.movieId;

  try {
    const movie = await movieService.getOne(movieId);

    const categoriesViewData = getMovieCategoryViewData(movie.category);

    res.render('movies/edit', { movie, categories: categoriesViewData });
  } catch (error) {
    res.render('404', { error: 'Movie not found!' });
  }

});

movieController.post('/:movieId/edit', async (req, res) => {
  const movieId = req.params.movieId;
  const movieData = req.body;

  try {
    await movieService.edit(movieId, movieData);

    res.redirect(`/movies/${movieId}/details`);
  } catch (error) {
    res.status(400).render('movies/edit', {
      movie: movieData,
      categories: getMovieCategoryViewData(movieData.category),
      error: getErrorMessage(error),
    });
  }

});

function getMovieCategoryViewData(selectedCategory) {
  const categories = [
    { value: 'tv-show', label: 'TV Show' },
    { value: 'animation', label: 'Animation' },
    { value: 'movie', label: 'Movie' },
    { value: 'documentary', label: 'Documentary' },
    { value: 'short-film', label: 'Short Film' },
  ];

  const viewData = categories.map(category => ({ ...category, selected: selectedCategory === category.value ? 'selected' : '' }));

  return viewData;
}

export default movieController;
