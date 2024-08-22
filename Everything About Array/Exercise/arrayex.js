const Candidate = [
  {
    name: "John",
    age: 25,
    gender: "male",
    weight: 70,
    height: 6,
    eyecolor: "black",
    city: "New York",
  },
  {
    name: "smith",
    age: 20,
    gender: "male",
    weight: 60,
    height: 5.7,
    eyecolor: "black",
    city: "New York",
  },
  {
    name: "Karl",
    gender: "female",
    age: 30,
    weight: 70,
    height: 6,
    eyecolor: "gray",
    city: "New York",
  },
  {
    name: "Max",
    age: 40,
    gender: "male",
    weight: 120,
    height: 5.8,
    eyecolor: "gray",
    city: "California",
  },
];
//Get an array of all name
const names = Candidate.map((ch) => ch.name);
//Get an array  of objects just name and height properties
const nameHeight = Candidate.map((ch) => ({
  name: ch.name,
  height: ch.height,
}));
//Get Total Height of all characters
const totalHeight = Candidate.reduce((acc, current) => acc + current.height, 0);
//Get characters with masss greater then 100
const heavy = Candidate.filter((ch) => ch.weight > 100);
//Get all male characters
const Male = Candidate.filter((ch) => ch.gender == "male");
//Sort by gender
const sortBygender = Candidate.sort((candidete1, chandidate2) => {
  if (candidete1.gender < chandidate2.gender) {
    return -1;
  }
  if (candidete1.gender > chandidate2.gender) {
    return 1;
  }
  return 0;
});
// Sort by name
const sortByName = Candidate.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
//Does every character have mass more than 40?
const everyHeavy = Candidate.every((ch) => ch.weight > 40);
//Does every character have blue eyes
const everyBlueEyes = Candidate.every((ch) => ch.eyecolor == "blue");
//Is ther at least one male female character?
const atLeastOne = Candidate.some((ch) => ch.gender == "female");
//Is there at least one character taller than 6?
const atLeastOneTaller = Candidate.some((ch) => ch.height > 6);
console.log(atLeastOneTaller);
