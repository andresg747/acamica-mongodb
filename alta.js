const Movie = require('./models/movie');

let newMovie = {
  title: 'ET', director: "Steven Spielberg", genre: "Fantasía", year: "1986"
}

const result = new Movie(newMovie);

const saveItem = async () => {
  const savedItem = await result.save();
  console.log('Item almacenado correctamente:');
  console.log(savedItem);
  process.exit();
}
saveItem();
