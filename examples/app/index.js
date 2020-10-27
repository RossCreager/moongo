const db = require('./db')

const main = async () => {
  await db.connect()
  const pokemonRepo = require('./pokemonRepository')

  await pokemonRepo.insertOne({ name: 'Bulbasaur', type: 'leaf' })
  const leafPokemon = await pokemonRepo.getMany({ type: 'leaf' })
  console.log(leafPokemon)
}

main()
