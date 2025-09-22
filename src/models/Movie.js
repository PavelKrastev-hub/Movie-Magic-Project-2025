import { v4 as uuid } from "uuid";

export const movies = [
  {
    _id: "550e8400-e29b-41d4-a716-446655440000",
    title: "The Shawshank Redemption",
    genre: "Drama",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    imageUrl:
      "https://m.media-amazon.com/images/I/51r1lzFTpFL._UF894,1000_QL80_.jpg",
    director: "Frank Darabont",
    year: '1994',
    rating: 7.3,
    category: "Classic",
  },
  {
    _id: "6fa459ea-ee8a-3ca4-894e-db77e160355e",
    title: "The Godfather",
    genre: "Crime",
    description:
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    director: "Francis Ford Coppola",
    year: '1972',
    rating: 9.2,
    category: "Classic",
  },
  {
    _id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    title: "Inception",
    genre: "Sci-Fi",
    description:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an _idea into a CEO's mind.",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjhkNjM0ZTMtNGM5MC00ZTQ3LTk3YmYtZTkzYzdiNWE0ZTA2XkEyXkFqcGc@._V1_.jpg",
    director: "Christopher Nolan",
    year: '2010',
    rating: 8.8,
    category: "Blockbuster",
  },
  {
    _id: "16fd2706-8baf-433b-82eb-8c7fada847da",
    title: "The Dark Knight",
    genre: "Action",
    description:
      "Batman must accept one of the greatest psychological and physical tests when he faces the Joker, a criminal mastermind wreaking havoc on Gotham.",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    director: "Christopher Nolan",
    year: '2008',
    rating: 9.0,
    category: "Superhero",
  },
  {
    _id: "886313e1-3b8a-5372-9b90-0c9aee199e5d",
    title: "Pulp Fiction",
    genre: "Crime",
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in tales of violence and redemption.",
    imageUrl: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SL1188_.jpg",
    director: "Quentin Tarantino",
    year: '1994',
    rating: 8.9,
    category: "Cult Classic",
  },
];

export default class Movie {
  constructor(data) {
    Object.assign(this, data);

    this._id = uuid;
  }

  static find(filter = {}) {
    let result = movies.slice();

    if (filter._id) {
      result = movies.filter(movie => movie._id === filter._id);
    }

    if (filter.title) {
      result = movies.filter(movie => movie.title.toLowerCase().includes(filter.title.toLowerCase()));
    }

    if (filter.genre) {
      result = movies.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
    }

    if (filter.year) {
      result = movies.filter(movie => movie.year === filter.year);
    }

    return result;
  }

  static findOne(filter = {}) {
    let result = movies[0];

    if (filter._id) {
      result = movies.find((movie) => movie._id === filter._id);
    }

    return result;
  }

  get id() {
    return this._id;
  }

  save() {
    movies.push(this);

    return this;
  }
}
