const MongoClient = require('mongodb').MongoClient
const { MongoMemoryServer } = require('mongodb-memory-server')
const moongo = require('./index')

let mongoServer
let database

beforeAll(async () => {
  mongoServer = new MongoMemoryServer()
  const mongoUri = await mongoServer.getUri()
  const connection = await MongoClient.connect(mongoUri)
  const dbName = await mongoServer.getDbName()
  database = await connection.db(dbName)
})

afterAll(async () => {
  await mongoServer.stop()
})

describe('moongo', () => {
  it('collection adds helper functions', async () => {
    const pokemonCollection = moongo.collection(database.collection('pokemon'))

    expect(pokemonCollection).toHaveProperty('collection')
    expect(pokemonCollection).toHaveProperty('findOne')
    expect(pokemonCollection).toHaveProperty('findOneById')
    expect(pokemonCollection).toHaveProperty('getMany')
    expect(pokemonCollection).toHaveProperty('deleteOne')
    expect(pokemonCollection).toHaveProperty('deleteOneById')
    expect(pokemonCollection).toHaveProperty('insertOne')
    expect(pokemonCollection).toHaveProperty('insertMany')
    expect(pokemonCollection).toHaveProperty('updateOne')
    expect(pokemonCollection).toHaveProperty('updateOneById')
    expect(pokemonCollection).toHaveProperty('updateMany')
    expect(pokemonCollection).toHaveProperty('deleteAll')
    expect(pokemonCollection).toHaveProperty('deleteMany')
    expect(pokemonCollection).toHaveProperty('countDocuments')
    expect(pokemonCollection).toHaveProperty('aggregate')
  })
})
