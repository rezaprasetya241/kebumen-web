const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const NewModel = require("./models/News");
const cors = require("cors");

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extends: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extends: true }));

mongoose.connect(
  // "mongodb+srv://user123:kebumen123@cluster0.ebq7log.mongodb.net/?retryWrites=true&w=majority"
  "mongodb+srv://wonorejodua:wonorejodua@cluster0.clhxzqa.mongodb.net/?retryWrites=true&w=majority"
);
app.get("/getTerbaru", (req, res) => {
  NewModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  }).sort({ createdAt: "desc" });
});
app.get("/getNews", (req, res) => {
  NewModel.find({ content: "berita" }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.get("/getArtikel", (req, res) => {
  NewModel.find({ content: "artikel" }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.get("/getEvent", (req, res) => {
  NewModel.find({ content: "event" }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.post("/postNews", async (req, res) => {
  const news = req.body;
  const newNews = new NewModel(news);
  try {
    await newNews.save();
    res.status(201).json("Add News Successfull");
  } catch (error) {
    if (!news.title) {
      res.status(500).json({ message: "Title is required" });
    } else if (!news.content) {
      res.status(500).json({ message: "Content is required" });
    } else if (!news.description) {
      res.status(500).json({ message: "description is required" });
    } else {
      res.status(409).json({ message: error.message });
    }
  }
});
// app.post();
app.listen(5000, () => {
  console.log("SERVER RUNNING ON 5000");
});
