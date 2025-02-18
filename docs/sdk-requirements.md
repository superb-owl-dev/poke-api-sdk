Below is a revised Markdown spec sheet that not only outlines the core features (as before) but also explicitly covers the edge cases and use cases demonstrated in your TypeScript sample. This spec sheet is intended to guide a developer in building a TypeScript SDK for PokeAPI that is robust, type‑safe, and handles the nuances described in the readme and sample code.

---

# PokeAPI TypeScript SDK Specification (v2)

This document details the design, functionality, and edge‑case handling for a TypeScript SDK that wraps the PokeAPI. The SDK will be built for TypeScript (with strong typing) and vanilla JavaScript (via transpiled/UMD bundles).

---

## Overview

- **Purpose:**  
  The SDK abstracts the low‑level HTTP GET calls, pagination, caching, and nested resource resolution so that developers can interact with Pokémon and Generation endpoints easily.

- **Primary Endpoints Covered:**  
  - `GET /pokemon/{id or name}`  
  - `GET /pokemon` (paginated)  
  - `GET /generation/{id or name}`  
  - `GET /generation` (paginated)  
  - Additional utility: fetching all Pokémon variants for a species and searching via exact or partial matching.

- **Target Platforms:**  
  TypeScript projects (leveraging strong typing and auto‑completion) and vanilla JavaScript environments.

- **Key Edge Cases (as per the readme and sample):**  
  - The API is read‑only with no rate limiting, but caching is encouraged to reduce hosting load.  
  - Some resources (like Pokémon details) require a second lookup (e.g. fetching species info and variants).  
  - The search function must first attempt an exact match and then fall back to a partial search (limited to a set number of results).  
  - When resolving nested resources (e.g. variants), errors for individual calls should be caught and logged so that one failing call does not break the overall response.

---

## Key Features & Goals

### 1. Typed Resource Fetching

- **Goals:**  
  - Expose user‑friendly functions that return well‑typed objects rather than raw JSON.
  - Hide the details of HTTP calls, JSON parsing, and error handling.

- **Requirements:**  
  - Implement functions such as:  
    - `getPokemon(idOrName: string | number): Promise<PokemonDetail>`  
      *This method must fetch the Pokémon’s primary data, then its species data (using the species name or id from the response), and finally resolve all variants (both default and non‑default).*  
    - `listPokemon(options?: PaginationOptions): Promise<PaginatedResponse<NamedAPIResource>>`
  - Define TypeScript interfaces for all resources (e.g. `Pokemon`, `PokemonSpecies`, `Generation`, etc.) that closely mirror the API’s schema.

---

### 2. Automatic Pagination

- **Goals:**  
  - Allow developers to retrieve complete lists (or a specific “page”) without manual offset/limit management.

- **Requirements:**  
  - Provide helper methods:  
    - `listPokemon(options?: PaginationOptions): Promise<PaginatedResponse<NamedAPIResource>>`  
    - `listGenerations(options?: PaginationOptions): Promise<PaginatedResponse<NamedAPIResource>>`
  - Support an option such as `{ fetchAll: true }` to automatically iterate through pages and return a full list.

---

### 3. Caching & Request Optimization

- **Goals:**  
  - Minimize redundant network calls and honor the fair‑use policy by caching responses.
  
- **Requirements:**  
  - Implement an in‑memory caching layer for resource responses.  
  - Allow configurable cache expiration or an option to bypass caching if needed.
  - Optionally incorporate request deduplication (if two identical calls occur simultaneously) and minimal throttling to “be nice” to the API host.

---

### 4. Resource Resolution & Variant Handling

- **Goals:**  
  - Automatically resolve nested resources (for example, a Pokémon’s species details and all its variants).
  
- **Requirements:**  
  - In `getPokemon`, after fetching a Pokémon’s data, check for a valid species reference. If the species field is missing, throw a meaningful error.
  - Use the species endpoint to fetch detailed species info, then iterate over the species’ `varieties` array:  
    - For each variety, fetch its Pokémon data and attach a flag (e.g. `is_default`).
    - Handle errors in individual variant requests gracefully (log the error and omit that variant).
  - Return an object that includes the “main” Pokémon (the one matching the originally requested name or id) and an array of non‑default variants (if any).

---

### 5. Search Functionality with Fallback

- **Goals:**  
  - Allow users to search for Pokémon by name or id with both exact and partial matching.
  
- **Requirements:**  
  - Implement a `searchPokemon(searchTerm: string): Promise<PokemonDetail[]>` function that:
    - First attempts an exact match (e.g. `GET /pokemon/{normalizedTerm}`) and, if successful, returns that single Pokémon with species details.
    - If the exact match fails, fetch a larger list of Pokémon (e.g. `limit=1000`) and filter the results by whether the Pokémon’s name (or its id parsed from the URL) includes the search term.
    - Limit the number of partial results (e.g. to 5) and then fetch details (including species) for each candidate.
    - Return an empty array if no Pokémon match.
  
---

### 6. Generation & Related Data

- **Goals:**  
  - Provide methods to list and fetch Generation resources and then retrieve all Pokémon for a given generation.
  
- **Requirements:**  
  - Implement functions such as:  
    - `getGeneration(idOrName: string | number): Promise<Generation>`
    - `getGenerations(): Promise<PaginatedResponse<NamedAPIResource>>`
    - `getPokemonsByGeneration(generation: Generation): Promise<PokemonDetail[]>`
  - In `getPokemonsByGeneration`, iterate over the generation’s `pokemon_species` array, fetch each species’ details, and then select the default variety for each species.
  - Sort the resulting Pokémon list by id (or another logical order) before returning.

---

### 7. Asynchronous & Promise‑Based API

- **Goals:**  
  - Ensure that all API calls are promise‑based so they can be used seamlessly with async/await.

- **Requirements:**  
  - Every public method must return a Promise.
  - Internally use async/await for readability and maintainability.
  - Maintain compatibility with both Node.js and browser environments.

---

### 8. Error Handling & Logging

- **Goals:**  
  - Provide consistent error messages and handle edge cases gracefully.
  
- **Requirements:**  
  - Use try/catch blocks around all HTTP calls.
  - If an AxiosError (or similar) occurs, log a descriptive message (including the resource that failed) before re‑throwing the error.
  - In multi‑call scenarios (e.g. variant fetching), catch errors for individual requests and log them so that one failure does not affect the overall response.
  - For search functions, if no matches are found, return an empty array rather than throwing.

---

### 9. Testing & Integration

- **Goals:**  
  - Ensure the SDK works as expected through both unit and integration tests.
  
- **Requirements:**  
  - Write integration tests that:  
    - Verify fetching a Pokémon (including species and variants) returns the correct data.
    - Validate that the search function returns correct results for both exact and partial matches.
    - Confirm that listing generations and fetching Pokémon by generation work as expected.
  - Include instructions in the README for running tests.

---

## Project Structure

An example directory layout might look like this:

```
/src
  /api
    - pokemon.ts          // Functions: getPokemon, listPokemon, searchPokemon, getPokemonsByGeneration, etc.
    - generation.ts       // Functions: getGeneration, getGenerations
  /models
    - Pokemon.ts          // TypeScript interfaces for Pokemon, PokemonSpecies, etc.
    - Generation.ts       // Interfaces for Generation, etc.
    - PaginatedResponse.ts // Generic paginated response type
  /utils
    - httpClient.ts       // Wrapper around Axios with error handling and caching support
    - cache.ts            // Caching utility functions
    - pagination.ts       // Helpers for automatic pagination
    - resolver.ts         // Functions for expanding NamedAPIResource URLs
  - index.ts              // Main entry point for the SDK
/tests
  - integration.test.ts   // Integration tests using live API calls
README.md                // Documentation, installation, usage, and design decisions
package.json             // Project configuration, dependencies, and build scripts
```

---

## Example Usage

Below is a sample of how a developer might use the SDK:

```ts
import { getPokemon, listPokemon, searchPokemon, getGeneration, getPokemonsByGeneration } from 'pokeapi-sdk';

async function exampleUsage() {
  try {
    // Fetch a single Pokémon including species and variants
    const pikachu = await getPokemon('pikachu');
    console.log(`Fetched Pokémon: ${pikachu.name} (ID: ${pikachu.id})`);
    console.log(`Variants: ${pikachu.variants.map(v => v.name).join(', ')}`);

    // List all Pokémon on page 1 (with 20 per page)
    const paginated = await listPokemon({ page: 1, limit: 20 });
    console.log(`Page 1 contains ${paginated.results.length} Pokémon`);

    // Search for a Pokémon using an exact or partial match
    const searchResults = await searchPokemon('char');
    console.log(`Search returned ${searchResults.length} Pokémon`);

    // Fetch a specific generation and then get all Pokémon for that generation
    const gen1 = await getGeneration(1);
    const gen1Pokemon = await getPokemonsByGeneration(gen1);
    console.log(`Generation ${gen1.name} contains ${gen1Pokemon.length} Pokémon`);
  } catch (error) {
    console.error('SDK Error:', error);
  }
}

exampleUsage();
```

---

## Best Practices & Guidelines

- **Modular Design:**  
  Separate HTTP operations, caching, pagination, and resource resolution into distinct modules to keep concerns isolated and maintainable.

- **Type Safety:**  
  Leverage TypeScript interfaces and types for all API resources so developers receive compile‑time feedback and autocompletion in their IDEs.

- **Error Transparency:**  
  Ensure errors are logged with context (e.g. which resource failed) while still propagating them so that applications can handle failures gracefully.

- **Graceful Fallbacks:**  
  When fetching related resources (such as variants or during a search), individual failures should be caught and logged; the overall method should still return partial results rather than failing completely.

- **Caching & Efficiency:**  
  Use caching to minimize redundant HTTP requests, especially since the API is consumption‑only and caching is recommended in the fair‑use policy.

- **Testing:**  
  Write robust integration tests that mimic real‑world usage scenarios, including edge cases like missing species information or failing variant requests.

- **Documentation:**  
  Include a detailed README and inline code comments (using JSDoc or similar) to explain how each module and function works, along with any design decisions.

---

## Installing

The end user will be able to install this via `npm install @username/reponame`, and this will be hosted on github.  The final rendered SDK can be consumed by either vanilla JS applications, or typescript applications.

## Conclusion

This spec sheet lays out a clear roadmap for developing a TypeScript SDK that not only wraps the PokeAPI endpoints but also addresses edge cases (such as missing species data, handling partial search results, and gracefully dealing with variant fetch failures). By following these guidelines and best practices, the SDK will provide developers with an ergonomic, type‑safe, and robust tool for interacting with PokeAPI.

---