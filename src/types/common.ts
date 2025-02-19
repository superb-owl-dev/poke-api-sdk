/**
 * Basic resource interface with just a URL.
 * @category Core
 */
export interface APIResource {
    /** The URL of the referenced resource */
    url: string;
}

/**
 * Resource interface with both a name and URL.
 * @category Core 
 */
export interface NamedAPIResource {
    /** The name of the referenced resource */
    name: string;
    /** The URL of the referenced resource */
    url: string;
}

/**
 * Represents a name in different languages
 * @category Core
 */
export interface Name {
    /** The localized name */
    name: string;
    /** The language this name is in */
    language: NamedAPIResource;
}

/**
 * Machine version details interface
 * @category Core
 */
export interface MachineVersionDetail {
    /** The machine that teaches a move from an item */
    machine: APIResource;
    /** The version group of this specific machine */
    version_group: NamedAPIResource;
}

/**
 * Move effect change interface
 * @category Moves
 */
export interface MoveEffectChange {
    /** The previous effect of this move */
    effect_entries: VerboseEffect[];
    /** The version group in which the previous effect of this move originated */
    version_group: NamedAPIResource;
}

/**
 * Detailed effect description
 * @category Core
 */
export interface VerboseEffect {
    /** The localized effect text */
    effect: string;
    /** The language this effect is in */
    language: NamedAPIResource;
}