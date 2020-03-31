let MongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/bcj'

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
  if (err) throw err
  console.log('Interns collection created')
  db.close()
})
