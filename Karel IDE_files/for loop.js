// first program
// for(var a=1; a<=100; a++){
//     document.write("I am Muneer Hussain:");
// }
// Second program
// program to generate a multiplication table





// take input from the user
const a = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const b = i * a;

    // display the result
    console.log(`${a} * ${i} = ${b}`);
    document.write(b);
    document.write("<br>");
}