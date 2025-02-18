import { NamedAPIResource } from './base';

export interface BerryFlavorMap {
    potency: number;
    flavor: NamedAPIResource;
}

export interface Berry {
    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    natural_gift_power: number;
    size: number;
    smoothness: number;
    soil_dryness: number;
    firmness: NamedAPIResource;
    flavors: BerryFlavorMap[];
    item: NamedAPIResource;
    natural_gift_type: NamedAPIResource;
}

export interface BerryFirmness {
    id: number;
    name: string;
    berries: NamedAPIResource[];
    names: { name: string; language: NamedAPIResource }[];
}

export interface BerryFlavor {
    id: number;
    name: string;
    berries: FlavorBerryMap[];
    contest_type: NamedAPIResource;
    names: { name: string; language: NamedAPIResource }[];
}

export interface FlavorBerryMap {
    potency: number;
    berry: NamedAPIResource;
}