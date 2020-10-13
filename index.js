const ObjectId = require('mongodb').ObjectId

exports.collection = (collection) => {
  const findOne = async (query) => {
    return collection.findOne(query)
  }

  const findOneById = async (id) => {
    return collection.findOne({ _id: new ObjectId(id) })
  }

  const getMany = async (query = {}, projection = {}, limit, skip, sort) => {
    const mongoQuery = collection.find(query)

    if (projection) {
      mongoQuery.project(projection)
    }

    if (sort) {
      mongoQuery.sort(sort)
    }

    if (skip) {
      mongoQuery.skip(skip)
    }

    if (limit) {
      mongoQuery.limit(limit)
    }

    return mongoQuery.toArray()
  }

  const deleteOne = async (query) => {
    return collection.deleteOne(query)
  }

  const deleteOneById = async (id) => {
    return collection.deleteOne({ _id: new ObjectId(id) })
  }

  const insertOne = async (object) => {
    object.createDate = new Date()

    return collection.insertOne(object)
  }

  const insertMany = async (objects) => {
    const createdDate = new Date()
    const _objects = objects.map(object => {
      return {
        ...object,
        createdDate,
      }
    })

    return collection.insertMany(_objects)
  }

  const updateOne = async (query, object, options = { upsert: false }) => {
    object.updatedDate = new Date()

    return collection.updateOne(query, { $set: object }, options)
  }

  const updateOneById = async (id, object) => {
    object.updateDate = new Date()

    return collection.udpateOne({ _id: new ObjectId(id) })
  }

  const updateMany = async (query, object, options = { upsert: false }) => {
    object.updatedDate = new Date()

    return collection.updateMany(query, { $set: object }, options)
  }

  const deleteAll = async () => {
    return collection.deleteMany({})
  }

  const deleteMany = async (query) => {
    return collection.deleteMany(query)
  }

  const countDocuments = async (query = {}) => {
    return collection.countDocuments(query)
  }

  const aggregate = async (query) => {
    return collection.aggregate(query).toArray()
  }

  return {
    collection,
    findOne,
    findOneById,
    getMany,
    deleteOne,
    deleteOneById,
    insertOne,
    insertMany,
    updateOne,
    updateOneById,
    updateMany,
    deleteAll,
    deleteMany,
    countDocuments,
    aggregate,
  }
}
