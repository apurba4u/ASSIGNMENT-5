1. What is the difference between var, let, and const?
Ans: 
Before ES6, we used only var to declare variables.
var is hoisted, which is considered bad practice.
let and const are also hoisted, but they remain in the Temporal Dead Zone, which is beneficial.

Variables declared with var can be redeclared with the same name.
Variables declared with let and const cannot be redeclared with the same name.

With var and let, values can be reassigned.
With const, values cannot be reassigned.

var maintains only function scope.
let and const maintain block scope.

2. What is the spread operator (...)?

Ans: 
```
// Spread Array
let arr = [1,2,3,4]
console.log(arr); // eita array er bracket soho output asbe
console.log(...arr); // eita bracket chara output asbe
let arr2 = [...arr] // copy independently


console.log(Math.max(1,2,3,43,5));
console.log(Math.min(1,2,3,43,5));

console.log(Math.max(...arr2)); // karon math.max spread value expect kore
console.log(Math.min(...arr2));

// Spread object
const person = {
  name: 'Apurba',
  age: 20
}

// ei khetre heap memory te shudhu reference rekhe diyece 
// copy dependently
const person3 = person // ei khetre 2tar value change oibo

// copy independently
const person2 = {...person} // ei khetre jeta update kora hobe seta change hobe

person2.name = 'Ovi'
console.log(person.name);
console.log(person2.name);
```

3. What is the difference between map(), filter(), and forEach()?

Ans :
```
let arr = [10, 20, 30, 40, 50]
// map - update/modify element of an array

let updateArr = arr.map((elem, index, array) => {
  console.log(`${elem} -> ${index} : ${array}`);
  return elem * 2
})

console.log(updateArr);
```
```
const phones = [
  {name: 'Iphone 14 pro',
    price: 900000
  },
  {name: 'Iphone 15 pro',
    price: 920000
  },
  {name: 'Iphone 16 pro',
    price: 940000
  },
  {name: 'Iphone 17 pro',
    price: 960000
  },
  {name: 'Iphone 12 pro',
    price: 880000
  },
  {name: 'Iphone 11 pro',
    price: 860000
  },
  {
    name: 'Motorola G85',
    price: 24000
  },
  {
    name: 'Samsung s25 Ultra',
    price: 112500
  },
  
  {
    name: 'Samsung s26 Ultra',
    price: 114500
  },

]
// Filter Method
// Filter Multiple Elements
// multiple elements khuje ana

// 900000 tk r uporer element gula find kora
let richPhone = phones.filter((elem) => elem.price >= 900000 && elem.name.includes('Iphone'))
let samsung = phones.filter((elem) => elem.name.includes('Samsung'))

console.log(...richPhone);
console.log(...samsung);
```
```
const products = [
  {name: 'laptop', price: 45000},
  {name: 'phone', price: 15000},
  {name: 'tablet', price: 25000}
]

// loop through
// method 1
for (const i of products) {
  console.log(i);
}

// method 2
// foreach kunu kisu return kore nah
products.forEach((elem) => {
  console.log(elem);
})
```

4. What is an arrow function?
Ans:
```
/**
 * Traditional function hoisted
 * Arrow function hoisted nah
 * 
 * Traditional function e this er value global object
 * Arrow function e this er value khali
 */


console.log(myName("Ovi")); // --> Hoisted
function myName(name) {
  return `My Name is : ${name}`
}

// Arrow function

// multiplr parameter
const sum = (a, b) => a + b; // shortcut version
console.log(sum(10, 20));

// single parameter
const sqrt = a => a*a
console.log(sqrt(10));

// function myFunc() {
//   console.log(this);
// }
// myfunc()

let myfunc = () => this
console.log(myfunc()); // {}

```

5. What are template literals?
Ans : Template literals are a feature introduced in ES6 that allow you to create strings using backticks ( ) instead of single (' ') or double (" ") quotes.

```
function updateIssueCount(count) {
  // Get the element where the issue count will be displayed
  const counter = document.querySelector("#issue-count");

  // Use a template literal (backticks + ${}) to dynamically insert the count value into the string
  // Example: if count = 10 → the text becomes "10 Issues"
  counter.textContent = `${count} Issues`;
}
```
