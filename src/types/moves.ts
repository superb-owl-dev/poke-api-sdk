import { NamedAPIResource, VerboseEffect, Name, APIResource } from './base';

export interface ContestComboDetail {
    use_before: NamedAPIResource[] | null;
    use_after: NamedAPIResource[] | null;
}

export interface ContestComboSets {
    normal: ContestComboDetail;
    super: ContestComboDetail;
}

export interface MoveFlavorText {
    flavor_text: string;
    language: NamedAPIResource;
    version_group: NamedAPIResource;
}

export interface MoveMetaData {
    ailment: NamedAPIResource;
    category: NamedAPIResource;
    min_hits: number | null;
    max_hits: number | null;
    min_turns: number | null;
    max_turns: number | null;
    drain: number;
    healing: number;
    crit_rate: number;
    ailment_chance: number;
    flinch_chance: number;
    stat_chance: number;
}

export interface MoveStatChange {
    change: number;
    stat: NamedAPIResource;
}

export interface PastMoveStatValues {
    accuracy: number | null;
    effect_chance: number | null;
    power: number | null;
    pp: number | null;
    effect_entries: VerboseEffect[];
    type: NamedAPIResource;
    version_group: NamedAPIResource;
}

export interface Move {
    id: number;
    name: string;
    accuracy: number | null;
    effect_chance: number | null;
    pp: number | null;
    priority: number;
    power: number | null;
    contest_combos: ContestComboSets | null;
    contest_type: NamedAPIResource | null;
    contest_effect: APIResource | null;
    damage_class: NamedAPIResource;
    effect_entries: VerboseEffect[];
    effect_changes: {
        effect_entries: VerboseEffect[];
        version_group: NamedAPIResource;
    }[];
    learned_by_pokemon: NamedAPIResource[];
    flavor_text_entries: MoveFlavorText[];
    generation: NamedAPIResource;
    meta: MoveMetaData | null;
    names: Name[];
    past_values: PastMoveStatValues[];
    stat_changes: MoveStatChange[];
    super_contest_effect: APIResource | null;
    target: NamedAPIResource;
    type: NamedAPIResource;
}

export interface MoveAilment {
    id: number;
    name: string;
    moves: NamedAPIResource[];
    names: Name[];
}

export interface MoveBattleStyle {
    id: number;
    name: string;
    names: Name[];
}

export interface MoveCategory {
    id: number;
    name: string;
    moves: NamedAPIResource[];
    descriptions: { description: string; language: NamedAPIResource }[];
}

export interface MoveDamageClass {
    id: number;
    name: string;
    descriptions: { description: string; language: NamedAPIResource }[];
    moves: NamedAPIResource[];
    names: Name[];
}

export interface MoveLearnMethod {
    id: number;
    name: string;
    descriptions: { description: string; language: NamedAPIResource }[];
    names: Name[];
    version_groups: NamedAPIResource[];
}

export interface MoveTarget {
    id: number;
    name: string;
    descriptions: { description: string; language: NamedAPIResource }[];
    moves: NamedAPIResource[];
    names: Name[];
}