# @superb-owl-dev/poke-api-sdk

A fully-typed TypeScript SDK for the PokéAPI (pokeapi.co), providing an elegant and type-safe way to interact with Pokémon data in your TypeScript/JavaScript applications.

## Features

- 🎯 Complete TypeScript support with comprehensive type definitions
- 🚀 Promise-based async/await API
- 📦 Modern ES modules and CommonJS support
- 🔒 Type-safe responses matching the official PokéAPI schema
- 🛠️ Built-in error handling and request timeout configuration
- 📝 Extensive documentation with examples
- 🔄 Smart caching for optimal performance
- 🌐 Pagination support for listing resources
- 🔍 Exact and partial name matching for Pokemon search
- 🎮 Full coverage of PokéAPI endpoints

## Improvements Over Vanilla API
This SDK provides several quality-of-life improvements over using the vanilla PokéAPI directly:

### 1. Built-in Caching
- Automatic in-memory caching of API responses with a 1-hour TTL
- Configurable cache behavior (can be enabled/disabled)
- Helps reduce API calls and improve application performance
- Respects the PokéAPI's fair use policy by minimizing duplicate requests

### 2. Smart Pagination
- `fetchAll` option to automatically handle pagination and retrieve all results
- Automatically optimizes page size (100 items per request) when fetching all results
- Simplified pagination interface with limit/offset parameters

### 3. Enhanced Search Capabilities
- Intelligent Pokemon search that tries exact match first, then falls back to partial matching
- Search across Pokemon names with case-insensitive matching
- Returns full Pokemon details instead of just resource URLs

### 4. Type Safety
- Full TypeScript definitions for all API responses
- Compile-time type checking for parameters and responses
- IDE autocompletion support for all methods and properties

### 5. Convenience Methods
- `getPokemonsByGeneration`: Get all Pokemon from a specific generation in one call
- Combined endpoints that handle multiple API calls automatically
- Simplified resource access with uniform method signatures

### 6. Error Handling
- Detailed error messages and proper error typing
- Automatic retry on network failures
- Timeout handling with configurable duration
- Proper error propagation with API-specific error details

## Installation

```bash
npm install https://github.com/superb-owl-dev/poke-api-sdk
```

## Quick Start

```typescript
import { PokeAPIClient } from '@superb-owl-dev/poke-api-sdk';

// Initialize the client
const pokedex = new PokeAPIClient({
  baseURL: 'https://pokeapi.co/api/v2', // Optional, this is the default
  timeout: 10000, // Optional, defaults to 10000ms
  cacheEnabled: true // Optional, defaults to true
});

// Get information about a specific Pokemon
async function getPokemonInfo() {
  try {
    const pikachu = await pokedex.getPokemon('pikachu');
    console.log(pikachu.name); // 'pikachu'
    console.log(pikachu.types); // Array of types
  } catch (error) {
    if (error.response?.status === 404) {
      console.error('Pokemon not found');
    } else {
      console.error('Error fetching Pokemon:', error);
    }
  }
}

// Get a paginated list of Pokemon
async function listPokemon() {
  try {
    const pokemon = await pokedex.listPokemon({ limit: 20, offset: 0 });
    console.log(pokemon.results); // Array of Pokemon resources
    
    // Get full details for each Pokemon if needed
    const fullDetails = await Promise.all(
      pokemon.results.map(p => pokedex.getPokemon(p.name))
    );
  } catch (error) {
    console.error('Error listing Pokemon:', error);
  }
}
```

## Available APIs

### Pokémon
```typescript
// Get a specific Pokemon
const pokemon = await pokedex.getPokemon('pikachu');

// Get Pokemon encounters
const encounters = await pokedex.getPokemonEncounters('pikachu');

// List Pokemon with pagination options
const pokemonList = await pokedex.listPokemon({ 
    limit: 20,    // Optional, default 20
    offset: 0,    // Optional, default 0
    fetchAll: false // Optional, default false. If true, fetches all results
});

// Search for Pokemon by name
const searchResults = await pokedex.searchPokemon('char');

// Get a specific Generation
const gen1 = await pokedex.getGeneration(1);

// Get all Pokemon from Generation 1
const gen1Pokemon = await pokedex.getPokemonsByGeneration(1);

// List all Generations
const generations = await pokedex.listGenerations({ fetchAll: true }); // Gets all generations at once
```

### Berries
```typescript
// Get a specific berry
const berry = await pokedex.getBerry('cheri');

// Get berry firmness
const firmness = await pokedex.getBerryFirmness('very-soft');

// Get berry flavor
const flavor = await pokedex.getBerryFlavor('spicy');

// List all berries with pagination
const berries = await pokedex.listBerries({ limit: 20, offset: 0 });
```

### Items
```typescript
// Get a specific item
const item = await pokedex.getItem('potion');

// Get item attribute
const attribute = await pokedex.getItemAttribute('holdable');

// Get item category
const category = await pokedex.getItemCategory('healing');

// Get item fling effect
const flingEffect = await pokedex.getItemFlingEffect('badly-poison');

// Get item pocket
const pocket = await pokedex.getItemPocket('medicine');

// List all items with pagination
const items = await pokedex.listItems({ limit: 20, offset: 0 });
```

### Moves
```typescript
// Get a specific move
const move = await pokedex.getMove('tackle');

// Get move ailment
const ailment = await pokedex.getMoveAilment('paralysis');

// Get move battle style
const battleStyle = await pokedex.getMoveBattleStyle('attack');

// Get move category
const category = await pokedex.getMoveCategory('damage');

// Get move damage class
const damageClass = await pokedex.getMoveDamageClass('physical');

// Get move learn method
const learnMethod = await pokedex.getMoveLearnMethod('level-up');

// Get move target
const target = await pokedex.getMoveTarget('selected-pokemon');

// List all moves with pagination
const moves = await pokedex.listMoves({ limit: 20, offset: 0 });
```

### Locations
```typescript
// Get a specific location
const location = await pokedex.getLocation('canalave-city');

// Get location area
const area = await pokedex.getLocationArea('canalave-city-area');

// Get pal park area
const palParkArea = await pokedex.getPalParkArea('field');

// Get region
const region = await pokedex.getRegion('kanto');

// List locations with pagination
const locations = await pokedex.listLocations({ limit: 20, offset: 0 });

// List location areas with pagination
const areas = await pokedex.listLocationAreas({ limit: 20, offset: 0 });

// List regions with pagination
const regions = await pokedex.listRegions({ limit: 20, offset: 0 });
```

## Configuration

You can configure the client with custom options:

```typescript
const client = new PokeAPIClient({
  baseURL: 'https://pokeapi.co/api/v2', // Default API URL
  timeout: 10000, // Request timeout in milliseconds
  cacheEnabled: true // Enable/disable caching (enabled by default)
});
```

## Error Handling

The SDK throws descriptive errors that can be caught and handled in your application:

```typescript
try {
  const pokemon = await pokedex.getPokemon('nonexistent-pokemon');
} catch (error) {
  if (error.response?.status === 404) {
    console.error('Pokemon not found');
  } else if (error.code === 'ECONNABORTED') {
    console.error('Request timed out');
  } else {
    console.error('An error occurred:', error);
  }
}
```

## Design Decisions

- **Axios for HTTP**: We chose Axios for its reliability, wide browser support, and interceptor capabilities.
- **TypeScript First**: Built with TypeScript from the ground up for maximum type safety and developer experience.
- **Modular Architecture**: Organized by resource types for maintainability and tree-shaking support.
- **Comprehensive Types**: All API responses are fully typed according to the official PokéAPI specifications.
- **Promise-based**: Modern async/await API design for better error handling and code readability.

## Implementation Details

### Caching Strategy
The SDK implements an in-memory caching system with configurable TTL (Time To Live). By default:
- Cache is enabled with a 1-hour TTL
- All successful GET requests are cached
- Cache can be disabled via configuration
- Cache is automatically invalidated after TTL expires

### Error Handling Details
The SDK provides error handling through the underlying Axios HTTP client:

```typescript
try {
  await pokedex.getPokemon('invalid-name');
} catch (error) {
  if (error.response?.status === 404) {
    // Handle 404 Not Found
    console.error('Pokemon not found');
  } else if (error.code === 'ECONNABORTED') {
    // Handle timeout
    console.error('Request timed out');
  } else if (error.code === 'ERR_NETWORK') {
    // Handle network issues
    console.error('Network error occurred');
  }
  // Axios error object includes:
  // - response: The server response if received
  // - request: The request that generated the error
  // - message: Human-readable error message
  // - code: Error code (e.g. 'ECONNABORTED')
}
```

### Resource Resolution
The SDK provides direct access to the PokeAPI resources through strongly-typed interfaces. Resources like Pokemon contain all their associated data as returned by the API:

```typescript
const pokemon = await pokedex.getPokemon('charizard');
console.log(pokemon.types);     // Array of type information
console.log(pokemon.abilities); // Array of ability information
console.log(pokemon.stats);     // Array of base stats
```

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