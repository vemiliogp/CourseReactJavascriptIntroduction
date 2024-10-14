const characters = ["Satoru", "Megumi", "Itadori"];

const [, , p3] = characters;

console.log(p3);

const returnArray = () => {
  return ["ABC", 123];
};

const [letters, numbers] = returnArray();
console.log(letters, numbers);

const _useState = (value) => {
  return [
    value,
    () => {
      console.log(`Hello World`);
    },
  ];
};

const [name, setName] = _useState("Satoru");

console.log(name);
setName();
