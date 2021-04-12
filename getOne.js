const Movies = require('./models/movie');

// Using async/await
const showList = async () => {
  try {
    const result = await Movies.findOne({ title: 'ET' }).exec();
    console.log(result);
    process.exit();
  } catch (error) {
    console.log(error);
  }
}
showList();
