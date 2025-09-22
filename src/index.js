import express from "express";
import handlebars from "express-handlebars";
import homeController from './controllers/homeController.js'
import movieController from "./controllers/createMovie.js";

const app = express();

// Setup handlebars
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", "src/views");

// Setup middlewares
app.use(express.static("src/public"));

//Routes
app.use(homeController);
app.use('/movies', movieController);

// Start server
app.listen(5500, () =>
  console.log("Server is listening on http://localhost:5500...")
);
