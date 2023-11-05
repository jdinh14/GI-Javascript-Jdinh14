function createPII() {
  // Private object with Personally Identifiable Information

  let PII = {
    name: "John Doe",
    SSN: "123-45-6789" // will be undefined
  };

  // returned by the closure
  return {
    //access the name
    getName: function() {
      return PII.name;
    }
  };
}
// Create an instance of the PII closure
let myPII = createPII();

// Access the name property using the public method provided by the closure
console.log("Name:", myPII.getName()); // Outputs John Doe

console.log(myPII.SSN); // This would be undefined





/* HARD:
Inside a closure, create an object called PII (Personally Identifiable Information)that cannot be accessed directly.
 The object should have at least two properties: name and SSN. Only the name property should be accessible, and it should be called through a public function. The SSN property should not be accessible at all.
  Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data.
   You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their SSN.
// Output: Undefined
  console.log(patient2.names); 
// Output: Undefined
  console.log(patient2.ssn); 
// Output: John
  console.log(patient2.getName());
// Output: 123-45-6789
  console.log(patient2.getSSN());  */

