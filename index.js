const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/bcj'
const name = 'BCJ'

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
  if (err) throw err
  console.log(`Database Created by ${name}`)
  db.close()
})
