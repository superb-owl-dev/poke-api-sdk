import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Pokemon, LocationAreaEncounter } from './types/pokemon';
import { Berry, BerryFirmness, BerryFlavor } from './types/berries';
import { Item, ItemAttribute, ItemCategory, ItemFlingEffect, ItemPocket } from './types/items';
import { Move, MoveAilment, MoveBattleStyle, MoveCategory, MoveDamageClass, MoveLearnMethod, MoveTarget } from './types/moves';
import { Location, LocationArea, PalParkArea, Region } from './types/locations';
import { Generation } from './types/machines';  // Add Generation import

export interface PokeAPIClientConfig {
    baseURL?: string;
    timeout?: number;
    cacheEnabled?: boolean; // Added this option
}

export interface PaginationOptions {
    limit?: number;
    offset?: number;
    fetchAll?: boolean;
}

export interface PaginatedResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

export interface NamedAPIResource {
    name: string;
    url: string;
}

export class PokeAPIClient {
    private client: AxiosInstance;
    private cache: Map<string, { data: unknown; timestamp: number }>;
    private cacheEnabled: boolean;
    private static readonly DEFAULT_BASE_URL = 'https://pokeapi.co/api/v2';
    private static readonly DEFAULT_TIMEOUT = 10000;
    private static readonly CACHE_TTL = 3600000; // 1 hour in milliseconds

    constructor(config: PokeAPIClientConfig = {}) {
        const axiosConfig: AxiosRequestConfig = {
            baseURL: config.baseURL || PokeAPIClient.DEFAULT_BASE_URL,
            timeout: config.timeout || PokeAPIClient.DEFAULT_TIMEOUT,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        this.client = axios.create(axiosConfig);
        this.cache = new Map();
        this.cacheEnabled = config.cacheEnabled ?? true;
    }

    protected async get<T>(path: string, params?: Record<string, string | number | boolean>): Promise<T> {
        // Handle fetchAll pagination if specified
        if (params?.fetchAll) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { fetchAll, ...restParams } = params;
            const firstPage = await this.get<PaginatedResponse<T>>(path, { ...restParams, limit: 100, offset: 0 });
            const allResults: T[] = [...firstPage.results];
            
            let nextOffset = 100;
            while (nextOffset < firstPage.count) {
                const nextPage = await this.get<PaginatedResponse<T>>(path, { ...restParams, limit: 100, offset: nextOffset });
                allResults.push(...nextPage.results);
                nextOffset += 100;
            }
            
            return {
                count: firstPage.count,
                next: null,
                previous: null,
                results: allResults
            } as T;
        }

        const cacheKey = `${path}${params ? JSON.stringify(params) : ''}`;
        
        // Check cache if enabled
        if (this.cacheEnabled) {
            const cached = this.cache.get(cacheKey);
            if (cached && Date.now() - cached.timestamp < PokeAPIClient.CACHE_TTL) {
                return cached.data as T;
            }
        }

        const response = await this.client.get<T>(path, { params });
        
        // Update cache if enabled
        if (this.cacheEnabled) {
            this.cache.set(cacheKey, {
                data: response.data,
                timestamp: Date.now()
            });
        }
        
        return response.data;
    }

    /**
     * Get a Pokemon by name or ID
     * @param nameOrId - The name or ID of the Pokemon
     */
    public async getPokemon(nameOrId: string | number): Promise<Pokemon> {
        return this.get<Pokemon>(`/pokemon/${nameOrId}`);
    }

    /**
     * Get encounter locations for a Pokemon
     * @param nameOrId - The name or ID of the Pokemon
     */
    public async getPokemonEncounters(nameOrId: string | number): Promise<LocationAreaEncounter[]> {
        return this.get<LocationAreaEncounter[]>(`/pokemon/${nameOrId}/encounters`);
    }

    /**
     * Get a paginated list of Pokemon
     * @param options - Pagination options
     */
    public async listPokemon(options: PaginationOptions = {}): Promise<PaginatedResponse<NamedAPIResource>> {
        const { limit = 20, offset = 0, fetchAll = false } = options;
        return this.get('/pokemon', { limit, offset, fetchAll });
    }

    /**
     * Search for Pokemon by name (exact or partial match)
     * @param searchTerm - The name to search for
     */
    public async searchPokemon(searchTerm: string): Promise<Pokemon[]> {
        try {
            // First try exact match
            const pokemon = await this.getPokemon(searchTerm.toLowerCase());
            return [pokemon];
        } catch {
            // If exact match fails, try partial match
            const response = await this.listPokemon({ limit: 100, offset: 0 });
            const matches = response.results.filter((p: NamedAPIResource) => 
                p.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            
            // Fetch full details for matches
            const detailedResults = await Promise.all(
                matches.map((match: NamedAPIResource) => this.getPokemon(match.name))
            );
            
            return detailedResults;
        }
    }

    /**
     * Get a Berry by name or ID
     * @param nameOrId - The name or ID of the Berry
     */
    public async getBerry(nameOrId: string | number): Promise<Berry> {
        return this.get<Berry>(`/berry/${nameOrId}`);
    }

    /**
     * Get a Berry Firmness by name or ID
     * @param nameOrId - The name or ID of the Berry Firmness
     */
    public async getBerryFirmness(nameOrId: string | number): Promise<BerryFirmness> {
        return this.get<BerryFirmness>(`/berry-firmness/${nameOrId}`);
    }

    /**
     * Get a Berry Flavor by name or ID
     * @param nameOrId - The name or ID of the Berry Flavor
     */
    public async getBerryFlavor(nameOrId: string | number): Promise<BerryFlavor> {
        return this.get<BerryFlavor>(`/berry-flavor/${nameOrId}`);
    }

    /**
     * Get a paginated list of Berries
     * @param options - Pagination options
     */
    public async listBerries(options: PaginationOptions = {}): Promise<PaginatedResponse<NamedAPIResource>> {
        const { limit = 20, offset = 0, fetchAll = false } = options;
        return this.get('/berry', { limit, offset, fetchAll });
    }

    // Item endpoints
    /**
     * Get an Item by name or ID
     * @param nameOrId - The name or ID of the Item
     */
    public async getItem(nameOrId: string | number): Promise<Item> {
        return this.get<Item>(`/item/${nameOrId}`);
    }

    /**
     * Get an Item Attribute by name or ID
     * @param nameOrId - The name or ID of the Item Attribute
     */
    public async getItemAttribute(nameOrId: string | number): Promise<ItemAttribute> {
        return this.get<ItemAttribute>(`/item-attribute/${nameOrId}`);
    }

    /**
     * Get an Item Category by name or ID
     * @param nameOrId - The name or ID of the Item Category
     */
    public async getItemCategory(nameOrId: string | number): Promise<ItemCategory> {
        return this.get<ItemCategory>(`/item-category/${nameOrId}`);
    }

    /**
     * Get an Item Fling Effect by name or ID
     * @param nameOrId - The name or ID of the Item Fling Effect
     */
    public async getItemFlingEffect(nameOrId: string | number): Promise<ItemFlingEffect> {
        return this.get<ItemFlingEffect>(`/item-fling-effect/${nameOrId}`);
    }

    /**
     * Get an Item Pocket by name or ID
     * @param nameOrId - The name or ID of the Item Pocket
     */
    public async getItemPocket(nameOrId: string | number): Promise<ItemPocket> {
        return this.get<ItemPocket>(`/item-pocket/${nameOrId}`);
    }

    /**
     * Get a paginated list of Items
     * @param options - Pagination options
     */
    public async listItems(options: PaginationOptions = {}): Promise<PaginatedResponse<NamedAPIResource>> {
        const { limit = 20, offset = 0, fetchAll = false } = options;
        return this.get('/item', { limit, offset, fetchAll });
    }

    // Move endpoints
    /**
     * Get a Move by name or ID
     * @param nameOrId - The name or ID of the Move
     */
    public async getMove(nameOrId: string | number): Promise<Move> {
        return this.get<Move>(`/move/${nameOrId}`);
    }

    /**
     * Get a Move Ailment by name or ID
     * @param nameOrId - The name or ID of the Move Ailment
     */
    public async getMoveAilment(nameOrId: string | number): Promise<MoveAilment> {
        return this.get<MoveAilment>(`/move-ailment/${nameOrId}`);
    }

    /**
     * Get a Move Battle Style by name or ID
     * @param nameOrId - The name or ID of the Move Battle Style
     */
    public async getMoveBattleStyle(nameOrId: string | number): Promise<MoveBattleStyle> {
        return this.get<MoveBattleStyle>(`/move-battle-style/${nameOrId}`);
    }

    /**
     * Get a Move Category by name or ID
     * @param nameOrId - The name or ID of the Move Category
     */
    public async getMoveCategory(nameOrId: string | number): Promise<MoveCategory> {
        return this.get<MoveCategory>(`/move-category/${nameOrId}`);
    }

    /**
     * Get a Move Damage Class by name or ID
     * @param nameOrId - The name or ID of the Move Damage Class
     */
    public async getMoveDamageClass(nameOrId: string | number): Promise<MoveDamageClass> {
        return this.get<MoveDamageClass>(`/move-damage-class/${nameOrId}`);
    }

    /**
     * Get a Move Learn Method by name or ID
     * @param nameOrId - The name or ID of the Move Learn Method
     */
    public async getMoveLearnMethod(nameOrId: string | number): Promise<MoveLearnMethod> {
        return this.get<MoveLearnMethod>(`/move-learn-method/${nameOrId}`);
    }

    /**
     * Get a Move Target by name or ID
     * @param nameOrId - The name or ID of the Move Target
     */
    public async getMoveTarget(nameOrId: string | number): Promise<MoveTarget> {
        return this.get<MoveTarget>(`/move-target/${nameOrId}`);
    }

    /**
     * Get a paginated list of Moves
     * @param options - Pagination options
     */
    public async listMoves(options: PaginationOptions = {}): Promise<PaginatedResponse<NamedAPIResource>> {
        const { limit = 20, offset = 0, fetchAll = false } = options;
        return this.get('/move', { limit, offset, fetchAll });
    }

    // Location endpoints
    /**
     * Get a Location by name or ID
     * @param nameOrId - The name or ID of the Location
     */
    public async getLocation(nameOrId: string | number): Promise<Location> {
        return this.get<Location>(`/location/${nameOrId}`);
    }

    /**
     * Get a Location Area by name or ID
     * @param nameOrId - The name or ID of the Location Area
     */
    public async getLocationArea(nameOrId: string | number): Promise<LocationArea> {
        return this.get<LocationArea>(`/location-area/${nameOrId}`);
    }

    /**
     * Get a Pal Park Area by name or ID
     * @param nameOrId - The name or ID of the Pal Park Area
     */
    public async getPalParkArea(nameOrId: string | number): Promise<PalParkArea> {
        return this.get<PalParkArea>(`/pal-park-area/${nameOrId}`);
    }

    /**
     * Get a Region by name or ID
     * @param nameOrId - The name or ID of the Region
     */
    public async getRegion(nameOrId: string | number): Promise<Region> {
        return this.get<Region>(`/region/${nameOrId}`);
    }

    /**
     * Get a paginated list of Locations
     * @param options - Pagination options
     */
    public async listLocations(options: PaginationOptions = {}): Promise<PaginatedResponse<NamedAPIResource>> {
        const { limit = 20, offset = 0, fetchAll = false } = options;
        return this.get('/location', { limit, offset, fetchAll });
    }

    /**
     * Get a paginated list of Location Areas
     * @param options - Pagination options
     */
    public async listLocationAreas(options: PaginationOptions = {}): Promise<PaginatedResponse<NamedAPIResource>> {
        const { limit = 20, offset = 0, fetchAll = false } = options;
        return this.get('/location-area', { limit, offset, fetchAll });
    }

    /**
     * Get a paginated list of Regions
     * @param options - Pagination options
     */
    public async listRegions(options: PaginationOptions = {}): Promise<PaginatedResponse<NamedAPIResource>> {
        const { limit = 20, offset = 0, fetchAll = false } = options;
        return this.get('/region', { limit, offset, fetchAll });
    }

    // Generation endpoints
    /**
     * Get a Generation by name or ID
     * @param nameOrId - The name or ID of the Generation
     */
    public async getGeneration(nameOrId: string | number): Promise<Generation> {
        return this.get<Generation>(`/generation/${nameOrId}`);
    }

    /**
     * Get all Pokemon from a specific Generation
     * @param nameOrId - The name or ID of the Generation
     */
    public async getPokemonsByGeneration(nameOrId: string | number): Promise<Pokemon[]> {
        const generation = await this.getGeneration(nameOrId);
        const pokemonPromises = generation.pokemon_species.map((species: NamedAPIResource) => 
            this.getPokemon(species.name)
        );
        return Promise.all(pokemonPromises);
    }

    /**
     * Get a paginated list of Generations
     * @param options - Pagination options
     */
    public async listGenerations(options: PaginationOptions = {}): Promise<PaginatedResponse<NamedAPIResource>> {
        const { limit = 20, offset = 0, fetchAll = false } = options;
        return this.get('/generation', { limit, offset, fetchAll });
    }
}