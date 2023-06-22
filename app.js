const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const { errorHandler } = require("./middlewere/errorHandler");
const { notFounderHandler } = require("./middlewere/notFoundHandler");
connectDb();

app.use("/media", express.static(path.join(__dirname, "media")));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/posts", postsRoutes);
app.use(notFounderHandler);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("The application is running on localhost:8080");
});
