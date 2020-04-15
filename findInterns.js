const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/'

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
  if (err) throw err
  const dbo = db.db('bcj')

  //Return the first document in the collection
  dbo.collection('myMovies').findOne({}, (err, movies) => {
    if (err) throw err
    console.log(movies)
  })

  //Return movie with a rating of 7
  dbo
    .collection('myMovies')
    .find({ rating: 7 })
    .forEach(movies => console.log(movies))

  //Projection object to return only movie titles
  dbo
    .collection('myMovies')
    .find({}, { projection: { _id: 0, movie: 1 } })
    .toArray((err, movies) => {
      if (err) throw err
      console.log(movies)
      db.close()
    })
})
