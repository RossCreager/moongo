const MongoClient = require('mongodb').MongoClient

let db

const connect = async () => {
  try {
    const connection = await MongoClient.connect('mongodb://127.0.0.1:27017')
    db = connection.db('pokemon')
    console.log('Connected to Mongo')
  } catch (error) {
    console.log(error)
  }
}

const collection = (collection) => {
  return db.collection(collection)
}

module.exports = {
  connect,
  getDb: () => db,
  collection,
}
