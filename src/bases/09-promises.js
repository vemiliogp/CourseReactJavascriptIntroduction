import { getHeroById } from "./08-imports-exports";

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const hero = getHeroById(2);
//     resolve(hero);
//     // reject("Not found hero");
//   }, 2000);
// });

// promise
//   .then((hero) => {
//     console.log("Hero", hero);
//   })
//   .catch((error) => console.warn(error));

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (!hero) {
        reject("Not found hero");
      }
      resolve(hero);
    }, 2000);
  });
};

getHeroByIdAsync(4).then(console.log).catch(console.warn);
