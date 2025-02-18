import { NamedAPIResource, VersionGameIndex } from './base';

export interface PokemonSprites {
    front_default: string | null;
    front_shiny: string | null;
    front_female: string | null;
    front_shiny_female: string | null;
    back_default: string | null;
    back_shiny: string | null;
    back_female: string | null;
    back_shiny_female: string | null;
}

export interface PokemonCries {
    latest: string;
    legacy: string;
}

export interface PokemonAbility {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource;
}

export interface PokemonMove {
    move: NamedAPIResource;
    version_group_details: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
    level_learned_at: number;
}

export interface PokemonStat {
    stat: NamedAPIResource;
    effort: number;
    base_stat: number;
}

export interface PokemonType {
    slot: number;
    type: NamedAPIResource;
}

export interface PokemonTypePast {
    generation: NamedAPIResource;
    types: PokemonType[];
}

export interface PokemonHeldItem {
    item: NamedAPIResource;
    version_details: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
    version: NamedAPIResource;
    rarity: number;
}

export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: NamedAPIResource[];
    game_indices: VersionGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: PokemonMove[];
    past_types: PokemonTypePast[];
    sprites: PokemonSprites;
    cries: PokemonCries;
    species: NamedAPIResource;
    stats: PokemonStat[];
    types: PokemonType[];
}

export interface LocationAreaEncounter {
    location_area: NamedAPIResource;
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