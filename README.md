# Moongo
<img src="logo.png" width="300">

Moongo is a helpful wrapper for Mongo collections.

## Installation

npm install @rcreager/moongo

## Example

### Basic Example
```javascript
const moongo = require('@rcreager/moongo')
const pokemonRepository = moongo.repository(pokemon)

module.exports = pokemonRepository
```
### [More Examples ](examples)

## Contributing

Before submitting a pull request
* Follow eslint rules
* Add unit tests for any new code or fixed bug

## License
Moongo is MIT licensed.
