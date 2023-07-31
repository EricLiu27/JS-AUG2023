// intro to Javascript -- web vs node, ECMA
// https://www.w3schools.com/js/js_versions.asp

// ------------- scope & var ------------
// global variable: myName (Heidi)
var myName = "Heidi"

function greetName() {
    var myName = "Pepper"
    myName = "Chen" // change myName inside function or myName inside global
    console.log(`Hi! ${myName}`) // Chen
}
greetName();
console.log(myName) // Heidi


// console.log(cat)
// const cat = "Pepper"
// console.log(cat)
// 1. create cat variable with undefine
// 2. line 18, assign "Pepper" into cat variable

// ------------- const & let ------------
for (let i = 0; i < 3; i++) {
    console.log(i);
}

const skills = ["breaking the code", "fixing the bugs", "bootstrap"];
skills.push("tailwind");
skills[0] = "not breaking the code"
console.log(skills)


// ------------- destructuring ------------
// option/Alt + shift F for formatting
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};

const key = "email";

const firstName = person.firstName;
const lastName = person["lastName"];
const email = person[key]; // person["email"]

console.log(firstName);
console.log(lastName);

const { password, createdAt, updatedAt} = person;
// 1. create the variables (password, createdAt)
// 2. search for person.password and assign to password, search for person.createdAt
console.log(password, createdAt, updatedAt);

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const [firstAnimal, , thirdAnimal] = animals;
// 1. create the variables (firstAnimal, thirdAnimal)
// 2. search for animals[0], animals[2] to assign the variables
console.log(firstAnimal,thirdAnimal);


// ------------- spread/rest ------------
const personCopy = {...person, firstName:"Alex", lastName:"Miller", nickname:"cool developer"}
console.log(person)
console.log(personCopy)
// push one more element into the array WITHOUT .PUSH
const animalCopy = ["dragon", ...animals, "unicorn"];
console.log(animalCopy)
// ------------- arrow function ------------
function sayHello(name){
    console.log(`Hello, ${name}`);
}

const sayHello2 = function(name){ // anonymous function
    console.log(`Hello2, ${name}`)
}

// ()=>{}
const sayHello3 = (name) => {
    console.log(`Hello3, ${name}`);
}

const sayHelloToAnonymous = ()=>{
    console.log(`Hello stranger!`);
}

sayHello3("Heidi")
sayHelloToAnonymous();



// ------------- ternary operator ------------
