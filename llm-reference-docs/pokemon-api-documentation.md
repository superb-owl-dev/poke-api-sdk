If you were using v1 of this API, please switch to v2 (this page). Read more…

Quick tip: Use your browser's "find on page" feature to search for specific resource types (Ctrl+F or Cmd+F).

## Information

This is a consumption-only API — only the HTTP GET method is available on resources.

No authentication is required to access this API, and all resources are fully open and available. Since the move to static hosting in November 2018, rate limiting has been removed entirely, but we still encourage you to limit the frequency of requests to limit our hosting costs.

## Fair Use Policy

PokéAPI is free and open to use. It is also very popular. Because of this, we ask every developer to abide by our fair use policy. People not complying with the fair use policy will have their IP address permanently banned.

PokéAPI is primarily an educational tool, and we will not tolerate denial of service attacks preventing people from learning.

Rules:

* Locally cache resources whenever you request them.
* Be nice and friendly to your fellow PokéAPI developers.
* If you spot security vulnerabilities act and report them responsibly.

## Slack and community

Currently no maintainer has enough free time to support the community on Slack. Our Slack is in an unmaintained status. You can still sign up right here then visit our Slack page.

## Wrapper Libraries

* Node Server-side with auto caching: Pokedex Promise v2 by Thomas Asadurian and Alessandro Pezzé
* Browser-side with auto caching: pokeapi-js-wrapper by Alessandro Pezzé
* Python 3 with auto caching: PokeBase by Greg Hilmes
* Python 2/3 with auto caching: Pokepy by Paul Hallett
* Kotlin (and Java): PokeKotlin by sargunster
* Java (Spring Boot) with auto caching: pokeapi-reactor by Benjamin Churchill
* .NET (C#, VB, etc): PokeApi.NET by PoroCYon
* .NET Standard: PokeApiNet by mtrdp642
* Swift: PokemonAPI by kinkofer
* PHP: PokePHP by Dan Rovito
* PHP: PHPokéAPI by lmerotta
* Ruby: Poke-Api-V2 by rdavid1099
* Go: pokeapi-go by mtslzr
* Crystal: pokeapi by henrikac
* Typescript with auto caching: Pokenode-ts by Gabb-c
* Rust with auto caching: Rustemon by mlemesle
* Asynchronous Python wrapper with auto caching: aiopokeapi by beastmatser
* Scala 3 with auto caching: pokeapi-scala by Juliano Alves
* Elixir wrapper with auto caching: Max-Elixir-PokeAPI by Henrique Artur

## Resource Lists/Pagination (group)

Calling any API endpoint without a resource ID or name will return a paginated list of available resources for that API. By default, a list "page" will contain up to 20 resources. If you would like to change this just add a 'limit' query parameter to the GET request, e.g. ?limit=60. You can use 'offset' to move to the next page, e.g. ?limit=60&offset=60. characteristic, contest-effect, evolution-chain, machine, super-contest-effect endpoints are unnamed, the rest are named.

### Named (endpoint)

GET https://pokeapi.co/api/v2/{endpoint}/

```
{
  "count": 248,
  "next": "https://pokeapi.co/api/v2/ability/?limit=20&offset=20",
  "previous": null,
  "results": [
    {
      "name": "stench",
      "url": "https://pokeapi.co/api/v2/ability/1/"
    }
  ]
}
```
View raw JSON (0.213kB,11lines)

#### NamedAPIResourceList (type)

NameDescriptionTypecount
The total number of resources available from this API.
integernext
The URL for the next page in the list.
stringprevious
The URL for the previous page in the list.
stringresults
A list of named API resources.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)

### Unnamed (endpoint)

GET https://pokeapi.co/api/v2/{endpoint}/

```
{
  "count": 541,
  "next": "https://pokeapi.co/api/v2/evolution-chain?offset=20&limit=20",
  "previous": null,
  "results": [
    {
      "url": "https://pokeapi.co/api/v2/evolution-chain/1/"
    }
  ]
}
```
View raw JSON (0.204kB,10lines)

#### APIResourceList (type)

NameDescriptionTypecount
The total number of resources available from this API.
integernext
The URL for the next page in the list.
stringprevious
The URL for the previous page in the list.
stringresults
A list of unnamed API resources.
list[APIResource](https://pokeapi.co/docs/v2#apiresource)

## Berries (group)

### Berries (endpoint)

Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/berry/{id or name}/

```
{
  "id": 1,
  "name": "cheri",
  "growth_time": 3,
  "max_harvest": 5,
  "natural_gift_power": 60,
  "size": 20,
  "smoothness": 25,
  "soil_dryness": 15,
  "firmness": {
    "name": "soft",
    "url": "https://pokeapi.co/api/v2/berry-firmness/2/"
  },
  "flavors": [
    {
      "potency": 10,
      "flavor": {
        "name": "spicy",
        "url": "https://pokeapi.co/api/v2/berry-flavor/1/"
      }
    }
  ],
  "item": {
    "name": "cheri-berry",
    "url": "https://pokeapi.co/api/v2/item/126/"
  },
  "natural_gift_type": {
    "name": "fire",
    "url": "https://pokeapi.co/api/v2/type/10/"
  }
}
```
View raw JSON (0.608kB,31lines)

#### Berry (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringgrowth_time
Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked.
integermax_harvest
The maximum number of these berries that can grow on one tree in Generation IV.
integernatural_gift_power
The power of the move "Natural Gift" when used with this Berry.
integersize
The size of this Berry, in millimeters.
integersmoothness
The smoothness of this Berry, used in making Pokéblocks or Poffins.
integersoil_dryness
The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly.
integerfirmness
The firmness of this berry, used in making Pokéblocks or Poffins.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([BerryFirmness](https://pokeapi.co/docs/v2#berryfirmness))flavors
A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry.
list[BerryFlavorMap](https://pokeapi.co/docs/v2#berryflavormap)item
Berries are actually items. This is a reference to the item specific data for this berry.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Item](https://pokeapi.co/docs/v2#item))natural_gift_type
The type inherited by "Natural Gift" when used with this Berry.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Type](https://pokeapi.co/docs/v2#type))

#### BerryFlavorMap (type)

NameDescriptionTypepotency
How powerful the referenced flavor is for this berry.
integerflavor
The referenced berry flavor.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([BerryFlavor](https://pokeapi.co/docs/v2#berryflavor))

### Berry Firmnesses (endpoint)

Berries can be soft or hard. Check out Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/berry-firmness/{id or name}/

```
{
  "id": 1,
  "name": "very-soft",
  "berries": [
    {
      "name": "pecha",
      "url": "https://pokeapi.co/api/v2/berry/3/"
    }
  ],
  "names": [
    {
      "name": "Very Soft",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ]
}
```
View raw JSON (0.303kB,19lines)

#### BerryFirmness (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringberries
A list of the berries with this firmness.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Berry](https://pokeapi.co/docs/v2#berry))names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)

### Berry Flavors (endpoint)

Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their nature. Check out Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/berry-flavor/{id or name}/

```
{
  "id": 1,
  "name": "spicy",
  "berries": [
    {
      "potency": 10,
      "berry": {
        "name": "rowap",
        "url": "https://pokeapi.co/api/v2/berry/64/"
      }
    }
  ],
  "contest_type": {
    "name": "cool",
    "url": "https://pokeapi.co/api/v2/contest-type/1/"
  },
  "names": [
    {
      "name": "Spicy",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ]
}
```
View raw JSON (0.446kB,26lines)

#### BerryFlavor (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringberries
A list of the berries with this flavor.
list[FlavorBerryMap](https://pokeapi.co/docs/v2#flavorberrymap)contest_type
The contest type that correlates with this berry flavor.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([ContestType](https://pokeapi.co/docs/v2#contesttype))names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)

#### FlavorBerryMap (type)

NameDescriptionTypepotency
How powerful the referenced flavor is for this berry.
integerberry
The berry with the referenced flavor.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Berry](https://pokeapi.co/docs/v2#berry))

## Contests (group)

### Contest Types (endpoint)

Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/contest-type/{id or name}/

```
{
  "id": 1,
  "name": "cool",
  "berry_flavor": {
    "name": "spicy",
    "url": "https://pokeapi.co/api/v2/berry-flavor/1/"
  },
  "names": [
    {
      "name": "Cool",
      "color": "Red",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ]
}
```
View raw JSON (0.311kB,18lines)

#### ContestType (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringberry_flavor
The berry flavor that correlates with this contest type.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([BerryFlavor](https://pokeapi.co/docs/v2#berryflavor))names
The name of this contest type listed in different languages.
list[ContestName](https://pokeapi.co/docs/v2#contestname)

#### ContestName (type)

NameDescriptionTypename
The name for this contest.
stringcolor
The color associated with this contest's name.
stringlanguage
The language that this name is in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Language](https://pokeapi.co/docs/v2#language))

### Contest Effects (endpoint)

Contest effects refer to the effects of moves when used in contests.

GET https://pokeapi.co/api/v2/contest-effect/{id}/

```
{
  "id": 1,
  "appeal": 4,
  "jam": 0,
  "effect_entries": [
    {
      "effect": "Gives a high number of appeal points wth no other effects.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "flavor_text_entries": [
    {
      "flavor_text": "A highly appealing move.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ]
}
```
View raw JSON (0.46kB,23lines)

#### ContestEffect (type)

NameDescriptionTypeid
The identifier for this resource.
integerappeal
The base number of hearts the user of this move gets.
integerjam
The base number of hearts the user's opponent loses.
integereffect_entries
The result of this contest effect listed in different languages.
list[Effect](https://pokeapi.co/docs/v2#effect)flavor_text_entries
The flavor text of this contest effect listed in different languages.
list[FlavorText](https://pokeapi.co/docs/v2#flavortext)

### Super Contest Effects (endpoint)

Super contest effects refer to the effects of moves when used in super contests.

GET https://pokeapi.co/api/v2/super-contest-effect/{id}/

```
{
  "id": 1,
  "appeal": 2,
  "flavor_text_entries": [
    {
      "flavor_text": "Enables the user to perform first in the next turn.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "moves": [
    {
      "name": "agility",
      "url": "https://pokeapi.co/api/v2/move/97/"
    }
  ]
}
```
View raw JSON (0.358kB,19lines)

#### SuperContestEffect (type)

NameDescriptionTypeid
The identifier for this resource.
integerappeal
The level of appeal this super contest effect has.
integerflavor_text_entries
The flavor text of this super contest effect listed in different languages.
list[FlavorText](https://pokeapi.co/docs/v2#flavortext)moves
A list of moves that have the effect when used in super contests.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Move](https://pokeapi.co/docs/v2#move))

## Encounters (group)

### Encounter Methods (endpoint)

Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/encounter-method/{id or name}/

```
{
  "id": 1,
  "name": "walk",
  "order": 1,
  "names": [
    {
      "name": "Walking in tall grass or a cave",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ]
}
```
View raw JSON (0.229kB,14lines)

#### EncounterMethod (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringorder
A good value for sorting.
integernames
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)

### Encounter Conditions (endpoint)

Conditions which affect what pokemon might appear in the wild, e.g., day or night.

GET https://pokeapi.co/api/v2/encounter-condition/{id or name}/

```
{
  "id": 1,
  "name": "swarm",
  "values": [
    {
      "name": "swarm-yes",
      "url": "https://pokeapi.co/api/v2/encounter-condition-value/1/"
    },
    {
      "name": "swarm-no",
      "url": "https://pokeapi.co/api/v2/encounter-condition-value/2/"
    }
  ],
  "names": [
    {
      "name": "Schwarm",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      }
    }
  ]
}
```
View raw JSON (0.429kB,23lines)

#### EncounterCondition (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringnames
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)values
A list of possible values for this encounter condition.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([EncounterConditionValue](https://pokeapi.co/docs/v2#encounterconditionvalue))

### Encounter Condition Values (endpoint)

Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.

GET https://pokeapi.co/api/v2/encounter-condition-value/{id or name}/

```
{
  "id": 1,
  "name": "swarm-yes",
  "condition": {
    "name": "swarm",
    "url": "https://pokeapi.co/api/v2/encounter-condition/1/"
  },
  "names": [
    {
      "name": "WÃ¤hrend eines Schwarms",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      }
    }
  ]
}
```
View raw JSON (0.319kB,17lines)

#### EncounterConditionValue (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringcondition
The condition this encounter condition value pertains to.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([EncounterCondition](https://pokeapi.co/docs/v2#encountercondition))names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)

## Evolution (group)

### Evolution Chains (endpoint)

Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.

GET https://pokeapi.co/api/v2/evolution-chain/{id}/

```
{
  "id": 7,
  "baby_trigger_item": null,
  "chain": {
    "is_baby": false,
    "species": {
      "name": "rattata",
      "url": "https://pokeapi.co/api/v2/pokemon-species/19/"
    },
    "evolution_details": null,
    "evolves_to": [
      {
        "is_baby": false,
        "species": {
          "name": "raticate",
          "url": "https://pokeapi.co/api/v2/pokemon-species/20/"
        },
        "evolution_details": [
          {
            "item": null,
            "trigger": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/evolution-trigger/1/"
            },
            "gender": null,
            "held_item": null,
            "known_move": null,
            "known_move_type": null,
            "location": null,
            "min_level": 20,
            "min_happiness": null,
            "min_beauty": null,
            "min_affection": null,
            "needs_overworld_rain": false,
            "party_species": null,
            "party_type": null,
            "relative_physical_stats": null,
            "time_of_day": "",
            "trade_species": null,
            "turn_upside_down": false
          }
        ],
        "evolves_to": []
      }
    ]
  }
}
```
View raw JSON (1.227kB,47lines)

#### EvolutionChain (type)

NameDescriptionTypeid
The identifier for this resource.
integerbaby_trigger_item
The item that a Pokémon would be holding when mating that would trigger the egg hatching a baby Pokémon rather than a basic Pokémon.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Item](https://pokeapi.co/docs/v2#item))chain
The base chain link object. Each link contains evolution details for a Pokémon in the chain. Each link references the next Pokémon in the natural evolution order.
[ChainLink](https://pokeapi.co/docs/v2#chainlink)

#### ChainLink (type)

NameDescriptionTypeis_baby
Whether or not this link is for a baby Pokémon. This would only ever be true on the base link.
booleanspecies
The Pokémon species at this point in the evolution chain.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonSpecies](https://pokeapi.co/docs/v2#pokemonspecies))evolution_details
All details regarding the specific details of the referenced Pokémon species evolution.
list[EvolutionDetail](https://pokeapi.co/docs/v2#evolutiondetail)evolves_to
A List of chain objects.
list[ChainLink](https://pokeapi.co/docs/v2#chainlink)

#### EvolutionDetail (type)

NameDescriptionTypeitem
The item required to cause evolution this into Pokémon species.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Item](https://pokeapi.co/docs/v2#item))trigger
The type of event that triggers evolution into this Pokémon species.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([EvolutionTrigger](https://pokeapi.co/docs/v2#evolutiontrigger))gender
The id of the gender of the evolving Pokémon species must be in order to evolve into this Pokémon species.
integerheld_item
The item the evolving Pokémon species must be holding during the evolution trigger event to evolve into this Pokémon species.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Item](https://pokeapi.co/docs/v2#item))known_move
The move that must be known by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Move](https://pokeapi.co/docs/v2#move))known_move_type
The evolving Pokémon species must know a move with this type during the evolution trigger event in order to evolve into this Pokémon species.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Type](https://pokeapi.co/docs/v2#type))location
The location the evolution must be triggered at.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Location](https://pokeapi.co/docs/v2#location))min_level
The minimum required level of the evolving Pokémon species to evolve into this Pokémon species.
integermin_happiness
The minimum required level of happiness the evolving Pokémon species to evolve into this Pokémon species.
integermin_beauty
The minimum required level of beauty the evolving Pokémon species to evolve into this Pokémon species.
integermin_affection
The minimum required level of affection the evolving Pokémon species to evolve into this Pokémon species.
integerneeds_overworld_rain
Whether or not it must be raining in the overworld to cause evolution this Pokémon species.
booleanparty_species
The Pokémon species that must be in the players party in order for the evolving Pokémon species to evolve into this Pokémon species.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonSpecies](https://pokeapi.co/docs/v2#pokemonspecies))party_type
The player must have a Pokémon of this type in their party during the evolution trigger event in order for the evolving Pokémon species to evolve into this Pokémon species.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Type](https://pokeapi.co/docs/v2#type))relative_physical_stats
The required relation between the Pokémon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense.
integertime_of_day
The required time of day. Day or night.
stringtrade_species
Pokémon species for which this one must be traded.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonSpecies](https://pokeapi.co/docs/v2#pokemonspecies))turn_upside_down
Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up.
boolean

### Evolution Triggers (endpoint)

Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/evolution-trigger/{id or name}/

```
{
  "id": 1,
  "name": "level-up",
  "names": [
    {
      "name": "Level up",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/2/"
    }
  ]
}
```
View raw JSON (0.321kB,19lines)

#### EvolutionTrigger (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringnames
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)pokemon_species
A list of pokemon species that result from this evolution trigger.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonSpecies](https://pokeapi.co/docs/v2#pokemonspecies))

## Games (group)

### Generations (endpoint)

A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.

GET https://pokeapi.co/api/v2/generation/{id or name}/

```
{
  "id": 1,
  "name": "generation-i",
  "abilities": [],
  "main_region": {
    "name": "kanto",
    "url": "https://pokeapi.co/api/v2/region/1/"
  },
  "moves": [
    {
      "name": "pound",
      "url": "https://pokeapi.co/api/v2/move/1/"
    }
  ],
  "names": [
    {
      "name": "Generation I",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    }
  ],
  "types": [
    {
      "name": "normal",
      "url": "https://pokeapi.co/api/v2/type/1/"
    }
  ],
  "version_groups": [
    {
      "name": "red-blue",
      "url": "https://pokeapi.co/api/v2/version-group/1/"
    }
  ]
}
```
View raw JSON (0.772kB,42lines)

#### Generation (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringabilities
A list of abilities that were introduced in this generation.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Ability](https://pokeapi.co/docs/v2#ability))names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)main_region
The main region travelled in this generation.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Region](https://pokeapi.co/docs/v2#region))moves
A list of moves that were introduced in this generation.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Move](https://pokeapi.co/docs/v2#move))pokemon_species
A list of Pokémon species that were introduced in this generation.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonSpecies](https://pokeapi.co/docs/v2#pokemonspecies))types
A list of types that were introduced in this generation.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Type](https://pokeapi.co/docs/v2#type))version_groups
A list of version groups that were introduced in this generation.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([VersionGroup](https://pokeapi.co/docs/v2#versiongroup))

### Pokedexes (endpoint)

A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/pokedex/{id or name}/

```
{
  "id": 2,
  "name": "kanto",
  "is_main_series": true,
  "descriptions": [
    {
      "description": "Rot/Blau/Gelb Kanto Dex",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      }
    }
  ],
  "names": [
    {
      "name": "Kanto",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      }
    }
  ],
  "pokemon_entries": [
    {
      "entry_number": 1,
      "pokemon_species": {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
      }
    }
  ],
  "region": {
    "name": "kanto",
    "url": "https://pokeapi.co/api/v2/region/1/"
  },
  "version_groups": [
    {
      "name": "red-blue",
      "url": "https://pokeapi.co/api/v2/version-group/1/"
    }
  ]
}
```
View raw JSON (0.809kB,42lines)

#### Pokedex (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringis_main_series
Whether or not this Pokédex originated in the main series of the video games.
booleandescriptions
The description of this resource listed in different languages.
list[Description](https://pokeapi.co/docs/v2#description)names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)pokemon_entries
A list of Pokémon catalogued in this Pokédex and their indexes.
list[PokemonEntry](https://pokeapi.co/docs/v2#pokemonentry)region
The region this Pokédex catalogues Pokémon for.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Region](https://pokeapi.co/docs/v2#region))version_groups
A list of version groups this Pokédex is relevant to.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([VersionGroup](https://pokeapi.co/docs/v2#versiongroup))

#### PokemonEntry (type)

NameDescriptionTypeentry_number
The index of this Pokémon species entry within the Pokédex.
integerpokemon_species
The Pokémon species being encountered.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonSpecies](https://pokeapi.co/docs/v2#pokemonspecies))

### Version (endpoint)

Versions of the games, e.g., Red, Blue or Yellow.

GET https://pokeapi.co/api/v2/version/{id or name}/

```
{
  "id": 1,
  "name": "red",
  "names": [
    {
      "name": "Rot",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      }
    }
  ],
  "version_group": {
    "name": "red-blue",
    "url": "https://pokeapi.co/api/v2/version-group/1/"
  }
}
```
View raw JSON (0.292kB,17lines)

#### Version (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringnames
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)version_group
The version group this version belongs to.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([VersionGroup](https://pokeapi.co/docs/v2#versiongroup))

### Version Groups (endpoint)

Version groups categorize highly similar versions of the games.

GET https://pokeapi.co/api/v2/version-group/{id or name}/

```
{
  "id": 1,
  "name": "red-blue",
  "order": 1,
  "generation": {
    "name": "generation-i",
    "url": "https://pokeapi.co/api/v2/generation/1/"
  },
  "move_learn_methods": [
    {
      "name": "level-up",
      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
    }
  ],
  "pokedexes": [
    {
      "name": "kanto",
      "url": "https://pokeapi.co/api/v2/pokedex/2/"
    }
  ],
  "regions": [
    {
      "name": "kanto",
      "url": "https://pokeapi.co/api/v2/region/1/"
    }
  ],
  "versions": [
    {
      "name": "red",
      "url": "https://pokeapi.co/api/v2/version/1/"
    }
  ]
}
```
View raw JSON (0.605kB,33lines)

#### VersionGroup (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringorder
Order for sorting. Almost by date of release, except similar versions are grouped together.
integergeneration
The generation this version was introduced in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Generation](https://pokeapi.co/docs/v2#generation))move_learn_methods
A list of methods in which Pokémon can learn moves in this version group.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([MoveLearnMethod](https://pokeapi.co/docs/v2#movelearnmethod))pokedexes
A list of Pokédexes introduces in this version group.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Pokedex](https://pokeapi.co/docs/v2#pokedex))regions
A list of regions that can be visited in this version group.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Region](https://pokeapi.co/docs/v2#region))versions
The versions this version group owns.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Version](https://pokeapi.co/docs/v2#version))

## Items (group)

### Item (endpoint)

An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.

GET https://pokeapi.co/api/v2/item/{id or name}/

```
{
  "id": 1,
  "name": "master-ball",
  "cost": 0,
  "fling_power": 10,
  "fling_effect": {
    "name": "flinch",
    "url": "https://pokeapi.co/api/v2/item-fling-effect/7/"
  },
  "attributes": [
    {
      "name": "holdable",
      "url": "https://pokeapi.co/api/v2/item-attribute/5/"
    }
  ],
  "category": {
    "name": "standard-balls",
    "url": "https://pokeapi.co/api/v2/item-category/34/"
  },
  "effect_entries": [
    {
      "effect": "Used in battle\n:   [Catches]{mechanic:catch} a wild Pokémon without fail.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
      "short_effect": "Catches a wild Pokémon every time.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "flavor_text_entries": [
    {
      "text": "The best Poké Ball with the ultimate level of performance. With it, you will catch any wild Pokémon without fail.",
      "version_group": {
        "name": "x-y",
        "url": "https://pokeapi.co/api/v2/version-group/15/"
      },
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "game_indices": [
    {
      "game_index": 1,
      "generation": {
        "name": "generation-vi",
        "url": "https://pokeapi.co/api/v2/generation/6/"
      }
    }
  ],
  "names": [
    {
      "name": "Master Ball",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "sprites": {
    "default": "https://pokeapi.co/media/sprites/items/master-ball.png"
  },
  "held_by_pokemon": [
    {
      "pokemon": {
        "name": "chansey",
        "url": "https://pokeapi.co/api/v2/pokemon/113/"
      },
      "version_details": [
        {
          "rarity": 50,
          "version": {
            "name": "soulsilver",
            "url": "https://pokeapi.co/api/v2/version/16/"
          }
        }
      ]
    }
  ],
  "baby_trigger_for": {
    "url": "https://pokeapi.co/api/v2/evolution-chain/1/"
  }
}
```
View raw JSON (2.062kB,84lines)

#### Item (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringcost
The price of this item in stores.
integerfling_power
The power of the move Fling when used with this item.
integerfling_effect
The effect of the move Fling when used with this item.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([ItemFlingEffect](https://pokeapi.co/docs/v2#itemflingeffect))attributes
A list of attributes this item has.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([ItemAttribute](https://pokeapi.co/docs/v2#itemattribute))category
The category of items this item falls into.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([ItemCategory](https://pokeapi.co/docs/v2#itemcategory))effect_entries
The effect of this ability listed in different languages.
list[VerboseEffect](https://pokeapi.co/docs/v2#verboseeffect)flavor_text_entries
The flavor text of this ability listed in different languages.
list[VersionGroupFlavorText](https://pokeapi.co/docs/v2#versiongroupflavortext)game_indices
A list of game indices relevent to this item by generation.
list[GenerationGameIndex](https://pokeapi.co/docs/v2#generationgameindex)names
The name of this item listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)sprites
A set of sprites used to depict this item in the game.
[ItemSprites](https://pokeapi.co/docs/v2#itemsprites)held_by_pokemon
A list of Pokémon that might be found in the wild holding this item.
list[ItemHolderPokemon](https://pokeapi.co/docs/v2#itemholderpokemon)baby_trigger_for
An evolution chain this item requires to produce a bay during mating.
[APIResource](https://pokeapi.co/docs/v2#apiresource)([EvolutionChain](https://pokeapi.co/docs/v2#evolutionchain))machines
A list of the machines related to this item.
list[MachineVersionDetail](https://pokeapi.co/docs/v2#machineversiondetail)

#### ItemSprites (type)

NameDescriptionTypedefault
The default depiction of this item.
string

#### ItemHolderPokemon (type)

NameDescriptionTypepokemon
The Pokémon that holds this item.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Pokemon](https://pokeapi.co/docs/v2#pokemon))version_details
The details for the version that this item is held in by the Pokémon.
list[ItemHolderPokemonVersionDetail](https://pokeapi.co/docs/v2#itemholderpokemonversiondetail)

#### ItemHolderPokemonVersionDetail (type)

NameDescriptionTyperarity
How often this Pokémon holds this item in this version.
integerversion
The version that this item is held in by the Pokémon.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Version](https://pokeapi.co/docs/v2#version))

### Item Attributes (endpoint)

Item attributes define particular aspects of items, e.g. "usable in battle" or "consumable".

GET https://pokeapi.co/api/v2/item-attribute/{id or name}/

```
{
  "id": 1,
  "name": "countable",
  "descriptions": [
    {
      "description": "Has a count in the bag",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "items": [
    {
      "name": "master-ball",
      "url": "https://pokeapi.co/api/v2/item/1/"
    }
  ],
  "names": [
    {
      "name": "Countable",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ]
}
```
View raw JSON (0.495kB,28lines)

#### ItemAttribute (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringitems
A list of items that have this attribute.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Item](https://pokeapi.co/docs/v2#item))names
The name of this item attribute listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)descriptions
The description of this item attribute listed in different languages.
list[Description](https://pokeapi.co/docs/v2#description)

### Item Categories (endpoint)

Item categories determine where items will be placed in the players bag.

GET https://pokeapi.co/api/v2/item-category/{id or name}/

```
{
  "id": 1,
  "name": "stat-boosts",
  "items": [
    {
      "name": "guard-spec",
      "url": "https://pokeapi.co/api/v2/item/55/"
    }
  ],
  "names": [
    {
      "name": "Stat boosts",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "pocket": {
    "name": "battle",
    "url": "https://pokeapi.co/api/v2/item-pocket/7/"
  }
}
```
View raw JSON (0.405kB,23lines)

#### ItemCategory (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringitems
A list of items that are a part of this category.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Item](https://pokeapi.co/docs/v2#item))names
The name of this item category listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)pocket
The pocket items in this category would be put in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([ItemPocket](https://pokeapi.co/docs/v2#itempocket))

### Item Fling Effects (endpoint)

The various effects of the move "Fling" when used with different items.

GET https://pokeapi.co/api/v2/item-fling-effect/{id or name}/

```
{
  "id": 1,
  "name": "badly-poison",
  "effect_entries": [
    {
      "effect": "Badly poisons the target.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "items": [
    {
      "name": "toxic-orb",
      "url": "https://pokeapi.co/api/v2/item/249/"
    }
  ]
}
```
View raw JSON (0.336kB,19lines)

#### ItemFlingEffect (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringeffect_entries
The result of this fling effect listed in different languages.
list[Effect](https://pokeapi.co/docs/v2#effect)items
A list of items that have this fling effect.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Item](https://pokeapi.co/docs/v2#item))

### Item Pockets (endpoint)

Pockets within the players bag used for storing items by category.

GET https://pokeapi.co/api/v2/item-pocket/{id or name}/

```
{
  "id": 1,
  "name": "misc",
  "categories": [
    {
      "name": "collectibles",
      "url": "https://pokeapi.co/api/v2/item-category/9/"
    }
  ],
  "names": [
    {
      "name": "Items",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ]
}
```
View raw JSON (0.312kB,19lines)

#### ItemPocket (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringcategories
A list of item categories that are relevant to this item pocket.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([ItemCategory](https://pokeapi.co/docs/v2#itemcategory))names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)

## Locations (group)

### Locations (endpoint)

Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.

GET https://pokeapi.co/api/v2/location/{id or name}/

```
{
  "id": 1,
  "name": "canalave-city",
  "region": {
    "name": "sinnoh",
    "url": "https://pokeapi.co/api/v2/region/4/"
  },
  "names": [
    {
      "name": "Canalave City",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "game_indices": [
    {
      "game_index": 7,
      "generation": {
        "name": "generation-iv",
        "url": "https://pokeapi.co/api/v2/generation/4/"
      }
    }
  ],
  "areas": [
    {
      "name": "canalave-city-area",
      "url": "https://pokeapi.co/api/v2/location-area/1/"
    }
  ]
}
```
View raw JSON (0.6kB,32lines)

#### Location (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringregion
The region this location can be found in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource%20)([Region](https://pokeapi.co/docs/v2#region))names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)game_indices
A list of game indices relevent to this location by generation.
list[GenerationGameIndex](https://pokeapi.co/docs/v2#generationgameindex)areas
Areas that can be found within this location.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([LocationArea](https://pokeapi.co/docs/v2#locationarea))

### Location Areas (endpoint)

Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.

GET https://pokeapi.co/api/v2/location-area/{id or name}/

```
{
  "id": 1,
  "name": "canalave-city-area",
  "game_index": 1,
  "encounter_method_rates": [
    {
      "encounter_method": {
        "name": "old-rod",
        "url": "https://pokeapi.co/api/v2/encounter-method/2/"
      },
      "version_details": [
        {
          "rate": 25,
          "version": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version/14/"
          }
        }
      ]
    }
  ],
  "location": {
    "name": "canalave-city",
    "url": "https://pokeapi.co/api/v2/location/1/"
  },
  "names": [
    {
      "name": "",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "pokemon_encounters": [
    {
      "pokemon": {
        "name": "tentacool",
        "url": "https://pokeapi.co/api/v2/pokemon/72/"
      },
      "version_details": [
        {
          "version": {
            "name": "diamond",
            "url": "https://pokeapi.co/api/v2/version/12/"
          },
          "max_chance": 60,
          "encounter_details": [
            {
              "min_level": 20,
              "max_level": 30,
              "condition_values": [],
              "chance": 60,
              "method": {
                "name": "surf",
                "url": "https://pokeapi.co/api/v2/encounter-method/5/"
              }
            }
          ]
        }
      ]
    }
  ]
}
```
View raw JSON (1.405kB,64lines)

#### LocationArea (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringgame_index
The internal id of an API resource within game data.
integerencounter_method_rates
A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game.
list[EncounterMethodRate](https://pokeapi.co/docs/v2#encountermethodrate)location
The region this location area can be found in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Location](https://pokeapi.co/docs/v2#location))names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)pokemon_encounters
A list of Pokémon that can be encountered in this area along with version specific details about the encounter.
list[PokemonEncounter](https://pokeapi.co/docs/v2#pokemonencounter)

#### EncounterMethodRate (type)

NameDescriptionTypeencounter_method
The method in which Pokémon may be encountered in an area..
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource%20)([EncounterMethod](https://pokeapi.co/docs/v2#encountermethod))version_details
The chance of the encounter to occur on a version of the game.
list[EncounterVersionDetails](https://pokeapi.co/docs/v2#encounterversiondetails)

#### EncounterVersionDetails (type)

NameDescriptionTyperate
The chance of an encounter to occur.
integerversion
The version of the game in which the encounter can occur with the given chance.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource%20)([Version](https://pokeapi.co/docs/v2#version))

#### PokemonEncounter (type)

NameDescriptionTypepokemon
The Pokémon being encountered.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource%20)([Pokemon](https://pokeapi.co/docs/v2#pokemon))version_details
A list of versions and encounters with Pokémon that might happen in the referenced location area.
list[VersionEncounterDetail](https://pokeapi.co/docs/v2#versionencounterdetail)

### Pal Park Areas (endpoint)

Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.

GET https://pokeapi.co/api/v2/pal-park-area/{id or name}/

```
{
  "id": 1,
  "name": "forest",
  "names": [
    {
      "name": "Forest",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "pokemon_encounters": [
    {
      "base_score": 30,
      "rate": 50,
      "pokemon_species": {
        "name": "caterpie",
        "url": "https://pokeapi.co/api/v2/pokemon-species/10/"
      }
    }
  ]
}
```
View raw JSON (0.403kB,23lines)

#### PalParkArea (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringnames
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)pokemon_encounters
A list of Pokémon encountered in thi pal park area along with details.
list[PalParkEncounterSpecies](https://pokeapi.co/docs/v2#palparkencounterspecies)

#### PalParkEncounterSpecies (type)

NameDescriptionTypebase_score
The base score given to the player when this Pokémon is caught during a pal park run.
integerrate
The base rate for encountering this Pokémon in this pal park area.
integerpokemon_species
The Pokémon species being encountered.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource%20)([PokemonSpecies](https://pokeapi.co/docs/v2#pokemonspecies))

### Regions (endpoint)

A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.

GET https://pokeapi.co/api/v2/region/{id or name}/

```
{
  "id": 1,
  "name": "kanto",
  "locations": [
    {
      "name": "celadon-city",
      "url": "https://pokeapi.co/api/v2/location/67/"
    }
  ],
  "main_generation": {
    "name": "generation-i",
    "url": "https://pokeapi.co/api/v2/generation/1/"
  },
  "names": [
    {
      "name": "Kanto",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      }
    }
  ],
  "pokedexes": [
    {
      "name": "kanto",
      "url": "https://pokeapi.co/api/v2/pokedex/2/"
    }
  ],
  "version_groups": [
    {
      "name": "red-blue",
      "url": "https://pokeapi.co/api/v2/version-group/1/"
    }
  ]
}
```
View raw JSON (0.649kB,35lines)

#### Region (type)

NameDescriptionTypeid
The identifier for this resource.
integerlocations
A list of locations that can be found in this region.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Location](https://pokeapi.co/docs/v2#location))name
The name for this resource.
stringnames
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)main_generation
The generation this region was introduced in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource%20)([Generation](https://pokeapi.co/docs/v2#generation))pokedexes
A list of pokédexes that catalogue Pokémon in this region.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Pokedex](https://pokeapi.co/docs/v2#pokedex))version_groups
A list of version groups where this region can be visited.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([VersionGroup](https://pokeapi.co/docs/v2#versiongroup))

## Machines (group)

### Machines (endpoint)

Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.

GET https://pokeapi.co/api/v2/machine/{id}/

```
{
  "id": 1,
  "item": {
    "name": "tm01",
    "url": "https://pokeapi.co/api/v2/item/305/"
  },
  "move": {
    "name": "mega-punch",
    "url": "https://pokeapi.co/api/v2/move/5/"
  },
  "version_group": {
    "name": "red-blue",
    "url": "https://pokeapi.co/api/v2/version/1/"
  }
}
```
View raw JSON (0.289kB,15lines)

#### Machine (type)

NameDescriptionTypeid
The identifier for this resource.
integeritem
The TM or HM item that corresponds to this machine.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Item](https://pokeapi.co/docs/v2#item))move
The move that is taught by this machine.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Move](https://pokeapi.co/docs/v2#move))version_group
The version group that this machine applies to.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([VersionGroup](https://pokeapi.co/docs/v2#versiongroup))

## Moves (group)

### Moves (endpoint)

Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.

GET https://pokeapi.co/api/v2/move/{id or name}/

```
{
  "id": 1,
  "name": "pound",
  "accuracy": 100,
  "effect_chance": null,
  "pp": 35,
  "priority": 0,
  "power": 40,
  "contest_combos": {
    "normal": {
      "use_before": [
        {
          "name": "double-slap",
          "url": "https://pokeapi.co/api/v2/move/3/"
        },
        {
          "name": "headbutt",
          "url": "https://pokeapi.co/api/v2/move/29/"
        },
        {
          "name": "feint-attack",
          "url": "https://pokeapi.co/api/v2/move/185/"
        }
      ],
      "use_after": null
    },
    "super": {
      "use_before": null,
      "use_after": null
    }
  },
  "contest_type": {
    "name": "tough",
    "url": "https://pokeapi.co/api/v2/contest-type/5/"
  },
  "contest_effect": {
    "url": "https://pokeapi.co/api/v2/contest-effect/1/"
  },
  "damage_class": {
    "name": "physical",
    "url": "https://pokeapi.co/api/v2/move-damage-class/2/"
  },
  "effect_entries": [
    {
      "effect": "Inflicts [regular damage]{mechanic:regular-damage}.",
      "short_effect": "Inflicts regular damage with no additional effect.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "effect_changes": [],
  "generation": {
    "name": "generation-i",
    "url": "https://pokeapi.co/api/v2/generation/1/"
  },
  "meta": {
    "ailment": {
      "name": "none",
      "url": "https://pokeapi.co/api/v2/move-ailment/0/"
    },
    "category": {
      "name": "damage",
      "url": "https://pokeapi.co/api/v2/move-category/0/"
    },
    "min_hits": null,
    "max_hits": null,
    "min_turns": null,
    "max_turns": null,
    "drain": 0,
    "healing": 0,
    "crit_rate": 0,
    "ailment_chance": 0,
    "flinch_chance": 0,
    "stat_chance": 0
  },
  "names": [
    {
      "name": "Pound",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "past_values": [],
  "stat_changes": [],
  "super_contest_effect": {
    "url": "https://pokeapi.co/api/v2/super-contest-effect/5/"
  },
  "target": {
    "name": "selected-pokemon",
    "url": "https://pokeapi.co/api/v2/move-target/10/"
  },
  "type": {
    "name": "normal",
    "url": "https://pokeapi.co/api/v2/type/1/"
  },
  "learned_by_pokemon": [
    {
      "name": "clefairy",
      "url": "https://pokeapi.co/api/v2/pokemon/35/"
    }
  ],
  "flavor_text_entries": [
    {
      "flavor_text": "Pounds with fore­\nlegs or tail.",
      "language": {
        "url": "https://pokeapi.co/api/v2/language/9/",
        "name": "en"
      },
      "version_group": {
        "url": "https://pokeapi.co/api/v2/version-group/3/",
        "name": "gold-silver"
      }
    }
  ]
}
```
View raw JSON (2.714kB,119lines)

#### Move (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringaccuracy
The percent value of how likely this move is to be successful.
integereffect_chance
The percent value of how likely it is this moves effect will happen.
integerpp
Power points. The number of times this move can be used.
integerpriority
A value between -8 and 8. Sets the order in which moves are executed during battle. See Bulbapedia for greater detail.
integerpower
The base power of this move with a value of 0 if it does not have a base power.
integercontest_combos
A detail of normal and super contest combos that require this move.
[ContestComboSets](https://pokeapi.co/docs/v2#contestcombosets)contest_type
The type of appeal this move gives a Pokémon when used in a contest.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([ContestType](https://pokeapi.co/docs/v2#contesttype))contest_effect
The effect the move has when used in a contest.
[APIResource](https://pokeapi.co/docs/v2#apiresource)([ContestEffect](https://pokeapi.co/docs/v2#contesteffect))damage_class
The type of damage the move inflicts on the target, e.g. physical.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([MoveDamageClass](https://pokeapi.co/docs/v2#movedamageclass))effect_entries
The effect of this move listed in different languages.
list[VerboseEffect](https://pokeapi.co/docs/v2#verboseeffect)effect_changes
The list of previous effects this move has had across version groups of the games.
list[AbilityEffectChange](https://pokeapi.co/docs/v2#abilityeffectchange)learned_by_pokemon
List of Pokemon that can learn the move
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Pokemon](https://pokeapi.co/docs/v2#pokemon))flavor_text_entries
The flavor text of this move listed in different languages.
list[MoveFlavorText](https://pokeapi.co/docs/v2#moveflavortext)generation
The generation in which this move was introduced.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource%20)([Generation](https://pokeapi.co/docs/v2#generation))machines
A list of the machines that teach this move.
list[MachineVersionDetail](https://pokeapi.co/docs/v2#machineversiondetail)meta
Metadata about this move
[MoveMetaData](https://pokeapi.co/docs/v2#movemetadata)names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)past_values
A list of move resource value changes across version groups of the game.
list[PastMoveStatValues](https://pokeapi.co/docs/v2#pastmovestatvalues)stat_changes
A list of stats this moves effects and how much it effects them.
list[MoveStatChange](https://pokeapi.co/docs/v2#movestatchange)super_contest_effect
The effect the move has when used in a super contest.
[APIResource](https://pokeapi.co/docs/v2#apiresource%20)([SuperContestEffect](https://pokeapi.co/docs/v2#supercontesteffect))target
The type of target that will receive the effects of the attack.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource%20)([MoveTarget](https://pokeapi.co/docs/v2#movetarget))type
The elemental type of this move.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource%20%20)([Type](https://pokeapi.co/docs/v2#type))

#### ContestComboSets (type)

NameDescriptionTypenormal
A detail of moves this move can be used before or after, granting additional appeal points in contests.
[ContestComboDetail](https://pokeapi.co/docs/v2#contestcombodetail)super
A detail of moves this move can be used before or after, granting additional appeal points in super contests.
[ContestComboDetail](https://pokeapi.co/docs/v2#contestcombodetail)

#### ContestComboDetail (type)

NameDescriptionTypeuse_before
A list of moves to use before this move.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Move](https://pokeapi.co/docs/v2#move))use_after
A list of moves to use after this move.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Move](https://pokeapi.co/docs/v2#move))

#### MoveFlavorText (type)

NameDescriptionTypeflavor_text
The localized flavor text for an api resource in a specific language.
stringlanguage
The language this name is in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Language](https://pokeapi.co/docs/v2#language))version_group
The version group that uses this flavor text.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([VersionGroup](https://pokeapi.co/docs/v2#versiongroup))

#### MoveMetaData (type)

NameDescriptionTypeailment
The status ailment this move inflicts on its target.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource%20)([MoveAilment](https://pokeapi.co/docs/v2#moveailment))category
The category of move this move falls under, e.g. damage or ailment.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource%20)([MoveCategory](https://pokeapi.co/docs/v2#movecategory))min_hits
The minimum number of times this move hits. Null if it always only hits once.
integermax_hits
The maximum number of times this move hits. Null if it always only hits once.
integermin_turns
The minimum number of turns this move continues to take effect. Null if it always only lasts one turn.
integermax_turns
The maximum number of turns this move continues to take effect. Null if it always only lasts one turn.
integerdrain
HP drain (if positive) or Recoil damage (if negative), in percent of damage done.
integerhealing
The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP.
integercrit_rate
Critical hit rate bonus.
integerailment_chance
The likelihood this attack will cause an ailment.
integerflinch_chance
The likelihood this attack will cause the target Pokémon to flinch.
integerstat_chance
The likelihood this attack will cause a stat change in the target Pokémon.
integer

#### MoveStatChange (type)

NameDescriptionTypechange
The amount of change.
integerstat
The stat being affected.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource%20%20)([Stat](https://pokeapi.co/docs/v2#stat))

#### PastMoveStatValues (type)

NameDescriptionTypeaccuracy
The percent value of how likely this move is to be successful.
integereffect_chance
The percent value of how likely it is this moves effect will take effect.
integerpower
The base power of this move with a value of 0 if it does not have a base power.
integerpp
Power points. The number of times this move can be used.
integereffect_entries
The effect of this move listed in different languages.
list[VerboseEffect](https://pokeapi.co/docs/v2#verboseeffect)type
The elemental type of this move.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource%20%20)([Type](https://pokeapi.co/docs/v2#type))version_group
The version group in which these move stat values were in effect.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource%20)([VersionGroup](https://pokeapi.co/docs/v2#versiongroup))

### Move Ailments (endpoint)

Move Ailments are status conditions caused by moves used during battle. See Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/move-ailment/{id or name}/

```
{
  "id": 1,
  "name": "paralysis",
  "moves": [
    {
      "name": "thunder-punch",
      "url": "https://pokeapi.co/api/v2/move/9/"
    }
  ],
  "names": [
    {
      "name": "Paralysis",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ]
}
```
View raw JSON (0.308kB,19lines)

#### MoveAilment (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringmoves
A list of moves that cause this ailment.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Move](https://pokeapi.co/docs/v2#move))names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)

### Move Battle Styles (endpoint)

Styles of moves when used in the Battle Palace. See Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/move-battle-style/{id or name}/

```
{
  "id": 1,
  "name": "attack",
  "names": [
    {
      "name": "Attack",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ]
}
```
View raw JSON (0.192kB,13lines)

#### MoveBattleStyle (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringnames
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)

### Move Categories (endpoint)

Very general categories that loosely group move effects.

GET https://pokeapi.co/api/v2/move-category/{id or name}/

```
{
  "id": 1,
  "name": "ailment",
  "descriptions": [
    {
      "description": "No damage; inflicts status ailment",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "moves": [
    {
      "name": "sing",
      "url": "https://pokeapi.co/api/v2/move/47/"
    }
  ]
}
```
View raw JSON (0.337kB,19lines)

#### MoveCategory (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringmoves
A list of moves that fall into this category.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Move](https://pokeapi.co/docs/v2#move))descriptions
The description of this resource listed in different languages.
list[Description](https://pokeapi.co/docs/v2#description)

### Move Damage Classes (endpoint)

Damage classes moves can have, e.g. physical, special, or non-damaging.

GET https://pokeapi.co/api/v2/move-damage-class/{id or name}/

```
{
  "id": 1,
  "name": "status",
  "descriptions": [
    {
      "description": "ãƒ€ãƒ¡ãƒ¼ã‚¸ã�ªã�„",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/1/"
      }
    }
  ],
  "moves": [
    {
      "name": "swords-dance",
      "url": "https://pokeapi.co/api/v2/move/14/"
    }
  ]
}
```
View raw JSON (0.349kB,19lines)

#### MoveDamageClass (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringdescriptions
The description of this resource listed in different languages.
list[Description](https://pokeapi.co/docs/v2#description)moves
A list of moves that fall into this damage class.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Move](https://pokeapi.co/docs/v2#move))names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)

### Move Learn Methods (endpoint)

Methods by which Pokémon can learn moves.

GET https://pokeapi.co/api/v2/move-learn-method/{id or name}/

```
{
  "id": 1,
  "name": "level-up",
  "names": [
    {
      "name": "Level up",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      }
    }
  ],
  "descriptions": [
    {
      "description": "Wird gelernt, wenn ein Pokémon ein bestimmtes Level erreicht.",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      }
    }
  ],
  "version_groups": [
    {
      "name": "red-blue",
      "url": "https://pokeapi.co/api/v2/version-group/1/"
    }
  ]
}
```
View raw JSON (0.548kB,28lines)

#### MoveLearnMethod (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringdescriptions
The description of this resource listed in different languages.
list[Description](https://pokeapi.co/docs/v2#description)names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)version_groups
A list of version groups where moves can be learned through this method.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([VersionGroup](https://pokeapi.co/docs/v2#versiongroup))

### Move Targets (endpoint)

Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.

GET https://pokeapi.co/api/v2/move-target/{id or name}/

```
{
  "id": 1,
  "name": "specific-move",
  "descriptions": [
    {
      "description": "Eine spezifische Fähigkeit. Wie diese Fähigkeit genutzt wird, hängt von den genutzten Fähigkeiten ab.",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      }
    }
  ],
  "moves": [
    {
      "name": "counter",
      "url": "https://pokeapi.co/api/v2/move/68/"
    }
  ],
  "names": [
    {
      "name": "Spezifische Fähigkeit",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      }
    }
  ]
}
```
View raw JSON (0.592kB,28lines)

#### MoveTarget (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringdescriptions
The description of this resource listed in different languages.
list[Description](https://pokeapi.co/docs/v2#description)moves
A list of moves that that are directed at this target.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Move](https://pokeapi.co/docs/v2#move))names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)

## Pokémon (group)

### Abilities (endpoint)

Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/ability/{id or name}/

```
{
  "id": 1,
  "name": "stench",
  "is_main_series": true,
  "generation": {
    "name": "generation-iii",
    "url": "https://pokeapi.co/api/v2/generation/3/"
  },
  "names": [
    {
      "name": "Stench",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "effect_entries": [
    {
      "effect": "This Pokémon's damaging moves have a 10% chance to make the target [flinch]{mechanic:flinch} with each hit if they do not already cause flinching as a secondary effect.\n\nThis ability does not stack with a held item.\n\nOverworld: The wild encounter rate is halved while this Pokémon is first in the party.",
      "short_effect": "Has a 10% chance of making target Pokémon [flinch]{mechanic:flinch} with each hit.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "effect_changes": [
    {
      "version_group": {
        "name": "black-white",
        "url": "https://pokeapi.co/api/v2/version-group/11/"
      },
      "effect_entries": [
        {
          "effect": "Has no effect in battle.",
          "language": {
            "name": "en",
            "url": "https://pokeapi.co/api/v2/language/9/"
          }
        }
      ]
    }
  ],
  "flavor_text_entries": [
    {
      "flavor_text": "è‡­ã��ã�¦ã€€ç›¸æ‰‹ã�Œ\nã�²ã‚‹ã‚€ã€€ã�“ã�¨ã�Œã�‚ã‚‹ã€‚",
      "language": {
        "name": "ja-kanji",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "version_group": {
        "name": "x-y",
        "url": "https://pokeapi.co/api/v2/version-group/15/"
      }
    }
  ],
  "pokemon": [
    {
      "is_hidden": true,
      "slot": 3,
      "pokemon": {
        "name": "gloom",
        "url": "https://pokeapi.co/api/v2/pokemon/44/"
      }
    }
  ]
}
```
View raw JSON (1.896kB,68lines)

#### Ability (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringis_main_series
Whether or not this ability originated in the main series of the video games.
booleangeneration
The generation this ability originated in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Generation](https://pokeapi.co/docs/v2#generation))names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)effect_entries
The effect of this ability listed in different languages.
list[VerboseEffect](https://pokeapi.co/docs/v2#verboseeffect)effect_changes
The list of previous effects this ability has had across version groups.
list[AbilityEffectChange](https://pokeapi.co/docs/v2#abilityeffectchange)flavor_text_entries
The flavor text of this ability listed in different languages.
list[AbilityFlavorText](https://pokeapi.co/docs/v2#abilityflavortext)pokemon
A list of Pokémon that could potentially have this ability.
list[AbilityPokemon](https://pokeapi.co/docs/v2#abilitypokemon)

#### AbilityEffectChange (type)

NameDescriptionTypeeffect_entries
The previous effect of this ability listed in different languages.
list[Effect](https://pokeapi.co/docs/v2#effect)version_group
The version group in which the previous effect of this ability originated.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([VersionGroup](https://pokeapi.co/docs/v2#versiongroup))

#### AbilityFlavorText (type)

NameDescriptionTypeflavor_text
The localized name for an API resource in a specific language.
stringlanguage
The language this text resource is in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Language](https://pokeapi.co/docs/v2#language))version_group
The version group that uses this flavor text.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([VersionGroup](https://pokeapi.co/docs/v2#versiongroup))

#### AbilityPokemon (type)

NameDescriptionTypeis_hidden
Whether or not this a hidden ability for the referenced Pokémon.
booleanslot
Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon.
integerpokemon
The Pokémon this ability could belong to.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Pokemon](https://pokeapi.co/docs/v2#pokemon))

### Characteristics (endpoint)

Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/characteristic/{id}/

```
{
  "id": 1,
  "gene_modulo": 0,
  "possible_values": [
    0,
    5,
    10,
    15,
    20,
    25,
    30
  ],
  "highest_stat": {
    "name": "hp",
    "url": "https://pokeapi.co/api/v2/stat/1/"
  },
  "descriptions": [
    {
      "description": "Loves to eat",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ]
}
```
View raw JSON (0.383kB,26lines)

#### Characteristic (type)

NameDescriptionTypeid
The identifier for this resource.
integergene_modulo
The remainder of the highest stat/IV divided by 5.
integerpossible_values
The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5.
listintegerhighest_stat
The stat which results in this characteristic.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Stat](https://pokeapi.co/docs/v2#stat))descriptions
The descriptions of this characteristic listed in different languages.
list[Description](https://pokeapi.co/docs/v2#description)

### Egg Groups (endpoint)

Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/egg-group/{id or name}/

```
{
  "id": 1,
  "name": "monster",
  "names": [
    {
      "name": "かいじゅう",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/1/"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    }
  ]
}
```
View raw JSON (0.329kB,19lines)

#### EggGroup (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringnames
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)pokemon_species
A list of all Pokémon species that are members of this egg group.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonSpecies](https://pokeapi.co/docs/v2#pokemonspecies))

### Genders (endpoint)

Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/gender/{id or name}/

```
{
  "id": 1,
  "name": "female",
  "pokemon_species_details": [
    {
      "rate": 1,
      "pokemon_species": {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
      }
    }
  ],
  "required_for_evolution": [
    {
      "name": "wormadam",
      "url": "https://pokeapi.co/api/v2/pokemon-species/413/"
    }
  ]
}
```
View raw JSON (0.359kB,19lines)

#### Gender (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringpokemon_species_details
A list of Pokémon species that can be this gender and how likely it is that they will be.
list[PokemonSpeciesGender](https://pokeapi.co/docs/v2#pokemonspeciesgender)required_for_evolution
A list of Pokémon species that required this gender in order for a Pokémon to evolve into them.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonSpecies](https://pokeapi.co/docs/v2#pokemonspecies))

#### PokemonSpeciesGender (type)

NameDescriptionTyperate
The chance of this Pokémon being female, in eighths; or -1 for genderless.
integerpokemon_species
A Pokémon species that can be the referenced gender.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonSpecies](https://pokeapi.co/docs/v2#pokemonspecies))

### Growth Rates (endpoint)

Growth rates are the speed with which Pokémon gain levels through experience. Check out Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/growth-rate/{id or name}/

```
{
  "id": 1,
  "name": "slow",
  "formula": "\\frac{5x^3}{4}",
  "descriptions": [
    {
      "description": "langsam",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      }
    }
  ],
  "levels": [
    {
      "level": 100,
      "experience": 1250000
    }
  ],
  "pokemon_species": [
    {
      "name": "growlithe",
      "url": "https://pokeapi.co/api/v2/pokemon-species/58/"
    }
  ]
}
```
View raw JSON (0.444kB,26lines)

#### GrowthRate (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringformula
The formula used to calculate the rate at which the Pokémon species gains level.
stringdescriptions
The descriptions of this characteristic listed in different languages.
list[Description](https://pokeapi.co/docs/v2#description)levels
A list of levels and the amount of experienced needed to atain them based on this growth rate.
list[GrowthRateExperienceLevel](https://pokeapi.co/docs/v2#growthrateexperiencelevel)pokemon_species
A list of Pokémon species that gain levels at this growth rate.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonSpecies](https://pokeapi.co/docs/v2#pokemonspecies))

#### GrowthRateExperienceLevel (type)

NameDescriptionTypelevel
The level gained.
integerexperience
The amount of experience required to reach the referenced level.
integer

### Natures (endpoint)

Natures influence how a Pokémon's stats grow. See Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/nature/{id or name}/

```
{
  "id": 2,
  "name": "bold",
  "decreased_stat": {
    "name": "attack",
    "url": "https://pokeapi.co/api/v2/stat/2/"
  },
  "increased_stat": {
    "name": "defense",
    "url": "https://pokeapi.co/api/v2/stat/3/"
  },
  "likes_flavor": {
    "name": "sour",
    "url": "https://pokeapi.co/api/v2/berry-flavor/5/"
  },
  "hates_flavor": {
    "name": "spicy",
    "url": "https://pokeapi.co/api/v2/berry-flavor/1/"
  },
  "pokeathlon_stat_changes": [
    {
      "max_change": -2,
      "pokeathlon_stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/pokeathlon-stat/1/"
      }
    }
  ],
  "move_battle_style_preferences": [
    {
      "low_hp_preference": 32,
      "high_hp_preference": 30,
      "move_battle_style": {
        "name": "attack",
        "url": "https://pokeapi.co/api/v2/move-battle-style/1/"
      }
    }
  ],
  "names": [
    {
      "name": "がんばりや",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/1/"
      }
    }
  ]
}
```
View raw JSON (1.031kB,48lines)

#### Nature (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringdecreased_stat
The stat decreased by 10% in Pokémon with this nature.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Stat](https://pokeapi.co/docs/v2#stat))increased_stat
The stat increased by 10% in Pokémon with this nature.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Stat](https://pokeapi.co/docs/v2#stat))hates_flavor
The flavor hated by Pokémon with this nature.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([BerryFlavor](https://pokeapi.co/docs/v2#berryflavor))likes_flavor
The flavor liked by Pokémon with this nature.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([BerryFlavor](https://pokeapi.co/docs/v2#berryflavor))pokeathlon_stat_changes
A list of Pokéathlon stats this nature effects and how much it effects them.
list[NatureStatChange](https://pokeapi.co/docs/v2#naturestatchange)move_battle_style_preferences
A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent.
list[MoveBattleStylePreference](https://pokeapi.co/docs/v2#movebattlestylepreference)names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)

#### NatureStatChange (type)

NameDescriptionTypemax_change
The amount of change.
integerpokeathlon_stat
The stat being affected.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokeathlonStat](https://pokeapi.co/docs/v2#pokeathlonstat))

#### MoveBattleStylePreference (type)

NameDescriptionTypelow_hp_preference
Chance of using the move, in percent, if HP is under one half.
integerhigh_hp_preference
Chance of using the move, in percent, if HP is over one half.
integermove_battle_style
The move battle style.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([MoveBattleStyle](https://pokeapi.co/docs/v2#movebattlestyle))

### Pokeathlon Stats (endpoint)

Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/pokeathlon-stat/{id or name}/

```
{
  "id": 1,
  "name": "speed",
  "affecting_natures": {
    "increase": [
      {
        "max_change": 2,
        "nature": {
          "name": "timid",
          "url": "https://pokeapi.co/api/v2/nature/5/"
        }
      }
    ],
    "decrease": [
      {
        "max_change": -1,
        "nature": {
          "name": "hardy",
          "url": "https://pokeapi.co/api/v2/nature/1/"
        }
      }
    ]
  },
  "names": [
    {
      "name": "Speed",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ]
}
```
View raw JSON (0.576kB,33lines)

#### PokeathlonStat (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringnames
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)affecting_natures
A detail of natures which affect this Pokéathlon stat positively or negatively.
[NaturePokeathlonStatAffectSets](https://pokeapi.co/docs/v2#naturepokeathlonstataffectsets)

#### NaturePokeathlonStatAffectSets (type)

NameDescriptionTypeincrease
A list of natures and how they change the referenced Pokéathlon stat.
list[NaturePokeathlonStatAffect](https://pokeapi.co/docs/v2#naturepokeathlonstataffect)decrease
A list of natures and how they change the referenced Pokéathlon stat.
list[NaturePokeathlonStatAffect](https://pokeapi.co/docs/v2#naturepokeathlonstataffect)

#### NaturePokeathlonStatAffect (type)

NameDescriptionTypemax_change
The maximum amount of change to the referenced Pokéathlon stat.
integernature
The nature causing the change.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Nature](https://pokeapi.co/docs/v2#nature))

### Pokemon (endpoint)

Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon.  Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See Bulbapedia for greater detail.

GET https://pokeapi.co/api/v2/pokemon/{id or name}/

```
{
  "id": 35,
  "name": "clefairy",
  "base_experience": 113,
  "height": 6,
  "is_default": true,
  "order": 56,
  "weight": 75,
  "abilities": [
    {
      "is_hidden": true,
      "slot": 3,
      "ability": {
        "name": "friend-guard",
        "url": "https://pokeapi.co/api/v2/ability/132/"
      }
    }
  ],
  "forms": [
    {
      "name": "clefairy",
      "url": "https://pokeapi.co/api/v2/pokemon-form/35/"
    }
  ],
  "game_indices": [
    {
      "game_index": 35,
      "version": {
        "name": "white-2",
        "url": "https://pokeapi.co/api/v2/version/22/"
      }
    }
  ],
  "held_items": [
    {
      "item": {
        "name": "moon-stone",
        "url": "https://pokeapi.co/api/v2/item/81/"
      },
      "version_details": [
        {
          "rarity": 5,
          "version": {
            "name": "ruby",
            "url": "https://pokeapi.co/api/v2/version/7/"
          }
        }
      ]
    }
  ],
  "location_area_encounters": "/api/v2/pokemon/35/encounters",
  "moves": [
    {
      "move": {
        "name": "pound",
        "url": "https://pokeapi.co/api/v2/move/1/"
      },
      "version_group_details": [
        {
          "level_learned_at": 1,
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          },
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          }
        }
      ]
    }
  ],
  "species": {
    "name": "clefairy",
    "url": "https://pokeapi.co/api/v2/pokemon-species/35/"
  },
  "sprites": {
    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
    "back_female": null,
    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/35.png",
    "back_shiny_female": null,
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    "front_female": null,
    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/35.png",
    "front_shiny_female": null,
    "other": {
      "dream_world": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg",
        "front_female": null
      },
      "home": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/35.png",
        "front_shiny_female": null
      },
      "official-artwork": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/35.png"
      },
      "showdown": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/35.gif",
        "back_female": null,
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/35.gif",
        "back_shiny_female": null,
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/35.gif",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/35.gif",
        "front_shiny_female": null
      }
    },
    "versions": {
      "generation-i": {
        "red-blue": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/35.png",
          "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/35.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/35.png",
          "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/35.png"
        },
        "yellow": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/35.png",
          "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/35.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/35.png",
          "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/35.png"
        }
      },
      "generation-ii": {
        "crystal": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/35.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/35.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/35.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/35.png"
        },
        "gold": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/35.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/35.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/35.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/35.png"
        },
        "silver": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/35.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/35.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/35.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/35.png"
        }
      },
      "generation-iii": {
        "emerald": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/35.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/35.png"
        },
        "firered-leafgreen": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/35.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/35.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/35.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/35.png"
        },
        "ruby-sapphire": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/35.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/35.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/35.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/35.png"
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/35.png",
          "back_female": null,
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/35.png",
          "back_shiny_female": null,
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/35.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/35.png",
          "front_shiny_female": null
        },
        "heartgold-soulsilver": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/35.png",
          "back_female": null,
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/35.png",
          "back_shiny_female": null,
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/35.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/35.png",
          "front_shiny_female": null
        },
        "platinum": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/35.png",
          "back_female": null,
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/35.png",
          "back_shiny_female": null,
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/35.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/35.png",
          "front_shiny_female": null
        }
      },
      "generation-v": {
        "black-white": {
          "animated": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/35.gif",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/35.gif",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/35.gif",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/35.gif",
            "front_shiny_female": null
          },
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/35.png",
          "back_female": null,
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/35.png",
          "back_shiny_female": null,
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/35.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/35.png",
          "front_shiny_female": null
        }
      },
      "generation-vi": {
        "omegaruby-alphasapphire": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/35.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/35.png",
          "front_shiny_female": null
        },
        "x-y": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/35.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/35.png",
          "front_shiny_female": null
        }
      },
      "generation-vii": {
        "icons": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/35.png",
          "front_female": null
        },
        "ultra-sun-ultra-moon": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/35.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/35.png",
          "front_shiny_female": null
        }
      },
      "generation-viii": {
        "icons": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/35.png",
          "front_female": null
        }
      }
    }
  },
  "cries": {
    "latest": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/35.ogg",
    "legacy": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/35.ogg"
  },
  "stats": [
    {
      "base_stat": 35,
      "effort": 0,
      "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "fairy",
        "url": "https://pokeapi.co/api/v2/type/18/"
      }
    }
  ],
  "past_types": [
    {
      "generation": {
        "name": "generation-v",
        "url": "https://pokeapi.co/api/v2/generation/5/"
      },
      "types": [
        {
          "slot": 1,
          "type": {
            "name": "normal",
            "url": "https://pokeapi.co/api/v2/type/1/"
          }
        }
      ]
    }
  ]
}
```
View raw JSON (15.073kB,293lines)

#### Pokemon (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringbase_experience
The base experience gained for defeating this Pokémon.
integerheight
The height of this Pokémon in decimetres.
integeris_default
Set for exactly one Pokémon used as the default for each species.
booleanorder
Order for sorting. Almost national order, except families are grouped together.
integerweight
The weight of this Pokémon in hectograms.
integerabilities
A list of abilities this Pokémon could potentially have.
list[PokemonAbility](https://pokeapi.co/docs/v2#pokemonability)forms
A list of forms this Pokémon can take on.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonForm](https://pokeapi.co/docs/v2#pokemonform))game_indices
A list of game indices relevent to Pokémon item by generation.
list[VersionGameIndex](https://pokeapi.co/docs/v2#versiongameindex)held_items
A list of items this Pokémon may be holding when encountered.
list[PokemonHeldItem](https://pokeapi.co/docs/v2#pokemonhelditem)location_area_encounters
A link to a list of location areas, as well as encounter details pertaining to specific versions.
stringmoves
A list of moves along with learn methods and level details pertaining to specific version groups.
list[PokemonMove](https://pokeapi.co/docs/v2#pokemonmove)past_types
A list of details showing types this pokémon had in previous generations
list[PokemonTypePast](https://pokeapi.co/docs/v2#pokemontypepast)sprites
A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at PokeAPI/sprites
[PokemonSprites](https://pokeapi.co/docs/v2#pokemonsprites)cries
A set of cries used to depict this Pokémon in the game. A visual representation of the various cries can be found at PokeAPI/cries
[PokemonCries](https://pokeapi.co/docs/v2#pokemoncries)species
The species this Pokémon belongs to.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonSpecies](https://pokeapi.co/docs/v2#pokemonspecies))stats
A list of base stat values for this Pokémon.
list[PokemonStat](https://pokeapi.co/docs/v2#pokemonstat)types
A list of details showing types this Pokémon has.
list[PokemonType](https://pokeapi.co/docs/v2#pokemontype)

#### PokemonAbility (type)

NameDescriptionTypeis_hidden
Whether or not this is a hidden ability.
booleanslot
The slot this ability occupies in this Pokémon species.
integerability
The ability the Pokémon may have.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Ability](https://pokeapi.co/docs/v2#ability))

#### PokemonType (type)

NameDescriptionTypeslot
The order the Pokémon's types are listed in.
integertype
The type the referenced Pokémon has.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Type](https://pokeapi.co/docs/v2#type))

#### PokemonFormType (type)

NameDescriptionTypeslot
The order the Pokémon's types are listed in.
integertype
The type the referenced Form has.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Type](https://pokeapi.co/docs/v2#type))

#### PokemonTypePast (type)

NameDescriptionTypegeneration
The last generation in which the referenced pokémon had the listed types.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Generation](https://pokeapi.co/docs/v2#generation))types
The types the referenced pokémon had up to and including the listed generation.
list[PokemonType](https://pokeapi.co/docs/v2#pokemontype)

#### PokemonHeldItem (type)

NameDescriptionTypeitem
The item the referenced Pokémon holds.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Item](https://pokeapi.co/docs/v2#item))version_details
The details of the different versions in which the item is held.
list[PokemonHeldItemVersion](https://pokeapi.co/docs/v2#pokemonhelditemversion)

#### PokemonHeldItemVersion (type)

NameDescriptionTypeversion
The version in which the item is held.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Version](https://pokeapi.co/docs/v2#version))rarity
How often the item is held.
integer

#### PokemonMove (type)

NameDescriptionTypemove
The move the Pokémon can learn.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Move](https://pokeapi.co/docs/v2#move))version_group_details
The details of the version in which the Pokémon can learn the move.
list[PokemonMoveVersion](https://pokeapi.co/docs/v2#pokemonmoveversion)

#### PokemonMoveVersion (type)

NameDescriptionTypemove_learn_method
The method by which the move is learned.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([MoveLearnMethod](https://pokeapi.co/docs/v2#movelearnmethod))version_group
The version group in which the move is learned.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([VersionGroup](https://pokeapi.co/docs/v2#versiongroup))level_learned_at
The minimum level to learn the move.
integer

#### PokemonStat (type)

NameDescriptionTypestat
The stat the Pokémon has.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Stat](https://pokeapi.co/docs/v2#stat))effort
The effort points (EV) the Pokémon has in the stat.
integerbase_stat
The base value of the stat.
integer

#### PokemonSprites (type)

NameDescriptionTypefront_default
The default depiction of this Pokémon from the front in battle.
stringfront_shiny
The shiny depiction of this Pokémon from the front in battle.
stringfront_female
The female depiction of this Pokémon from the front in battle.
stringfront_shiny_female
The shiny female depiction of this Pokémon from the front in battle.
stringback_default
The default depiction of this Pokémon from the back in battle.
stringback_shiny
The shiny depiction of this Pokémon from the back in battle.
stringback_female
The female depiction of this Pokémon from the back in battle.
stringback_shiny_female
The shiny female depiction of this Pokémon from the back in battle.
string

#### PokemonCries (type)

NameDescriptionTypelatest
The latest depiction of this Pokémon's cry.
stringlegacy
The legacy depiction of this Pokémon's cry.
string

### Pokemon Location Areas (endpoint)

Pokémon Location Areas are ares where Pokémon can be found.

GET https://pokeapi.co/api/v2/pokemon/{id or name}/encounters

```
[
  {
    "location_area": {
      "name": "kanto-route-2-south-towards-viridian-city",
      "url": "https://pokeapi.co/api/v2/location-area/296/"
    },
    "version_details": [
      {
        "max_chance": 10,
        "encounter_details": [
          {
            "min_level": 7,
            "max_level": 7,
            "condition_values": [
              {
                "name": "time-morning",
                "url": "https://pokeapi.co/api/v2/encounter-condition-value/3/"
              }
            ],
            "chance": 5,
            "method": {
              "name": "walk",
              "url": "https://pokeapi.co/api/v2/encounter-method/1/"
            }
          }
        ],
        "version": {
          "name": "heartgold",
          "url": "https://pokeapi.co/api/v2/version/15/"
        }
      }
    ]
  }
]
```
View raw JSON (0.837kB,34lines)

#### LocationAreaEncounter (type)

NameDescriptionTypelocation_area
The location area the referenced Pokémon can be encountered in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([LocationArea](https://pokeapi.co/docs/v2#locationarea))version_details
A list of versions and encounters with the referenced Pokémon that might happen.
list[VersionEncounterDetail](https://pokeapi.co/docs/v2#versionencounterdetail)

### Pokemon Colors (endpoint)

Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.

GET https://pokeapi.co/api/v2/pokemon-color/{id or name}/

```
{
  "id": 1,
  "name": "black",
  "names": [
    {
      "name": "é»’ã�„",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/1/"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "snorlax",
      "url": "https://pokeapi.co/api/v2/pokemon-species/143/"
    }
  ]
}
```
View raw JSON (0.326kB,19lines)

#### PokemonColor (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringnames
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)pokemon_species
A list of the Pokémon species that have this color.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonSpecies](https://pokeapi.co/docs/v2#pokemonspecies))

### Pokemon Forms (endpoint)

Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.

GET https://pokeapi.co/api/v2/pokemon-form/{id or name}/

```
{
  "id": 10041,
  "name": "arceus-bug",
  "order": 631,
  "form_order": 7,
  "is_default": false,
  "is_battle_only": false,
  "is_mega": false,
  "form_name": "bug",
  "pokemon": {
    "name": "arceus",
    "url": "https://pokeapi.co/api/v2/pokemon/493/"
  },
  "sprites": {
    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/493-bug.png",
    "back_female": null,
    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/493-bug.png",
    "back_shiny_female": null,
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493-bug.png",
    "front_female": null,
    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/493-bug.png",
    "front_shiny_female": null
  },
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ],
  "version_group": {
    "name": "diamond-pearl",
    "url": "https://pokeapi.co/api/v2/version-group/8/"
  }
}
```
View raw JSON (1.103kB,37lines)

#### PokemonForm (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringorder
The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name.
integerform_order
The order in which forms should be sorted within a species' forms.
integeris_default
True for exactly one form used as the default for each Pokémon.
booleanis_battle_only
Whether or not this form can only happen during battle.
booleanis_mega
Whether or not this form requires mega evolution.
booleanform_name
The name of this form.
stringpokemon
The Pokémon that can take on this form.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Pokemon](https://pokeapi.co/docs/v2#pokemon))types
A list of details showing types this Pokémon form has.
list[PokemonFormType](https://pokeapi.co/docs/v2#pokemonformtype)sprites
A set of sprites used to depict this Pokémon form in the game.
[PokemonFormSprites](https://pokeapi.co/docs/v2#pokemonformsprites)version_group
The version group this Pokémon form was introduced in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([VersionGroup](https://pokeapi.co/docs/v2#versiongroup))names
The form specific full name of this Pokémon form, or empty if the form does not have a specific name.
list[Name](https://pokeapi.co/docs/v2#name)form_names
The form specific form name of this Pokémon form, or empty if the form does not have a specific name.
list[Name](https://pokeapi.co/docs/v2#name)

#### PokemonFormSprites (type)

NameDescriptionTypefront_default
The default depiction of this Pokémon form from the front in battle.
stringfront_shiny
The shiny depiction of this Pokémon form from the front in battle.
stringback_default
The default depiction of this Pokémon form from the back in battle.
stringback_shiny
The shiny depiction of this Pokémon form from the back in battle.
string

### Pokemon Habitats (endpoint)

Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.

GET https://pokeapi.co/api/v2/pokemon-habitat/{id or name}/

```
{
  "id": 1,
  "name": "cave",
  "names": [
    {
      "name": "grottes",
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "zubat",
      "url": "https://pokeapi.co/api/v2/pokemon-species/41/"
    }
  ]
}
```
View raw JSON (0.315kB,19lines)

#### PokemonHabitat (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringnames
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)pokemon_species
A list of the Pokémon species that can be found in this habitat.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonSpecies](https://pokeapi.co/docs/v2#pokemonspecies))

### Pokemon Shapes (endpoint)

Shapes used for sorting Pokémon in a Pokédex.

GET https://pokeapi.co/api/v2/pokemon-shape/{id or name}/

```
{
  "id": 1,
  "name": "ball",
  "awesome_names": [
    {
      "awesome_name": "Pomaceous",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "names": [
    {
      "name": "Ball",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "shellder",
      "url": "https://pokeapi.co/api/v2/pokemon-species/90/"
    }
  ]
}
```
View raw JSON (0.493kB,28lines)

#### PokemonShape (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringawesome_names
The "scientific" name of this Pokémon shape listed in different languages.
list[AwesomeName](https://pokeapi.co/docs/v2#awesomename)names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)pokemon_species
A list of the Pokémon species that have this shape.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonSpecies](https://pokeapi.co/docs/v2#pokemonspecies))

#### AwesomeName (type)

NameDescriptionTypeawesome_name
The localized "scientific" name for an API resource in a specific language.
stringlanguage
The language this "scientific" name is in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Language](https://pokeapi.co/docs/v2#language))

### Pokemon Species (endpoint)

A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.

GET https://pokeapi.co/api/v2/pokemon-species/{id or name}/

```
{
  "id": 413,
  "name": "wormadam",
  "order": 441,
  "gender_rate": 8,
  "capture_rate": 45,
  "base_happiness": 70,
  "is_baby": false,
  "is_legendary": false,
  "is_mythical": false,
  "hatch_counter": 15,
  "has_gender_differences": false,
  "forms_switchable": false,
  "growth_rate": {
    "name": "medium",
    "url": "https://pokeapi.co/api/v2/growth-rate/2/"
  },
  "pokedex_numbers": [
    {
      "entry_number": 45,
      "pokedex": {
        "name": "kalos-central",
        "url": "https://pokeapi.co/api/v2/pokedex/12/"
      }
    }
  ],
  "egg_groups": [
    {
      "name": "bug",
      "url": "https://pokeapi.co/api/v2/egg-group/3/"
    }
  ],
  "color": {
    "name": "gray",
    "url": "https://pokeapi.co/api/v2/pokemon-color/4/"
  },
  "shape": {
    "name": "squiggle",
    "url": "https://pokeapi.co/api/v2/pokemon-shape/2/"
  },
  "evolves_from_species": {
    "name": "burmy",
    "url": "https://pokeapi.co/api/v2/pokemon-species/412/"
  },
  "evolution_chain": {
    "url": "https://pokeapi.co/api/v2/evolution-chain/213/"
  },
  "habitat": null,
  "generation": {
    "name": "generation-iv",
    "url": "https://pokeapi.co/api/v2/generation/4/"
  },
  "names": [
    {
      "name": "Wormadam",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "flavor_text_entries": [
    {
      "flavor_text": "When the bulb on\nits back grows\nlarge, it appears\fto lose the\nability to stand\non its hind legs.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
      }
    }
  ],
  "form_descriptions": [
    {
      "description": "Forms have different stats and movepools.  During evolution, Burmy's current cloak becomes Wormadam's form, and can no longer be changed.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "genera": [
    {
      "genus": "Bagworm",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ],
  "varieties": [
    {
      "is_default": true,
      "pokemon": {
        "name": "wormadam-plant",
        "url": "https://pokeapi.co/api/v2/pokemon/413/"
      }
    }
  ]
}
```
View raw JSON (2.373kB,102lines)

#### PokemonSpecies (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringorder
The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage.
integergender_rate
The chance of this Pokémon being female, in eighths; or -1 for genderless.
integercapture_rate
The base capture rate; up to 255. The higher the number, the easier the catch.
integerbase_happiness
The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon.
integeris_baby
Whether or not this is a baby Pokémon.
booleanis_legendary
Whether or not this is a legendary Pokémon.
booleanis_mythical
Whether or not this is a mythical Pokémon.
booleanhatch_counter
Initial hatch counter: one must walk Y × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's. Y varies per generation. In Generations II, III, and VII, Egg cycles are 256 steps long. In Generation IV, Egg cycles are 255 steps long. In Pokémon Brilliant Diamond and Shining Pearl, Egg cycles are also 255 steps long, but are shorter on special dates. In Generations V and VI, Egg cycles are 257 steps long. In Pokémon Sword and Shield, and in Pokémon Scarlet and Violet, Egg cycles are 128 steps long.
integerhas_gender_differences
Whether or not this Pokémon has visual gender differences.
booleanforms_switchable
Whether or not this Pokémon has multiple forms and can switch between them.
booleangrowth_rate
The rate at which this Pokémon species gains levels.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([GrowthRate](https://pokeapi.co/docs/v2#growthrate))pokedex_numbers
A list of Pokedexes and the indexes reserved within them for this Pokémon species.
list[PokemonSpeciesDexEntry](https://pokeapi.co/docs/v2#pokemonspeciesdexentry)egg_groups
A list of egg groups this Pokémon species is a member of.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([EggGroup](https://pokeapi.co/docs/v2#egggroup))color
The color of this Pokémon for Pokédex search.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonColor](https://pokeapi.co/docs/v2#pokemoncolor))shape
The shape of this Pokémon for Pokédex search.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonShape](https://pokeapi.co/docs/v2#pokemonshape))evolves_from_species
The Pokémon species that evolves into this Pokemon_species.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonSpecies](https://pokeapi.co/docs/v2#pokemonspecies))evolution_chain
The evolution chain this Pokémon species is a member of.
[APIResource](https://pokeapi.co/docs/v2#apiresource)([EvolutionChain](https://pokeapi.co/docs/v2#evolutionchain))habitat
The habitat this Pokémon species can be encountered in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PokemonHabitat](https://pokeapi.co/docs/v2#pokemonhabitat))generation
The generation this Pokémon species was introduced in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Generation](https://pokeapi.co/docs/v2#generation))names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)pal_park_encounters
A list of encounters that can be had with this Pokémon species in pal park.
list[PalParkEncounterArea](https://pokeapi.co/docs/v2#palparkencounterarea)flavor_text_entries
A list of flavor text entries for this Pokémon species.
list[FlavorText](https://pokeapi.co/docs/v2#flavortext)form_descriptions
Descriptions of different forms Pokémon take on within the Pokémon species.
list[Description](https://pokeapi.co/docs/v2#description)genera
The genus of this Pokémon species listed in multiple languages.
list[Genus](https://pokeapi.co/docs/v2#genus)varieties
A list of the Pokémon that exist within this Pokémon species.
list[PokemonSpeciesVariety](https://pokeapi.co/docs/v2#pokemonspeciesvariety)

#### Genus (type)

NameDescriptionTypegenus
The localized genus for the referenced Pokémon species
stringlanguage
The language this genus is in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Language](https://pokeapi.co/docs/v2#language))

#### PokemonSpeciesDexEntry (type)

NameDescriptionTypeentry_number
The index number within the Pokédex.
integerpokedex
The Pokédex the referenced Pokémon species can be found in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Pokedex](https://pokeapi.co/docs/v2#pokedex))

#### PalParkEncounterArea (type)

NameDescriptionTypebase_score
The base score given to the player when the referenced Pokémon is caught during a pal park run.
integerrate
The base rate for encountering the referenced Pokémon in this pal park area.
integerarea
The pal park area where this encounter happens.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([PalParkArea](https://pokeapi.co/docs/v2#palparkarea))

#### PokemonSpeciesVariety (type)

NameDescriptionTypeis_default
Whether this variety is the default variety.
booleanpokemon
The Pokémon variety.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Pokemon](https://pokeapi.co/docs/v2#pokemon))

### Stats (endpoint)

Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.

GET https://pokeapi.co/api/v2/stat/{id or name}/

```
{
  "id": 2,
  "name": "attack",
  "game_index": 2,
  "is_battle_only": false,
  "affecting_moves": {
    "increase": [
      {
        "change": 2,
        "move": {
          "name": "swords-dance",
          "url": "https://pokeapi.co/api/v2/move/14/"
        }
      }
    ],
    "decrease": [
      {
        "change": -1,
        "move": {
          "name": "growl",
          "url": "https://pokeapi.co/api/v2/move/45/"
        }
      }
    ]
  },
  "affecting_natures": {
    "increase": [
      {
        "name": "lonely",
        "url": "https://pokeapi.co/api/v2/nature/6/"
      }
    ],
    "decrease": [
      {
        "name": "bold",
        "url": "https://pokeapi.co/api/v2/nature/2/"
      }
    ]
  },
  "characteristics": [
    {
      "url": "https://pokeapi.co/api/v2/characteristic/2/"
    }
  ],
  "move_damage_class": {
    "name": "physical",
    "url": "https://pokeapi.co/api/v2/move-damage-class/2/"
  },
  "names": [
    {
      "name": "ã�“ã�†ã�’ã��",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/1/"
      }
    }
  ]
}
```
View raw JSON (1.116kB,58lines)

#### Stat (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringgame_index
ID the games use for this stat.
integeris_battle_only
Whether this stat only exists within a battle.
booleanaffecting_moves
A detail of moves which affect this stat positively or negatively.
[MoveStatAffectSets](https://pokeapi.co/docs/v2#movestataffectsets)affecting_natures
A detail of natures which affect this stat positively or negatively.
[NatureStatAffectSets](https://pokeapi.co/docs/v2#naturestataffectsets)characteristics
A list of characteristics that are set on a Pokémon when its highest base stat is this stat.
list[APIResource](https://pokeapi.co/docs/v2#apiresource)([Characteristic](https://pokeapi.co/docs/v2#characteristic))move_damage_class
The class of damage this stat is directly related to.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([MoveDamageClass](https://pokeapi.co/docs/v2#movedamageclass))names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)

#### MoveStatAffectSets (type)

NameDescriptionTypeincrease
A list of moves and how they change the referenced stat.
list[MoveStatAffect](https://pokeapi.co/docs/v2#movestataffect)decrease
A list of moves and how they change the referenced stat.
list[MoveStatAffect](https://pokeapi.co/docs/v2#movestataffect)

#### MoveStatAffect (type)

NameDescriptionTypechange
The maximum amount of change to the referenced stat.
integermove
The move causing the change.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Move](https://pokeapi.co/docs/v2#move))

#### NatureStatAffectSets (type)

NameDescriptionTypeincrease
A list of natures and how they change the referenced stat.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Nature](https://pokeapi.co/docs/v2#nature))decrease
A list of nature sand how they change the referenced stat.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Nature](https://pokeapi.co/docs/v2#nature))

### Types (endpoint)

Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.

GET https://pokeapi.co/api/v2/type/{id or name}/

```
{
  "id": 5,
  "name": "ground",
  "damage_relations": {
    "no_damage_to": [
      {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    ],
    "half_damage_to": [
      {
        "name": "bug",
        "url": "https://pokeapi.co/api/v2/type/7/"
      }
    ],
    "double_damage_to": [
      {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    ],
    "no_damage_from": [
      {
        "name": "electric",
        "url": "https://pokeapi.co/api/v2/type/13/"
      }
    ],
    "half_damage_from": [
      {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    ],
    "double_damage_from": [
      {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    ]
  },
  "past_damage_relations": [
    {
      "generation": {
        "name": "generation-v",
        "url": "https://pokeapi.co/api/v2/generation/5/"
      },
      "damage_relations": {
        "no_damage_to": [
          {
            "name": "normal",
            "url": "https://pokeapi.co/api/v2/type/1/"
          }
        ],
        "half_damage_to": [
          {
            "name": "steel",
            "url": "https://pokeapi.co/api/v2/type/9/"
          }
        ],
        "double_damage_to": [
          {
            "name": "ghost",
            "url": "https://pokeapi.co/api/v2/type/8/"
          }
        ],
        "no_damage_from": [
          {
            "name": "normal",
            "url": "https://pokeapi.co/api/v2/type/1/"
          }
        ],
        "half_damage_from": [
          {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/type/4/"
          }
        ],
        "double_damage_from": [
          {
            "name": "ghost",
            "url": "https://pokeapi.co/api/v2/type/8/"
          }
        ]
      }
    }
  ],
  "game_indices": [
    {
      "game_index": 4,
      "generation": {
        "name": "generation-i",
        "url": "https://pokeapi.co/api/v2/generation/1/"
      }
    }
  ],
  "generation": {
    "name": "generation-i",
    "url": "https://pokeapi.co/api/v2/generation/1/"
  },
  "move_damage_class": {
    "name": "physical",
    "url": "https://pokeapi.co/api/v2/move-damage-class/2/"
  },
  "names": [
    {
      "name": "ã�˜ã‚�ã‚“",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/1/"
      }
    }
  ],
  "pokemon": [
    {
      "slot": 1,
      "pokemon": {
        "name": "sandshrew",
        "url": "https://pokeapi.co/api/v2/pokemon/27/"
      }
    }
  ],
  "moves": [
    {
      "name": "sand-attack",
      "url": "https://pokeapi.co/api/v2/move/28/"
    }
  ]
}
```
View raw JSON (2.743kB,129lines)

#### Type (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringdamage_relations
A detail of how effective this type is toward others and vice versa.
[TypeRelations](https://pokeapi.co/docs/v2#typerelations)past_damage_relations
A list of details of how effective this type was toward others and vice versa in previous generations
list[TypeRelationsPast](https://pokeapi.co/docs/v2#typerelationspast)([Type](https://pokeapi.co/docs/v2#type))game_indices
A list of game indices relevent to this item by generation.
list[GenerationGameIndex](https://pokeapi.co/docs/v2#generationgameindex)generation
The generation this type was introduced in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Generation](https://pokeapi.co/docs/v2#generation))move_damage_class
The class of damage inflicted by this type.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([MoveDamageClass](https://pokeapi.co/docs/v2#movedamageclass))names
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)pokemon
A list of details of Pokémon that have this type.
list[TypePokemon](https://pokeapi.co/docs/v2#typepokemon)moves
A list of moves that have this type.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Move](https://pokeapi.co/docs/v2#move))

#### TypePokemon (type)

NameDescriptionTypeslot
The order the Pokémon's types are listed in.
integerpokemon
The Pokémon that has the referenced type.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Pokemon](https://pokeapi.co/docs/v2#pokemon))

#### TypeRelations (type)

NameDescriptionTypeno_damage_to
A list of types this type has no effect on.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Type](https://pokeapi.co/docs/v2#type))half_damage_to
A list of types this type is not very effect against.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Type](https://pokeapi.co/docs/v2#type))double_damage_to
A list of types this type is very effect against.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Type](https://pokeapi.co/docs/v2#type))no_damage_from
A list of types that have no effect on this type.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Type](https://pokeapi.co/docs/v2#type))half_damage_from
A list of types that are not very effective against this type.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Type](https://pokeapi.co/docs/v2#type))double_damage_from
A list of types that are very effective against this type.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Type](https://pokeapi.co/docs/v2#type))

#### TypeRelationsPast (type)

NameDescriptionTypegeneration
The last generation in which the referenced type had the listed damage relations
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Generation](https://pokeapi.co/docs/v2#generation))damage_relations
The damage relations the referenced type had up to and including the listed generation
[TypeRelations](https://pokeapi.co/docs/v2#typerelations)

## Utility (group)

### Languages (endpoint)

Languages for translations of API resource information.

GET https://pokeapi.co/api/v2/language/{id or name}/

```
{
  "id": 1,
  "name": "ja",
  "official": true,
  "iso639": "ja",
  "iso3166": "jp",
  "names": [
    {
      "name": "Japanese",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    }
  ]
}
```
View raw JSON (0.247kB,16lines)

#### Language (type)

NameDescriptionTypeid
The identifier for this resource.
integername
The name for this resource.
stringofficial
Whether or not the games are published in this language.
booleaniso639
The two-letter code of the country where this language is spoken. Note that it is not unique.
stringiso3166
The two-letter code of the language. Note that it is not unique.
stringnames
The name of this resource listed in different languages.
list[Name](https://pokeapi.co/docs/v2#name)

### Common Models

#### APIResource (type)

NameDescriptionTypeurl
The URL of the referenced resource.
string

#### Description (type)

NameDescriptionTypedescription
The localized description for an API resource in a specific language.
stringlanguage
The language this name is in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Language](https://pokeapi.co/docs/v2#language))

#### Effect (type)

NameDescriptionTypeeffect
The localized effect text for an API resource in a specific language.
stringlanguage
The language this effect is in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Language](https://pokeapi.co/docs/v2#language))

#### Encounter (type)

NameDescriptionTypemin_level
The lowest level the Pokémon could be encountered at.
integermax_level
The highest level the Pokémon could be encountered at.
integercondition_values
A list of condition values that must be in effect for this encounter to occur.
list[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([EncounterConditionValue](https://pokeapi.co/docs/v2#encounterconditionvalue))chance
Percent chance that this encounter will occur.
integermethod
The method by which this encounter happens.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([EncounterMethod](https://pokeapi.co/docs/v2#encountermethod))

#### FlavorText (type)

NameDescriptionTypeflavor_text
The localized flavor text for an API resource in a specific language. Note that this text is left unprocessed as it is found in game files. This means that it contains special characters that one might want to replace with their visible decodable version. Please check out this issue to find out more.
stringlanguage
The language this name is in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Language](https://pokeapi.co/docs/v2#language))version
The game version this flavor text is extracted from.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Version](https://pokeapi.co/docs/v2#version))

#### GenerationGameIndex (type)

NameDescriptionTypegame_index
The internal id of an API resource within game data.
integergeneration
The generation relevent to this game index.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Generation](https://pokeapi.co/docs/v2#generation))

#### MachineVersionDetail (type)

NameDescriptionTypemachine
The machine that teaches a move from an item.
[APIResource](https://pokeapi.co/docs/v2#apiresource%20)([Machine](https://pokeapi.co/docs/v2#machine))version_group
The version group of this specific machine.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([VersionGroup](https://pokeapi.co/docs/v2#versiongroup))

#### Name (type)

NameDescriptionTypename
The localized name for an API resource in a specific language.
stringlanguage
The language this name is in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Language](https://pokeapi.co/docs/v2#language))

#### NamedAPIResource (type)

NameDescriptionTypename
The name of the referenced resource.
stringurl
The URL of the referenced resource.
string

#### VerboseEffect (type)

NameDescriptionTypeeffect
The localized effect text for an API resource in a specific language.
stringshort_effect
The localized effect text in brief.
stringlanguage
The language this effect is in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Language](https://pokeapi.co/docs/v2#language))

#### VersionEncounterDetail (type)

NameDescriptionTypeversion
The game version this encounter happens in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Version](https://pokeapi.co/docs/v2#version))max_chance
The total percentage of all encounter potential.
integerencounter_details
A list of encounters and their specifics.
list[Encounter](https://pokeapi.co/docs/v2#encounter)

#### VersionGameIndex (type)

NameDescriptionTypegame_index
The internal id of an API resource within game data.
integerversion
The version relevent to this game index.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Version](https://pokeapi.co/docs/v2#version))

#### VersionGroupFlavorText (type)

NameDescriptionTypetext
The localized name for an API resource in a specific language.
stringlanguage
The language this name is in.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([Language](https://pokeapi.co/docs/v2#language))version_group
The version group which uses this flavor text.
[NamedAPIResource](https://pokeapi.co/docs/v2#namedapiresource)([VersionGroup](https://pokeapi.co/docs/v2#versiongroup))
debugger eval code:92:17
