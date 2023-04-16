const nickName = "Timmy"; // Camel casing
const firstName = "Timothy"; //camel casing

// Add user
const userName = nickName || firstName ||""

console.log(`Good Morning ${(userName)}!`);