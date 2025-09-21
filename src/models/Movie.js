const movies = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    title: "The Shawshank Redemption",
    genre: "Drama",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    imageUrl: "https://m.media-amazon.com/images/I/81nC0hUN6mL._AC_SL1500_.jpg",
    director: "Frank Darabont",
    year: 1994,
    rating: 9.3,
    category: "Classic"
  },
  {
    id: "6fa459ea-ee8a-3ca4-894e-db77e160355e",
    title: "The Godfather",
    genre: "Crime",
    description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    imageUrl: "https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg",
    director: "Francis Ford Coppola",
    year: 1972,
    rating: 9.2,
    category: "Classic"
  },
  {
    id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    title: "Inception",
    genre: "Sci-Fi",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into a CEO's mind.",
    imageUrl: "https://m.media-amazon.com/images/I/51xJjI5l2-L._AC_.jpg",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    category: "Blockbuster"
  },
  {
    id: "16fd2706-8baf-433b-82eb-8c7fada847da",
    title: "The Dark Knight",
    genre: "Action",
    description: "Batman must accept one of the greatest psychological and physical tests when he faces the Joker, a criminal mastermind wreaking havoc on Gotham.",
    imageUrl: "https://m.media-amazon.com/images/I/51k0qa6zY-L._AC_.jpg",
    director: "Christopher Nolan",
    year: 2008,
    rating: 9.0,
    category: "Superhero"
  },
  {
    id: "886313e1-3b8a-5372-9b90-0c9aee199e5d",
    title: "Pulp Fiction",
    genre: "Crime",
    description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in tales of violence and redemption.",
    imageUrl: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SL1188_.jpg",
    director: "Quentin Tarantino",
    year: 1994,
    rating: 8.9,
    category: "Cult Classic"
  }
];



export default class Movie {
   static find() {
         return movies.slice();
   }
}