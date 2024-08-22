const product = {
  price: 100,
  discount: 10,
  itemName: "Salt Tiles",
  itemCode: "F0024",
};
// Factory Function
function createProduct(name, price, discount, code) {
  return {
    price: price,
    discount: discount,
    itemName: name,
    itemCode: code,
  };
  const football = createProduct("Sparta", 1500, 20, "A200");
}
//Constructer
function Priduct(name, price, discount, code) {
  (this.price = price),
    (this.itemName = name),
    (this.discount = discount),
    (this.itemCode = code);
  this.discountPre = function () {
    return (price * discount) / 100;
  };
}
const Mobile = new Priduct("sumsang", 150000, 5, "IP0089865");
//Classes
class Product {
  constructor(Name) {
    this.Name = Name;
  }
  getName() {
    return this.Name + "is Product Name";
  }
}

class Furniture extends Product {
  constructor(Name) {
    super(Name);
  }
  getName() {
    return this.Name + "is a Furniture";
  }
}
let pencil = new Product("pencil");
let chair = new Furniture("chair");

// const Product1 = class {
//   constructor(name, price, code, discount) {
//     this.name = name;
//     this.price = price;
//     this.code = code;
//     this.discount = discount;
//   }
//   get discountValue() {
//     return this.discount;
//   }
//   set setDiscountValue(value) {
//     this.discount = value;
//   }
//   discountValue() {
//     return (this.discountValue * this.price) / 100;
//   }
// };
// let pencil = new Product("pencil", 10, "L220", 20);
