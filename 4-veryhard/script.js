// Person constructor
function Person(name, job, age) {
  this.name = name;
  this.job = job;
  this.age = age;
}

// exercise method to the Person prototype
Person.prototype.exercise = function() {
  console.log("Running is fun! - said no one ever");
};

// Add method to the Person prototype
Person.prototype.fetchJob = function() {
  console.log(this.name + " is a " + this.job);
};

//  Programmer constructor?
function Programmer(name, job, age, languages) {
  // Call the Person constructor
  Person.call(this, name, job, age);
  
  this.languages = languages;
  this.busy = true;
}

// Inherit
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

// Add method to the prototype
Programmer.prototype.completeTask = function() {
  this.busy = false;
};

// Add method to the prototype
Programmer.prototype.acceptNewTask = function() {
  this.busy = true;
};


Programmer.prototype.offerNewTask = function() {
  if (this.busy) {
    console.log(this.name + " can't accept any new tasks right now.");
  } else {
    console.log(this.name + " would love to take on a new responsibility.");
  }
};


Programmer.prototype.learnLanguage = function(newLanguage) {
  this.languages.push(newLanguage);
};


Programmer.prototype.listLanguages = function() {
  console.log(this.languages.join(', '));
};

// different programmers and test the methods
var programmer1 = new Programmer('Alice', 'Front-end Developer', 25, ['JavaScript', 'HTML', 'CSS']);
var programmer2 = new Programmer('Bob', 'Back-end Developer', 30, ['Python', 'Java']);

programmer1.offerNewTask(); // Alice can't accept any new tasks right now.
programmer1.completeTask();
programmer1.offerNewTask(); // Alice would love to take on a new responsibility.
programmer1.learnLanguage('React');
programmer1.listLanguages(); // JavaScript, HTML, CSS, React

programmer2.fetchJob(); // Bob is a Back-end Developer




/* 
VERY HARD: 
Object prototype chain and prototypal inheritance exercise.
Create a Person constructor that has three properties: name, job, and age.
Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also, give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g., should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers? Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add new methods or properties to incorporate the syntax.
See next page...
const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,[("HTML", "CSS", "JS", "R")]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguage());
console.log(c2.listLanguage());
console.log(c3.listLanguage());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob();
*/