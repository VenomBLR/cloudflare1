import express from "express";
import bodyParser from "body-parser";
import mainRouter from "./src/routes/main.js";

// Create a new express application instance
const app = express();
const port = process.env.PORT ? process.env.PORT : 8000;

//CORS Middleware
app.use(bodyParser.json());
app.use(express.json());

app.use((req, res, next) => {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/", mainRouter);

// Open port
app.listen(port, () => {
  console.debug("Server listening on port: " + port);
});

process.on("uncaughtException", (err) => {
  console.log(err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", promise, "reason:", reason);
});
