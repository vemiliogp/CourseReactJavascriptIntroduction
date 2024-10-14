const greet = function (name) {
    return `Hello, ${name}`;
  };
  
  const greet2 = (name) => {
    return `Hello, ${name}`;
  };
  
  const greet3 = (name) => `Hello, ${name}`;
  const greet4 = () => `Hello World`;
  
  console.log(greet2("Megumi"));
  console.log(greet3("Mahito"));
  console.log(greet4());
  
  const getUser = () => ({
    uid: "ABC123",
    username: "Izuku",
  });
  
  console.log(getUser());
  
  // function getActiveUser(name) {
  //   return {
  //     uid: "ABC567",
  //     username: name,
  //   };
  // }
  
  const getActiveUser = (name) => ({
    uid: "ABC567",
    username: name,
  });
  
  const activeUser = getActiveUser("Katsuki");
  console.log(activeUser);
  