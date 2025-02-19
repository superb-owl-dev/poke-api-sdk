import { Pokemon, LocationAreaEncounter } from './types/pokemon';
import { Berry, BerryFirmness, BerryFlavor } from './types/berries';
import { Item, ItemAttribute, ItemCategory, ItemFlingEffect, ItemPocket } from './types/items';
import { Move, MoveAilment, MoveBattleStyle, MoveCategory, MoveDamageClass, MoveLearnMethod, MoveTarget } from './types/moves';
import { Location, LocationArea, PalParkArea, Region } from './types/locations';
export interface PokeAPIClientConfig {
    baseURL?: string;
    timeout?: number;
    cacheEnabled?: boolean;
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
export declare class PokeAPIClient {
    private client;
    private cache;
    private cacheEnabled;
    private static readonly DEFAULT_BASE_URL;
    private static readonly DEFAULT_TIMEOUT;
    private static readonly CACHE_TTL;
    constructor(config?: PokeAPIClientConfig);
    protected get<T>(path: string, params?: Record<string, string | number>): Promise<T>;
    /**
     * Get a Pokemon by name or ID
     * @param nameOrId - The name or ID of the Pokemon
     */
    getPokemon(nameOrId: string | number): Promise<Pokemon>;
    /**
     * Get encounter locations for a Pokemon
     * @param nameOrId - The name or ID of the Pokemon
     */
    getPokemonEncounters(nameOrId: string | number): Promise<LocationAreaEncounter[]>;
    /**
     * Get a paginated list of Pokemon
     * @param limit - Number of results per page
     * @param offset - Number of results to skip
     */
    listPokemon(limit?: number, offset?: number): Promise<PaginatedResponse<NamedAPIResource>>;
    /**
     * Search for Pokemon by name (exact or partial match)
     * @param searchTerm - The name to search for
     */
    searchPokemon(searchTerm: string): Promise<Pokemon[]>;
    /**
     * Get a Berry by name or ID
     * @param nameOrId - The name or ID of the Berry
     */
    getBerry(nameOrId: string | number): Promise<Berry>;
    /**
     * Get a Berry Firmness by name or ID
     * @param nameOrId - The name or ID of the Berry Firmness
     */
    getBerryFirmness(nameOrId: string | number): Promise<BerryFirmness>;
    /**
     * Get a Berry Flavor by name or ID
     * @param nameOrId - The name or ID of the Berry Flavor
     */
    getBerryFlavor(nameOrId: string | number): Promise<BerryFlavor>;
    /**
     * Get a paginated list of Berries
     * @param limit - Number of results per page
     * @param offset - Number of results to skip
     */
    listBerries(limit?: number, offset?: number): Promise<PaginatedResponse<NamedAPIResource>>;
    /**
     * Get an Item by name or ID
     * @param nameOrId - The name or ID of the Item
     */
    getItem(nameOrId: string | number): Promise<Item>;
    /**
     * Get an Item Attribute by name or ID
     * @param nameOrId - The name or ID of the Item Attribute
     */
    getItemAttribute(nameOrId: string | number): Promise<ItemAttribute>;
    /**
     * Get an Item Category by name or ID
     * @param nameOrId - The name or ID of the Item Category
     */
    getItemCategory(nameOrId: string | number): Promise<ItemCategory>;
    /**
     * Get an Item Fling Effect by name or ID
     * @param nameOrId - The name or ID of the Item Fling Effect
     */
    getItemFlingEffect(nameOrId: string | number): Promise<ItemFlingEffect>;
    /**
     * Get an Item Pocket by name or ID
     * @param nameOrId - The name or ID of the Item Pocket
     */
    getItemPocket(nameOrId: string | number): Promise<ItemPocket>;
    /**
     * Get a paginated list of Items
     * @param limit - Number of results per page
     * @param offset - Number of results to skip
     */
    listItems(limit?: number, offset?: number): Promise<PaginatedResponse<NamedAPIResource>>;
    /**
     * Get a Move by name or ID
     * @param nameOrId - The name or ID of the Move
     */
    getMove(nameOrId: string | number): Promise<Move>;
    /**
     * Get a Move Ailment by name or ID
     * @param nameOrId - The name or ID of the Move Ailment
     */
    getMoveAilment(nameOrId: string | number): Promise<MoveAilment>;
    /**
     * Get a Move Battle Style by name or ID
     * @param nameOrId - The name or ID of the Move Battle Style
     */
    getMoveBattleStyle(nameOrId: string | number): Promise<MoveBattleStyle>;
    /**
     * Get a Move Category by name or ID
     * @param nameOrId - The name or ID of the Move Category
     */
    getMoveCategory(nameOrId: string | number): Promise<MoveCategory>;
    /**
     * Get a Move Damage Class by name or ID
     * @param nameOrId - The name or ID of the Move Damage Class
     */
    getMoveDamageClass(nameOrId: string | number): Promise<MoveDamageClass>;
    /**
     * Get a Move Learn Method by name or ID
     * @param nameOrId - The name or ID of the Move Learn Method
     */
    getMoveLearnMethod(nameOrId: string | number): Promise<MoveLearnMethod>;
    /**
     * Get a Move Target by name or ID
     * @param nameOrId - The name or ID of the Move Target
     */
    getMoveTarget(nameOrId: string | number): Promise<MoveTarget>;
    /**
     * Get a paginated list of Moves
     * @param limit - Number of results per page
     * @param offset - Number of results to skip
     */
    listMoves(limit?: number, offset?: number): Promise<PaginatedResponse<NamedAPIResource>>;
    /**
     * Get a Location by name or ID
     * @param nameOrId - The name or ID of the Location
     */
    getLocation(nameOrId: string | number): Promise<Location>;
    /**
     * Get a Location Area by name or ID
     * @param nameOrId - The name or ID of the Location Area
     */
    getLocationArea(nameOrId: string | number): Promise<LocationArea>;
    /**
     * Get a Pal Park Area by name or ID
     * @param nameOrId - The name or ID of the Pal Park Area
     */
    getPalParkArea(nameOrId: string | number): Promise<PalParkArea>;
    /**
     * Get a Region by name or ID
     * @param nameOrId - The name or ID of the Region
     */
    getRegion(nameOrId: string | number): Promise<Region>;
    /**
     * Get a paginated list of Locations
     * @param limit - Number of results per page
     * @param offset - Number of results to skip
     */
    listLocations(limit?: number, offset?: number): Promise<PaginatedResponse<NamedAPIResource>>;
    /**
     * Get a paginated list of Location Areas
     * @param limit - Number of results per page
     * @param offset - Number of results to skip
     */
    listLocationAreas(limit?: number, offset?: number): Promise<PaginatedResponse<NamedAPIResource>>;
    /**
     * Get a paginated list of Regions
     * @param limit - Number of results per page
     * @param offset - Number of results to skip
     */
    listRegions(limit?: number, offset?: number): Promise<PaginatedResponse<NamedAPIResource>>;
}
//# sourceMappingURL=client.d.ts.map