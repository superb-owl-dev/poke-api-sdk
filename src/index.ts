// Re-export the client and its specific types
import { PokeAPIClient, PaginatedResponse, NamedAPIResource as ClientNamedAPIResource } from './client';

// Re-export types from each domain
export * from './types/base';
export * from './types/pokemon';
export * from './types/berries';
export * from './types/items';

// Explicitly re-export types from locations to avoid conflicts
import {
    Location,
    LocationArea,
    PalParkArea,
    Region
} from './types/locations';

export {
    Location,
    LocationArea,
    PalParkArea,
    Region
};

export * from './types/machines';
export * from './types/moves';

// Re-export client types with explicit names
export {
    PokeAPIClient,
    PaginatedResponse,
    ClientNamedAPIResource as NamedAPIResource
};