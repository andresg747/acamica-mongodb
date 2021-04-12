const Movies = require('./models/movie');

const ID = '6074d1d605d7be3c038f75e4';

// Using callbacks
// Movies.deleteOne({ _id: ID }, function (error, resp) {
//   console.log(resp);
// })

// Using Promises then/catch
// Movies.deleteOne({ _id: ID })
//   .then(function (error, resp) {
//     console.log(resp);
//   });

// Using async/await
const removeItem = async () => {
  try {
    const result = await Movies.deleteOne({ _id: ID });
    console.log(result);
    process.exit();
  } catch (error) {
    console.log(error)
  }
}
removeItem();
