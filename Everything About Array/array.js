const num = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
//Push
num.push(10);
//Unshift
num.unshift(0);
//Pop
num.pop();
//Shift
num.shift();
//Change Number
num[3] = 10;
//indexo fMethod
const names = ["Bilal", "Ali", "Asad", "Muneer", "Uzair", "Faheem", "Bilal"];
names.indexOf("Bilal");
//Lastindexof
names.lastIndexOf("Bilal");
//Include
names.includes("Muneer"); //include mee ju b value haam dety han yee waha sy search karna shuru karta ha R yee true false mee answer dy ga
let channels = [
  {
    name: "CodeWithMuneer",
    subdcriber: 10000,
  },
  {
    name: "ALI E",
    subdcriber: 28000,
  },
  {
    name: "MuneerHussain",
    subdcriber: 100000,
  },
];
// console.log(channels.find((element) => element.name === "MuneerHussain"));
//==concat Method
let names1 = ["Bilal", "Ali", "Asad", "Muneer"];
let names2 = ["Uzair", "Faheem", "Bilal"];
// let names3 = names1.concat(names2);
// console.log(names3.slice(3, 5));
let names3 = [...names1, ...names2]; //spread operater
//Loops
//for loop
for (let i = 0; i < names.length; i++) {
  //   console.log(names[i]);
}
//for of loop
for (let name of names) {
  //   console.log(name);
}

//For each
names.forEach(function (name, index) {
  // console.log(name, index);
});
//Join
let Student = ["M", "U", "N", "E", "E", "R"];
// console.log(Student.join(""));
Student = Student.join("");
//Split
// console.log(Student.split(""));

//Filter
let cities = [
  { name: "Islamabad", population: 1000000 },
  { name: "Karachi", population: 20000000 },
  { name: "Lahore", population: 30000000 },
  { name: "Faisalabad", population: 40000000 },
  { name: "Multan", population: 50000000 },
];
console.log(cities.filter((city) => city.population > 20000000));
