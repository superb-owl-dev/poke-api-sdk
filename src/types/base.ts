export interface APIResource {
    url: string;
}

export interface NamedAPIResource extends APIResource {
    name: string;
}

export interface Name {
    name: string;
    language: NamedAPIResource;
}

export interface Description {
    description: string;
    language: NamedAPIResource;
}

export interface Effect {
    effect: string;
    language: NamedAPIResource;
}

export interface VersionGameIndex {
    game_index: number;
    version: NamedAPIResource;
}

export interface VerboseEffect {
    effect: string;
    short_effect: string;
    language: NamedAPIResource;
}

export interface VersionGroupFlavorText {
    text: string;
    language: NamedAPIResource;
    version_group: NamedAPIResource;
}

export interface FlavorText {
    flavor_text: string;
    language: NamedAPIResource;
}