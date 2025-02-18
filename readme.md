# PokémonAPI SDK

A TypeScript SDK for interacting with the PokémonAPI.

## Project Structure

```
demo-pokedex-sdk/
├── src/
│   ├── client/
│   │   ├── index.ts        # Main SDK client
│   │   └── types.ts        # Common type definitions
│   ├── resources/
│   │   ├── pokemon.ts      # Pokemon resource endpoints
│   │   ├── moves.ts        # Moves resource endpoints
│   │   ├── items.ts        # Items resource endpoints
│   │   └── ...            # Other resource endpoints
│   ├── utils/
│   │   ├── request.ts      # HTTP request handling
│   │   └── errors.ts       # Error handling
│   └── index.ts            # Main entry point
├── tests/
│   ├── pokemon.test.ts     # Pokemon endpoint tests
│   ├── moves.test.ts       # Moves endpoint tests
│   └── ...                # Other tests
├── examples/
│   └── basic-usage.ts      # Example usage
├── dist/                   # Compiled JavaScript
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Installation

```bash
npm install @username/pokemon-api-sdk
```

## Usage

```typescript
import { PokemonClient } from '@username/pokemon-api-sdk';

const client = new PokemonClient();

// Get information about a specific Pokemon
const pikachu = await client.pokemon.get('pikachu');
console.log(pikachu.name); // "pikachu"
console.log(pikachu.types); // [{ slot: 1, type: { name: "electric", url: "..." } }]

// Get a list of moves
const moves = await client.moves.list({ limit: 20, offset: 0 });
```

## Features

- Full TypeScript support with complete type definitions
- Promise-based API
- Comprehensive coverage of PokémonAPI endpoints
- Built-in rate limiting support
- Error handling and retries
- Pagination support