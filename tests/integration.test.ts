import { PokeAPIClient, PaginatedResponse, NamedAPIResource } from '../src/client';
import { Pokemon } from '../src/types/pokemon';

// Extend the default Jest timeout since we're making real API calls
jest.setTimeout(30000);

describe('PokeAPI SDK Integration Tests', () => {
    let pokedex: PokeAPIClient;

    beforeEach(() => {
        pokedex = new PokeAPIClient();
    });

    describe('Pokemon Endpoints', () => {
        it('should fetch Pikachu by name', async () => {
            const pokemon = await pokedex.getPokemon('pikachu');
            expect(pokemon).toBeDefined();
            expect(pokemon.name).toBe('pikachu');
            expect(pokemon.id).toBe(25);
            expect(pokemon.types).toBeDefined();
            expect(pokemon.types.length).toBeGreaterThan(0);
        });

        it('should fetch Pokemon #1 by ID', async () => {
            const pokemon = await pokedex.getPokemon(1);
            expect(pokemon).toBeDefined();
            expect(pokemon.name).toBe('bulbasaur');
            expect(pokemon.id).toBe(1);
        });

        it('should list Pokemon with pagination', async () => {
            const response = await pokedex.listPokemon({ limit: 5, offset: 0 });
            expect(response.results).toBeDefined();
            expect(response.results.length).toBe(5);
            expect(response.count).toBeGreaterThan(0);
            expect(response.next).toBeDefined();
            expect(response.previous).toBeNull();
        });
    });

    describe('Berry Endpoints', () => {
        it('should fetch a berry by name', async () => {
            const berry = await pokedex.getBerry('cheri');
            expect(berry).toBeDefined();
            expect(berry.name).toBe('cheri');
            expect(berry.growth_time).toBeDefined();
            expect(berry.flavors).toBeDefined();
        });

        it('should list berries with pagination', async () => {
            const response = await pokedex.listBerries({ limit: 5, offset: 0 }) as PaginatedResponse<NamedAPIResource>;
            expect(response.results).toBeDefined();
            expect(response.results.length).toBe(5);
            expect(response.count).toBeGreaterThan(0);
        });
    });

    describe('Item Endpoints', () => {
        it('should fetch an item by name', async () => {
            const item = await pokedex.getItem('master-ball');
            expect(item).toBeDefined();
            expect(item.name).toBe('master-ball');
            expect(item.cost).toBeDefined();
            expect(item.effect_entries).toBeDefined();
        });

        it('should list items with pagination', async () => {
            const response = await pokedex.listItems({ limit: 5, offset: 0 }) as PaginatedResponse<NamedAPIResource>;
            expect(response.results).toBeDefined();
            expect(response.results.length).toBe(5);
            expect(response.count).toBeGreaterThan(0);
        });
    });

    describe('Pokemon Encounters', () => {
        it('should fetch encounter locations for a Pokemon', async () => {
            const encounters = await pokedex.getPokemonEncounters(25); // Pikachu
            expect(encounters).toBeDefined();
            expect(Array.isArray(encounters)).toBe(true);
            if (encounters.length > 0) {
                expect(encounters[0].location_area).toBeDefined();
                expect(encounters[0].version_details).toBeDefined();
            }
        });
    });

    describe('Location Endpoints', () => {
        it('should fetch a location by name', async () => {
            const location = await pokedex.getLocation('celadon-city');
            expect(location).toBeDefined();
            expect(location.name).toBe('celadon-city');
            expect(location.region).toBeDefined();
            expect(location.areas).toBeDefined();
        });

        it('should fetch a location area by id', async () => {
            const area = await pokedex.getLocationArea(1);
            expect(area).toBeDefined();
            expect(area.pokemon_encounters).toBeDefined();
            expect(Array.isArray(area.pokemon_encounters)).toBe(true);
        });

        it('should list locations with pagination', async () => {
            const response = await pokedex.listLocations({ limit: 5, offset: 0 }) as PaginatedResponse<NamedAPIResource>;
            expect(response.results).toBeDefined();
            expect(response.results.length).toBe(5);
            expect(response.count).toBeGreaterThan(0);
        });
    });

    describe('Move Endpoints', () => {
        it('should fetch a move by name', async () => {
            const move = await pokedex.getMove('thunderbolt');
            expect(move).toBeDefined();
            expect(move.name).toBe('thunderbolt');
            expect(move.power).toBeDefined();
            expect(move.pp).toBeDefined();
            expect(move.accuracy).toBeDefined();
        });

        it('should fetch move metadata', async () => {
            const ailment = await pokedex.getMoveAilment('paralysis');
            expect(ailment).toBeDefined();
            expect(ailment.name).toBe('paralysis');
            expect(ailment.moves).toBeDefined();
        });

        it('should list moves with pagination', async () => {
            const response = await pokedex.listMoves({ limit: 5, offset: 0 }) as PaginatedResponse<NamedAPIResource>;
            expect(response.results).toBeDefined();
            expect(response.results.length).toBe(5);
            expect(response.count).toBeGreaterThan(0);
        });
    });

    describe('Pagination Edge Cases', () => {
        it('should handle requesting beyond available results', async () => {
            const response = await pokedex.listPokemon({ limit: 10, offset: 100000 }) as PaginatedResponse<NamedAPIResource>;
            expect(response.results).toBeDefined();
            expect(response.results.length).toBe(0);
            expect(response.next).toBeNull();
        });

        it('should handle maximum allowed limit', async () => {
            const response = await pokedex.listPokemon({ limit: 100, offset: 0 }) as PaginatedResponse<NamedAPIResource>;
            expect(response.results).toBeDefined();
            expect(response.results.length).toBe(100);
        });
    });

    describe('Resource Resolution', () => {
        it('should fetch Pokemon with all nested resources', async () => {
            const pokemon = await pokedex.getPokemon('charizard');
            expect(pokemon.abilities).toBeDefined();
            expect(pokemon.moves).toBeDefined();
            expect(pokemon.sprites).toBeDefined();
            expect(pokemon.stats).toBeDefined();
            
            // Validate structure of nested resources
            if (pokemon.abilities.length > 0) {
                expect(pokemon.abilities[0].ability).toHaveProperty('name');
                expect(pokemon.abilities[0].ability).toHaveProperty('url');
            }
            
            if (pokemon.moves.length > 0) {
                expect(pokemon.moves[0].move).toHaveProperty('name');
                expect(pokemon.moves[0].move).toHaveProperty('url');
            }
        });

        it('should handle Pokemon with form variations', async () => {
            const pokemon = await pokedex.getPokemon('giratina-altered');
            expect(pokemon).toBeDefined();
            expect(pokemon.name).toBe('giratina-altered');
            expect(pokemon.forms).toBeDefined();
            expect(pokemon.forms.length).toBeGreaterThan(0);
            expect(pokemon.forms[0].name).toBe('giratina-altered');
        });

        it('should handle non-existent form variations gracefully', async () => {
            await expect(pokedex.getPokemon('giratina-nonexistent'))
                .rejects
                .toThrow();
        });
    });

    describe('Error Handling', () => {
        it('should handle non-existent Pokemon gracefully', async () => {
            await expect(pokedex.getPokemon('nonexistent-pokemon'))
                .rejects
                .toThrow();
        });

        it('should handle invalid IDs gracefully', async () => {
            await expect(pokedex.getPokemon(-1))
                .rejects
                .toThrow();
        });

        it('should handle network timeouts', async () => {
            const clientWithShortTimeout = new PokeAPIClient({ timeout: 1 });
            await expect(clientWithShortTimeout.getPokemon('pikachu'))
                .rejects
                .toThrow();
        });

        it('should handle malformed URLs', async () => {
            const clientWithBadURL = new PokeAPIClient({ baseURL: 'https://not-a-real-pokeapi.co' });
            await expect(clientWithBadURL.getPokemon('pikachu'))
                .rejects
                .toThrow();
        });

        it('should handle invalid pagination parameters', async () => {
            await expect(pokedex.listPokemon({ limit: -1, offset: -1 }))
                .resolves
                .toBeDefined(); // The API actually handles this gracefully with defaults
        });
    });

    describe('Caching Behavior', () => {
        it('should cache responses and return cached data on subsequent calls', async () => {
            const start = Date.now();
            const firstCall = await pokedex.getPokemon('pikachu');
            const firstCallTime = Date.now() - start;

            const secondStart = Date.now();
            const secondCall = await pokedex.getPokemon('pikachu');
            const secondCallTime = Date.now() - secondStart;

            expect(secondCallTime).toBeLessThan(firstCallTime);
            expect(secondCall).toEqual(firstCall);
        });

        it('should return fresh data when cache is bypassed', async () => {
            const firstCall = await pokedex.getPokemon('pikachu');
            const clientWithoutCache = new PokeAPIClient({ cacheEnabled: false });
            const secondCall = await clientWithoutCache.getPokemon('pikachu');
            
            expect(secondCall).toEqual(firstCall);
        });
    });

    describe('Advanced Search Functionality', () => {
        it('should search pokemon by partial name match', async () => {
            const results = await pokedex.searchPokemon('char');
            expect(results).toBeDefined();
            expect(Array.isArray(results)).toBe(true);
            expect(results.length).toBeGreaterThan(0);
            expect(results.some((p: Pokemon) => p.name === 'charizard')).toBe(true);
            expect(results.some((p: Pokemon) => p.name === 'charmeleon')).toBe(true);
        });

        it('should handle case-insensitive search', async () => {
            const lowerCase = await pokedex.searchPokemon('pikachu');
            const upperCase = await pokedex.searchPokemon('PIKACHU');
            const mixedCase = await pokedex.searchPokemon('PiKaChU');

            expect(lowerCase[0].id).toBe(25);
            expect(upperCase[0].id).toBe(25);
            expect(mixedCase[0].id).toBe(25);
        });

        it('should return empty array for no matches', async () => {
            const results = await pokedex.searchPokemon('definitely-not-a-pokemon');
            expect(results).toEqual([]);
        });
    });

    describe('Bulk Operations & Resource Resolution', () => {
        it('should fetch multiple Pokemon in parallel', async () => {
            const pokemonIds = [1, 4, 7]; // Bulbasaur, Charmander, Squirtle
            const results = await Promise.all(pokemonIds.map(id => pokedex.getPokemon(id)));
            
            expect(results).toHaveLength(3);
            expect(results[0].name).toBe('bulbasaur');
            expect(results[1].name).toBe('charmander');
            expect(results[2].name).toBe('squirtle');
        });

        it('should resolve all nested resources for a Pokemon', async () => {
            const pokemon = await pokedex.getPokemon('dragonite');
            
            // Check that all major nested resources are resolved
            expect(pokemon.abilities).toBeDefined();
            expect(pokemon.moves).toBeDefined();
            expect(pokemon.types).toBeDefined();
            expect(pokemon.stats).toBeDefined();
            
            // Verify nested resource structure
            if (pokemon.abilities.length > 0) {
                const ability = pokemon.abilities[0];
                expect(ability.ability.name).toBeDefined();
                expect(ability.is_hidden).toBeDefined();
                expect(ability.slot).toBeDefined();
            }
            
            if (pokemon.moves.length > 0) {
                const move = pokemon.moves[0];
                expect(move.move.name).toBeDefined();
                expect(move.version_group_details).toBeDefined();
            }
        });

        it('should handle bulk pagination requests efficiently', async () => {
            const allResults: NamedAPIResource[] = [];
            let response = await pokedex.listPokemon({ limit: 50, offset: 0 });
            allResults.push(...response.results);
            
            if (response.next) {
                response = await pokedex.listPokemon({ limit: 50, offset: 50 });
                allResults.push(...response.results);
            }
            
            expect(allResults.length).toBe(100);
            expect(allResults[0].name).toBeDefined();
            expect(allResults[99].name).toBeDefined();
        });
    });

    describe('Generation Endpoints', () => {
        it('should fetch a generation by id', async () => {
            const generation = await pokedex.getGeneration(1);
            expect(generation).toBeDefined();
            expect(generation.name).toBe('generation-i');
            expect(generation.pokemon_species).toBeDefined();
            expect(Array.isArray(generation.pokemon_species)).toBe(true);
        });

        it('should fetch Pokemon by generation', async () => {
            const genPokemon = await pokedex.getPokemonsByGeneration(1);
            expect(genPokemon).toBeDefined();
            expect(Array.isArray(genPokemon)).toBe(true);
            if (genPokemon.length > 0) {
                expect(genPokemon[0]).toHaveProperty('id');
                expect(genPokemon[0]).toHaveProperty('name');
                expect(genPokemon[0]).toHaveProperty('types');
            }
        });

        it('should list generations with pagination', async () => {
            const response = await pokedex.listGenerations({ limit: 5, offset: 0 });
            expect(response.results).toBeDefined();
            expect(response.results.length).toBe(5);
            expect(response.count).toBeGreaterThan(0);
        });
    });

    describe('Pagination Options', () => {
        it('should fetch all results when fetchAll is true', async () => {
            const response = await pokedex.listPokemon({ fetchAll: true });
            expect(response.results.length).toEqual(response.count);
            expect(response.next).toBeNull();
            expect(response.previous).toBeNull();
        });

        it('should handle fetchAll with other pagination options', async () => {
            const response = await pokedex.listPokemon({ 
                fetchAll: true,
                limit: 50 // This should be overridden by fetchAll using limit: 100
            });
            expect(response.results.length).toEqual(response.count);
        });
    });
});