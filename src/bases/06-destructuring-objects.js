const person = {
    name: "Tony",
    age: 45,
    key: "Ironman",
    range: "Soldier",
  };
  
  // const { name, age, key } = person;
  
  // console.log(name);
  // console.log(age);
  // console.log(key);
  
  const _useContext = ({ key, name, age, range = "Captain" }) => {
    //   console.log(name, age, range);
  
    return {
      keyName: key,
      years: age,
      latLng: {
        lat: 14.1232,
        lng: 12.3232,
      },
    };
  };
  
  const { keyName, years, latLng: { lat, lng } } = _useContext(person);
  
  console.log(keyName, years);
  console.log(lat, lng);
  