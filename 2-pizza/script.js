function sharePizza(slice, slices) // Defines a function named sharePizza which calculates the number of pizza slices per person.
{       let pizza = slice;   // Let pizza store the total number of slices available.

        let pizzaPer = slice / slices; // Calculates how many slices each person will get by dividing the total number of slices (slice)
                                        // by the number of slices (slices) each person should receive.

        return `each person gets ${pizzaPer.toFixed(2)} slices of pizza; from our ${pizza} slice pizza`
         //func returns a string that uses toFixed(2) to format the number
       

}

console.log(sharePizza(6,2)); // Calls the sharePizza function

/*
Write a function that will allow you to calculate how many slices of pizza x each person y would get if they shared evenly. The function should return an interpolated string like Each person gets 4.00 slices of pizza; from our 8-slice pizza x being a decimal in case there is no way to split the pizza evenly.
// Output: Each person gets 4 slices of pizza; from our 8 slice pizza
  console.log(sharePizza(8, 2)); 
// Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
  console.log(sharePizza(8, 3)); 
// Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
  console.log(sharePizza(21, 20));
// Output:Each person gets 3.33 slices of pizza; from our 10 slice pizza
  console.log(sharePizza(10, 3)); 
... */