const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/'

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
  if (err) throw err
  const dbo = db.db('bcj')

  dbo.collection('myMovies').findOneAndUpdate(
    { movie: 'The Banker' },
    {
      $set: { movie: 'Bad Boys For Life', year: 2020, rating: 8.5 }
    },
    dbo
      .collection('myMovies')
      .find()
      .toArray((err, movies) => {
        if (err) throw err
        console.log(movies)
      })
  )
})
