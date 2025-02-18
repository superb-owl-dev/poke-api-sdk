import { NamedAPIResource, Name, VersionGameIndex } from './base';

export interface EncounterVersionDetails {
    rate: number;
    version: NamedAPIResource;
}

export interface EncounterMethodRate {
    encounter_method: NamedAPIResource;
    version_details: EncounterVersionDetails[];
}

export interface PokemonEncounter {
    pokemon: NamedAPIResource;
    version_details: VersionEncounterDetail[];
}

export interface VersionEncounterDetail {
    version: NamedAPIResource;
    max_chance: number;
    encounter_details: Encounter[];
}

export interface Encounter {
    min_level: number;
    max_level: number;
    condition_values: NamedAPIResource[];
    chance: number;
    method: NamedAPIResource;
}

export interface Location {
    id: number;
    name: string;
    region: NamedAPIResource;
    names: Name[];
    game_indices: VersionGameIndex[];
    areas: NamedAPIResource[];
}

export interface LocationArea {
    id: number;
    name: string;
    game_index: number;
    encounter_method_rates: EncounterMethodRate[];
    location: NamedAPIResource;
    names: Name[];
    pokemon_encounters: PokemonEncounter[];
}

export interface PalParkArea {
    id: number;
    name: string;
    names: Name[];
    pokemon_encounters: PalParkEncounterSpecies[];
}

export interface PalParkEncounterSpecies {
    base_score: number;
    rate: number;
    pokemon_species: NamedAPIResource;
}

export interface Region {
    id: number;
    name: string;
    locations: NamedAPIResource[];
    names: Name[];
    main_generation: NamedAPIResource;
    pokedexes: NamedAPIResource[];
    version_groups: NamedAPIResource[];
}