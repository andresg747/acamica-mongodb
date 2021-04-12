const Movies = require('./models/movie');

// Actualizamos los datos 
Movies.findOne({ title: 'ET' })
  .then(function (result) {
    result.title = 'Pesadilla en la calle del infierno';
    result.director = 'Wes Craven';
    result.genre = 'Terror';
    result.year = '1984';
    result.save();
    console.log(result);
  });
