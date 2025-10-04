# movie-magic-2025

SoftUni Movie-Magic JS-Project

### Workshop 1 - Express and Templating

### Setup
- [x] Initialize project
- [x] Add express server
- [x] Config debugging
- [x] Add workshop resources
- [x] Setup handlebars
- [x] Setup static files
- [x] Render home page
- [x] Add layout
- [x] Render about page

### Architecture and dynamic rendering

- [x] Add home cotroller
- [x] Add movie data layer
- [x] Add movie service
- [x] Render movies on home page
- [x] Show no movies screen


### Create movie

- [x] Create movie controller
- [x] Show create movie page
- [x] Add routes
- [x] Add 404 page
- [x] Read body data
- [x] Create movie
  - [x] Add action
  - [x] Add service
  - [x] add model method for creating movie
- [x] Redirect after creation
- [x] Add unique id for each created movie


### Details page

- [x] Add navigation button for details page
- [x] Add route with param for details page
- [x] Get one movie from service
- [x] Find movie by id from model
- [x] Render details page with dynamic data


### Search page

- [x] Show static search page
- [x] Render all movies
- [x] Modify search form
- [x] Filter movies
  - [x] By year
  - [x] By genre
  - [x] By title
- [x] Remember search words

### Bonuses

- [x] Dynamic page title
- [x] File persistance
- [x] Rating

--- 

### Workshop 2 - MognoDB Database

### Setup
- [x] Install mongoose `npm i mongoose`
- [x] Connect to DB

### Refactor Movies to use mongoose
- [x] Add movie model
  - [x] Create movie schema
  - [x] Create movie model
- [x] Import file movies to database
- [x] Fix own property handlebars problem with lean method;
- [x] General fix for own propert problem;
- [x] Refactor details
- [x] Refactor create
- [x] Refactor search

### Add cast 
- [x] Add new resources
- [x] Create Cast controller
- [x] Create cast page
- [x] Add cast model
- [x] Add cast service
- [x] Create cast functinallity

### Attach cast to Movie
- [x] Add attach cast button
- [x] Add attach cast page
- [x] Show cast list in attach select
- [x] Add relations between cast and movie
- [x] Add attach cast funtionallity

### Show cast on details
- [x] Get movie casts filtered
- [x] Show casts on details
- [x] Get movie casts using population

### Bonuses
- [x] Filter casts if they are already attached
- [ ] Env variables
- [ ] Name in movie
- [ ] Add movie views to a folder

---
### Workshop 3 - Session and Authentication

### Initial Setup
- [x] Add new resources

### Registration
- [x] Create user controller
- [x] Add registration page
- [x] Add user model
- [x] Add user service
- [x] Handle registration (create user in database)
- [x] Add password hashing

### Login

- [x] Add login page
- [x] Hnalde login page
- [x] Validate user
- [x] Validate password
- [x] Create token
- [x] Return token to client

### Logout
- [x] Add logout action
- [x] Clear cookie

### Dynamic Navigation
- [x] Group navigation by user type (all, authenticated and guest)
- [x] Add auth info to handlebars context

### Authorization
- [x] Install cookie-parser
- [x] Add auth middleware
- [x] Validate user authentication
- [x] Add isAuth route guard
- [x] Add isGuest route guard

### Show creator control buttons
- [x] Add edit and delete buttons on details page
- [ ] Show buttons only for creators

### Bonuses
- [ ] Automatic login on register
- [ ] Invalidate token on logout
- [ ] Refresh token