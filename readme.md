# @superb-owl-dev/poke-api-sdk

A fully-typed TypeScript SDK for the PokéAPI (pokeapi.co), providing an elegant and type-safe way to interact with Pokémon data in your TypeScript/JavaScript applications.

## Features

- 🎯 Complete TypeScript support with comprehensive type definitions
- 🚀 Promise-based async/await API
- 📦 Modern ES modules and CommonJS support
- 🔒 Type-safe responses matching the official PokéAPI schema
- 🛠️ Built-in error handling and request timeout configuration
- 📝 Extensive documentation with examples
- 🔄 Automatic response transformation
- 🎮 Full coverage of PokéAPI endpoints

## Improvements Over Native API

Our SDK provides several developer-friendly abstractions over the native PokéAPI:

1. **Type Safety**: Full TypeScript type definitions for all API responses, providing autocomplete and compile-time type checking.

2. **Simplified Resource Access**: While the native API returns URLs for related resources that need additional fetching, our SDK methods handle resource resolution automatically.

3. **Promise-Based Architecture**: All API calls return Promises and support modern async/await syntax, making it easier to handle asynchronous operations.

4. **Error Handling**: Built-in error handling with descriptive error messages and proper error types, rather than raw HTTP responses.

5. **Configurable Client**: A configurable client instance that allows setting custom timeouts, base URLs, and other options.

6. **Pagination Handling**: Built-in support for pagination with limit and offset parameters, making it easy to fetch large sets of data.

7. **Resource Caching**: The SDK implements caching strategies to comply with PokéAPI's fair use policy and improve performance.

8. **Modular Design**: Resources are organized by type (Pokemon, Berries, Items, etc.) for better code organization and tree-shaking support.

9. **Consistent Interface**: While the native API has varying response structures, our SDK normalizes responses for a consistent developer experience.

10. **Automatic Type Transformation**: The SDK automatically handles type conversions and data normalization, reducing boilerplate code.

## Installation

```bash
npm install @superb-owl-dev/poke-api-sdk
# or
yarn add @superb-owl-dev/poke-api-sdk
```

## Quick Start

```typescript
import { PokeAPIClient } from '@superb-owl-dev/poke-api-sdk';

// Initialize the client
const client = new PokeAPIClient();

// Get information about a specific Pokemon
async function getPokemonInfo() {
  try {
    const pikachu = await client.getPokemon('pikachu');
    console.log(pikachu.name); // 'pikachu'
    console.log(pikachu.types); // Array of types
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
  }
}

// List all berries with pagination
async function listBerries() {
  try {
    const berries = await client.listBerries(20, 0); // limit: 20, offset: 0
    console.log(berries.results); // Array of berry resources
  } catch (error) {
    console.error('Error fetching berries:', error);
  }
}
```

## Available APIs

The SDK provides access to all major PokéAPI endpoints including:

### Pokémon
```typescript
// Get a specific Pokemon
const pokemon = await client.getPokemon('pikachu');

// Get Pokemon encounters
const encounters = await client.getPokemonEncounters('pikachu');

// List all Pokemon (paginated)
const pokemonList = await client.listPokemon(20, 0);
```

### Berries
```typescript
// Get a specific berry
const berry = await client.getBerry('cheri');

// Get berry firmness
const firmness = await client.getBerryFirmness('very-soft');

// List all berries (paginated)
const berries = await client.listBerries(20, 0);
```

### Items
```typescript
// Get a specific item
const item = await client.getItem('potion');

// Get item category
const category = await client.getItemCategory('healing');

// List all items (paginated)
const items = await client.listItems(20, 0);
```

### Moves
```typescript
// Get a specific move
const move = await client.getMove('tackle');

// Get move ailment
const ailment = await client.getMoveAilment('paralysis');

// List all moves (paginated)
const moves = await client.listMoves(20, 0);
```

### Locations
```typescript
// Get a specific location
const location = await client.getLocation('canalave-city');

// Get location area
const area = await client.getLocationArea('canalave-city-area');

// List all locations (paginated)
const locations = await client.listLocations(20, 0);
```

### TypeScript Generic Support
The SDK leverages TypeScript generics for enhanced type safety when working with collections:

```typescript
// Using generics with pagination
const berries = await client.list<Berry>('berry', { limit: 20 });
berries.results.forEach(berry => {
  // Full type inference for berry properties
  console.log(berry.firmness);
});

// Strongly-typed search results
const searchResults = await client.search<Pokemon>('pokemon', 'char');
searchResults.forEach(pokemon => {
  // TypeScript knows these are Pokemon objects
  console.log(pokemon.types);
});
```

For more examples and API documentation, visit our [full documentation](https://github.com/superb-owl-dev/poke-api-sdk/docs).

## Example: SDK vs Native API

Here's how our SDK simplifies common operations compared to the native API:

```typescript
// Native API (without SDK)
async function getPokemonWithTypes() {
  // Requires multiple fetch calls
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  const pokemon = await response.json();
  
  // Need to fetch each type separately
  const typePromises = pokemon.types.map(t => fetch(t.type.url).then(r => r.json()));
  const types = await Promise.all(typePromises);
}

// With our SDK
async function getPokemonWithTypes() {
  const pokemon = await client.getPokemon('pikachu');
  // Types are already resolved and properly typed!
  console.log(pokemon.types);
}

// Native API pagination
async function getAllPokemon() {
  let url = 'https://pokeapi.co/api/v2/pokemon';
  const allPokemon = [];
  
  while (url) {
    const response = await fetch(url);
    const data = await response.json();
    allPokemon.push(...data.results);
    url = data.next;
  }
}

// With our SDK
async function getAllPokemon() {
  // Automatic pagination handling
  const pokemon = await client.listPokemon(20, 0);
  // Results are typed and normalized
  console.log(pokemon.results);
}
```

## Configuration

You can configure the client with custom options:

```typescript
const client = new PokeAPIClient({
  baseURL: 'https://pokeapi.co/api/v2', // Default API URL
  timeout: 10000 // Request timeout in milliseconds
});
```

## Error Handling

The SDK throws descriptive errors that can be caught and handled in your application:

```typescript
try {
  const pokemon = await client.getPokemon('nonexistent-pokemon');
} catch (error) {
  if (error.response?.status === 404) {
    console.error('Pokemon not found');
  } else {
    console.error('An error occurred:', error);
  }
}
```

## TypeScript Support

The SDK is written in TypeScript and provides comprehensive type definitions for all API responses. This enables excellent IDE support and type safety in your TypeScript projects.

```typescript
import { Pokemon, Berry, Item } from '@superb-owl-dev/poke-api-sdk';

// All types are properly defined
const pokemon: Pokemon = await client.getPokemon('pikachu');
```

## Design Decisions

- **Axios for HTTP**: We chose Axios for its reliability, wide browser support, and interceptor capabilities.
- **TypeScript First**: Built with TypeScript from the ground up for maximum type safety and developer experience.
- **Modular Architecture**: Organized by resource types for maintainability and tree-shaking support.
- **Comprehensive Types**: All API responses are fully typed according to the official PokéAPI specifications.
- **Promise-based**: Modern async/await API design for better error handling and code readability.

## Tools Used

- [TypeScript](https://www.typescriptlang.org/) - Primary development language
- [Axios](https://axios-http.com/) - HTTP client
- [Jest](https://jestjs.io/) - Testing framework
- [ESLint](https://eslint.org/) - Code linting
- [TypeDoc](https://typedoc.org/) - Documentation generation
- [PokéAPI](https://pokeapi.co/) - Data source

## Implementation Details

### Caching Strategy
The SDK implements caching following PokéAPI's fair use policy. Responses are cached in memory with configurable TTL (Time To Live):

```typescript
const client = new PokeAPIClient({
  cache: {
    ttl: 3600000, // Cache for 1 hour (in milliseconds)
    maxSize: 1000 // Maximum number of cached items
  }
});
```

### Error Handling Details
The SDK provides rich error information:

```typescript
try {
  await client.getPokemon('invalid-name');
} catch (error) {
  if (error.code === 'RESOURCE_NOT_FOUND') {
    // Handle 404 case
  } else if (error.code === 'NETWORK_ERROR') {
    // Handle network issues
  }
  // Error objects include:
  // - code: String error code
  // - message: Human-readable error message
  // - originalError: Original API error (if available)
}
```

### Resource Resolution
The SDK automatically resolves nested resources up to a configurable depth:

```typescript
const client = new PokeAPIClient({
  resolveDepth: 2 // Will resolve nested resources up to 2 levels deep
});

// This will include resolved type and ability details
const pokemon = await client.getPokemon('charizard');
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 Superb Owl Development

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.