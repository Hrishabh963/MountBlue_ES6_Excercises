//Define a variable using let
const excercise1 = () => {
  let a = 1;
  console.log('The number here is defined using let ', a);
};
excercise1();

//Define a variable using const
const excercise2 = () => {
  const a = 1;
  console.log('The number here is defined using const', a);
};
excercise2();

//Use arrow function to find square
const findSquare = (number) => {
  return number * number;
};
console.log('Square of 4 is ', findSquare(4));

//Use arrow function to add two numbers
const addTwoNumbers = (a, b) => {
  return a + b;
};
console.log('Sum of 2 and 4 is ', addTwoNumbers(2, 4));

//Creating a string,spliting it and printing it
const string = `Hello
world
It
will
be
split
`;
const splitString = string.split('\n');
splitString.forEach((sentence) => {
  console.log(sentence);
});

//A function with default argument to calculate area of circle
const areaOfCircle = (radius = 5) => {
  return 3.14 * radius * radius;
};
console.log('Calling it with an argument ', areaOfCircle(8));
console.log('Calling it without an argument', areaOfCircle());

//Using template literal to populate a string
let person = {
  name: 'Harry Potter',
  location: 'London',
};
const personString = `${person.name} is located in ${person.location}.`;
console.log(personString);

//Example of destructuring array
const exampleArray = [1, 2, 3, 4];
const [a, b, c, d] = exampleArray;
console.log('The following values are from destructuring', a, b, c, d);

//Example of object destructuring in a function body;

const destructureObject = (obj) => {
  let { name, id } = obj;
  console.log('Got the values using destructuring object', name, id);
};
const student = { name: 'John', id: 1 };
destructureObject(student);

//Example of destructuring an object inside a function argument
const destructureObjectInsideArgument = ({ name, id }) => {
  console.log('Destructured inside argument', name, id);
};
destructureObjectInsideArgument(student);

//Example of object literal enhancement
const myName = 'Hrishabh';
const place = 'Himachal';
const age = '21';
const info = { myName, place, age };
console.log('Made this object using object literal enhancment : ', info);

//Using rest Parameters syntax
const sum = (...numbers) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
};
console.log('Using rest parameters: ', sum(1, 2, 3, 4));

//Using spread operators
const numberArr = [1, 2, 3, 4];
console.log(
  'Using spread operator to pass numbers as argument',
  sum(...numberArr),
);

//For of loop
for (const number of numberArr) {
  console.log(`Using for of loop`, number);
}

//Using Object.keys
const keysArray = Object.keys(info);
console.log(`Keys using Object.keys`, keysArray);

//Using Object.keys
const valuesArray = Object.values(info);
console.log(`Keys using Object.values`, valuesArray);

Object.entries(info).map(([key, value]) => {
  console.log('Using object.enteries', key, value);
});
