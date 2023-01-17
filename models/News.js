const mongoose = require("mongoose");

const NewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const NewModel = mongoose.model("news", NewSchema);
module.exports = NewModel;
