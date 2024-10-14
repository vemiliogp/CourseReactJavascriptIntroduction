import heroes, { owners } from "../data/heroes";

// console.log(owners);

export const getHeroById = (id) => heroes.find((hero) => hero.id === id);

// console.log(getHeroById(2));

export const getHeroesByOwner = (owner) =>
  heroes.filter((hero) => hero.owner === owner);

// console.log(getHeroesByOwner("Marvel"));
