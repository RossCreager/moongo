const { collection } = require('./db')
const moongo = require('@rcreager/moongo')

const pokemonCollection = collection('pokemon')
const pokemonRepository = moongo.collection(pokemonCollection)

module.exports = pokemonRepository
