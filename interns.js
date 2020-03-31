const MongoClient = require('mongodb').MongoClient
const dbo = db.db('bcj')
const db = 'mongodb://localhost:27017/bcj'

MongoClient.connect(dbo, { useUnifiedTopology: true }, (err, dbo) => {
  dbo.createCollection([interns], (err, res) => {
    if (err) throw err
    console.log('Interns collection created')
  })
})
