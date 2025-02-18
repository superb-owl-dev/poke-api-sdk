import { NamedAPIResource, VerboseEffect, VersionGroupFlavorText, VersionGameIndex, Name } from './base';

export interface ItemSprites {
    default: string | null;
}

export interface ItemHolderPokemonVersionDetail {
    rarity: number;
    version: NamedAPIResource;
}

export interface ItemHolderPokemon {
    pokemon: NamedAPIResource;
    version_details: ItemHolderPokemonVersionDetail[];
}

export interface Item {
    id: number;
    name: string;
    cost: number;
    fling_power: number | null;
    fling_effect: NamedAPIResource | null;
    attributes: NamedAPIResource[];
    category: NamedAPIResource;
    effect_entries: VerboseEffect[];
    flavor_text_entries: VersionGroupFlavorText[];
    game_indices: VersionGameIndex[];
    names: Name[];
    sprites: ItemSprites;
    held_by_pokemon: ItemHolderPokemon[];
    baby_trigger_for: NamedAPIResource | null;
}

export interface ItemAttribute {
    id: number;
    name: string;
    items: NamedAPIResource[];
    names: Name[];
    descriptions: { description: string; language: NamedAPIResource }[];
}

export interface ItemCategory {
    id: number;
    name: string;
    items: NamedAPIResource[];
    names: Name[];
    pocket: NamedAPIResource;
}

export interface ItemFlingEffect {
    id: number;
    name: string;
    effect_entries: { effect: string; language: NamedAPIResource }[];
    items: NamedAPIResource[];
}

export interface ItemPocket {
    id: number;
    name: string;
    categories: NamedAPIResource[];
    names: Name[];
}