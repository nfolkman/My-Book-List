const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  page: {
    type: Number
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Book', BookSchema)
