const mongoose = require('../db');

const Movie = mongoose.model('movies', {
  title: {
    type: String,
    required: true
  },
  director: String,
  genre: String,
  year: Date
});

module.exports = Movie;
