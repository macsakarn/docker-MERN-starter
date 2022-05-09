const express = require("express");
var cors = require("cors");
const app = express();
const port = 4000;
app.use(cors());

// ต่อ DataBase
const mongoose = require("mongoose");
const database = require("./database/database");

mongoose.Promise = global.Promise;
mongoose.connect(database.mongouri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", () => {
  console.error("Something went wrong in mongodb %s", configs.mongouri);
});

//ทดลอง Database
app.get("/database", async (req, res) => {
  const blogSchema = new mongoose.Schema({
    title: String,
  });
  const Blog = mongoose.model("Blog", blogSchema);
  const newBlog = new Blog({title:"test"})
  try {
    await newBlog.save();
    res.send(newBlog);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/", (req, res) => {
    res.json({
      text: "Hello",
    });
  });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
