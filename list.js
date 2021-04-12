const Movies = require('./models/movie');

// Using callbacks
// Movies.find(function (err, resultado) {
//   if (err) console.log(err);
//   console.log(resultado);
//   process.exit();
// })

// Using Promises then/catch
// Movies.find()
//   .then(function (resultado) {
//     console.log(resultado);
//     process.exit();
//   })
//   .catch(err => console.log(err));

// Using async/await
const showList = async () => {
  try {
    const result = await Movies.find();
    console.log(result);
    process.exit();
  } catch (error) {
    console.log(error);
  }
}
showList();
