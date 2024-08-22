// ===========================================================================Ternoray Operator===========================================================
document.write('hi');
// const age=15;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');
// const drink=age>=13 ? 'wine': 'water';
// console.log(drink);
// console.log(`I like to drink ${ age>=13 ? 'wine': 'water'}`);
                            // =======================================================Test================================================================

const bill=380 ;
//  bill >=20 && bill<= 300 ? console.log('Tip is 15%'):console.log('Tip is 20%');
const tip = bill<=300 && bill>=50 ? bill*0.15:bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);