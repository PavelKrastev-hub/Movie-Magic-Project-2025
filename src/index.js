import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";

import routes from "./routes.js";
import cookieParser from "cookie-parser";
import authMiddleware from "./middlewares/authMiddleware.js";
import pageHelpers from "./helpers/pageHelpers.js";

const app = express();

// Setup Database
const url = 'mongodb://localhost:27017';
try {
  await mongoose.connect(url, {
    dbName: 'movie-magic-sept-2025'
  });

  console.log('Connected to DB succesfully!');
} catch (err) {
  console.error('Cannot connect to DB', err.message);
}


// Setup handlebars
app.engine("hbs", handlebars.engine({
  extname: "hbs",
  runtimeOptions: {
    allowProtoMethodsByDefault: true,
    allowProtoPropertiesByDefault: true,
  },
  helpers: {
    ...pageHelpers
  }
}));

app.set("view engine", "hbs");
app.set("views", "src/views");

// Setup middlewares
app.use(express.static("src/public"));

// Parse form data from request
app.use(express.urlencoded());

// Cookie Parser
app.use(cookieParser());

//Use auth middleware
app.use(authMiddleware);

//Routes
app.use(routes);

// Start server
app.listen(5500, () =>
  console.log("Server is listening on http://localhost:5500...")
);
