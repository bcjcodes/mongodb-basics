const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/'

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
  if (err) throw err
  const dbo = db.db('bcj')
  dbo.createCollection('interns', (err, res) => {
    if (err) throw err
    console.log('Interns Collection Created')
  })
})
