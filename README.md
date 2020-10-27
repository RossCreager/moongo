# Moongo
![Image of Moongo Logo](logo.png)

Moongo is a helpful wrapper for Mongo collections.

## Installation

npm install @rcreager/moongo

## Example

### Basic Example
```javascript
const moongo = require('@rcreager/moongo')
const pokemonCollection = moongo.collection(pokemon)

module.exports = pokemonCollection
```
### [More Examples ](examples)

## Contributing

Before submitting a pull request
* Follow eslint rules
* Add unit tests for any new code or fixed bug

## License
Moongo is MIT licensed.