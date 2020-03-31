let MongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/bcj'
let name = 'BCJ'

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
  if (err) throw err
  console.log(`Database Created by ${name}`)
  db.close()
})
