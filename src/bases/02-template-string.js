const name = "Victor";
const lastName = "González";

// const fullName = name + " " + lastName;
const fullName = `${name}  ${lastName}`;

console.log(fullName);

function getGreeting(name) {
  return "Hello " + name;
}

console.log(`This is a text: ${getGreeting(name)}`);
