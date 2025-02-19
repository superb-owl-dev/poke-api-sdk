"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeAPIClient = void 0;
const axios_1 = __importDefault(require("axios"));
class PokeAPIClient {
    constructor(config = {}) {
        var _a;
        const axiosConfig = {
            baseURL: config.baseURL || PokeAPIClient.DEFAULT_BASE_URL,
            timeout: config.timeout || PokeAPIClient.DEFAULT_TIMEOUT,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        this.client = axios_1.default.create(axiosConfig);
        this.cache = new Map();
        this.cacheEnabled = (_a = config.cacheEnabled) !== null && _a !== void 0 ? _a : true;
    }
    get(path, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const cacheKey = `${path}${params ? JSON.stringify(params) : ''}`;
            // Check cache if enabled
            if (this.cacheEnabled) {
                const cached = this.cache.get(cacheKey);
                if (cached && Date.now() - cached.timestamp < PokeAPIClient.CACHE_TTL) {
                    return cached.data;
                }
            }
            const response = yield this.client.get(path, { params });
            // Update cache if enabled
            if (this.cacheEnabled) {
                this.cache.set(cacheKey, {
                    data: response.data,
                    timestamp: Date.now()
                });
            }
            return response.data;
        });
    }
    /**
     * Get a Pokemon by name or ID
     * @param nameOrId - The name or ID of the Pokemon
     */
    getPokemon(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/pokemon/${nameOrId}`);
        });
    }
    /**
     * Get encounter locations for a Pokemon
     * @param nameOrId - The name or ID of the Pokemon
     */
    getPokemonEncounters(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/pokemon/${nameOrId}/encounters`);
        });
    }
    /**
     * Get a paginated list of Pokemon
     * @param limit - Number of results per page
     * @param offset - Number of results to skip
     */
    listPokemon() {
        return __awaiter(this, arguments, void 0, function* (limit = 20, offset = 0) {
            return this.get('/pokemon', { limit, offset });
        });
    }
    /**
     * Search for Pokemon by name (exact or partial match)
     * @param searchTerm - The name to search for
     */
    searchPokemon(searchTerm) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // First try exact match
                const pokemon = yield this.getPokemon(searchTerm.toLowerCase());
                return [pokemon];
            }
            catch (_a) {
                // If exact match fails, try partial match
                const response = yield this.listPokemon(100, 0);
                const matches = response.results.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
                // Fetch full details for matches
                const detailedResults = yield Promise.all(matches.map((match) => this.getPokemon(match.name)));
                return detailedResults;
            }
        });
    }
    /**
     * Get a Berry by name or ID
     * @param nameOrId - The name or ID of the Berry
     */
    getBerry(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/berry/${nameOrId}`);
        });
    }
    /**
     * Get a Berry Firmness by name or ID
     * @param nameOrId - The name or ID of the Berry Firmness
     */
    getBerryFirmness(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/berry-firmness/${nameOrId}`);
        });
    }
    /**
     * Get a Berry Flavor by name or ID
     * @param nameOrId - The name or ID of the Berry Flavor
     */
    getBerryFlavor(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/berry-flavor/${nameOrId}`);
        });
    }
    /**
     * Get a paginated list of Berries
     * @param limit - Number of results per page
     * @param offset - Number of results to skip
     */
    listBerries() {
        return __awaiter(this, arguments, void 0, function* (limit = 20, offset = 0) {
            return this.get('/berry', { limit, offset });
        });
    }
    // Item endpoints
    /**
     * Get an Item by name or ID
     * @param nameOrId - The name or ID of the Item
     */
    getItem(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/item/${nameOrId}`);
        });
    }
    /**
     * Get an Item Attribute by name or ID
     * @param nameOrId - The name or ID of the Item Attribute
     */
    getItemAttribute(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/item-attribute/${nameOrId}`);
        });
    }
    /**
     * Get an Item Category by name or ID
     * @param nameOrId - The name or ID of the Item Category
     */
    getItemCategory(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/item-category/${nameOrId}`);
        });
    }
    /**
     * Get an Item Fling Effect by name or ID
     * @param nameOrId - The name or ID of the Item Fling Effect
     */
    getItemFlingEffect(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/item-fling-effect/${nameOrId}`);
        });
    }
    /**
     * Get an Item Pocket by name or ID
     * @param nameOrId - The name or ID of the Item Pocket
     */
    getItemPocket(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/item-pocket/${nameOrId}`);
        });
    }
    /**
     * Get a paginated list of Items
     * @param limit - Number of results per page
     * @param offset - Number of results to skip
     */
    listItems() {
        return __awaiter(this, arguments, void 0, function* (limit = 20, offset = 0) {
            return this.get('/item', { limit, offset });
        });
    }
    // Move endpoints
    /**
     * Get a Move by name or ID
     * @param nameOrId - The name or ID of the Move
     */
    getMove(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/move/${nameOrId}`);
        });
    }
    /**
     * Get a Move Ailment by name or ID
     * @param nameOrId - The name or ID of the Move Ailment
     */
    getMoveAilment(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/move-ailment/${nameOrId}`);
        });
    }
    /**
     * Get a Move Battle Style by name or ID
     * @param nameOrId - The name or ID of the Move Battle Style
     */
    getMoveBattleStyle(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/move-battle-style/${nameOrId}`);
        });
    }
    /**
     * Get a Move Category by name or ID
     * @param nameOrId - The name or ID of the Move Category
     */
    getMoveCategory(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/move-category/${nameOrId}`);
        });
    }
    /**
     * Get a Move Damage Class by name or ID
     * @param nameOrId - The name or ID of the Move Damage Class
     */
    getMoveDamageClass(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/move-damage-class/${nameOrId}`);
        });
    }
    /**
     * Get a Move Learn Method by name or ID
     * @param nameOrId - The name or ID of the Move Learn Method
     */
    getMoveLearnMethod(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/move-learn-method/${nameOrId}`);
        });
    }
    /**
     * Get a Move Target by name or ID
     * @param nameOrId - The name or ID of the Move Target
     */
    getMoveTarget(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/move-target/${nameOrId}`);
        });
    }
    /**
     * Get a paginated list of Moves
     * @param limit - Number of results per page
     * @param offset - Number of results to skip
     */
    listMoves() {
        return __awaiter(this, arguments, void 0, function* (limit = 20, offset = 0) {
            return this.get('/move', { limit, offset });
        });
    }
    // Location endpoints
    /**
     * Get a Location by name or ID
     * @param nameOrId - The name or ID of the Location
     */
    getLocation(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/location/${nameOrId}`);
        });
    }
    /**
     * Get a Location Area by name or ID
     * @param nameOrId - The name or ID of the Location Area
     */
    getLocationArea(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/location-area/${nameOrId}`);
        });
    }
    /**
     * Get a Pal Park Area by name or ID
     * @param nameOrId - The name or ID of the Pal Park Area
     */
    getPalParkArea(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/pal-park-area/${nameOrId}`);
        });
    }
    /**
     * Get a Region by name or ID
     * @param nameOrId - The name or ID of the Region
     */
    getRegion(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/region/${nameOrId}`);
        });
    }
    /**
     * Get a paginated list of Locations
     * @param limit - Number of results per page
     * @param offset - Number of results to skip
     */
    listLocations() {
        return __awaiter(this, arguments, void 0, function* (limit = 20, offset = 0) {
            return this.get('/location', { limit, offset });
        });
    }
    /**
     * Get a paginated list of Location Areas
     * @param limit - Number of results per page
     * @param offset - Number of results to skip
     */
    listLocationAreas() {
        return __awaiter(this, arguments, void 0, function* (limit = 20, offset = 0) {
            return this.get('/location-area', { limit, offset });
        });
    }
    /**
     * Get a paginated list of Regions
     * @param limit - Number of results per page
     * @param offset - Number of results to skip
     */
    listRegions() {
        return __awaiter(this, arguments, void 0, function* (limit = 20, offset = 0) {
            return this.get('/region', { limit, offset });
        });
    }
}
exports.PokeAPIClient = PokeAPIClient;
PokeAPIClient.DEFAULT_BASE_URL = 'https://pokeapi.co/api/v2';
PokeAPIClient.DEFAULT_TIMEOUT = 10000;
PokeAPIClient.CACHE_TTL = 3600000; // 1 hour in milliseconds
//# sourceMappingURL=client.js.map