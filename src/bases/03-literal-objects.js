const person = {
    name: "Tony",
    lastName: "Stark",
    age: 45,
    address: {
      city: "New York",
      zip: 55443322,
      lat: 14.3232,
      lng: 34.9233,
    },
  };
  
  // console.table(person);
  console.log(person);
  
  const person2 = { ...person };
  person2.name = "Peter";
  
  console.log(person);
  console.log(person2);
  