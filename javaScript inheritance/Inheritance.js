// Create a new Object which have all the properties of object person and student;

const person = {
    id: 2,
    gender: 'male'
};

const student = {
    name: 'ravi',
    email: 'ravi11@yopmail.com'
};

// using Javascript Spread Operator (ES6 syntax)
const newObj = {
    ...person,
    ...student
};

console.log(newObj);

// output -
// { id: 2, gender: 'male', name: 'ravi', email: 'ravi11@yopmail.com' }