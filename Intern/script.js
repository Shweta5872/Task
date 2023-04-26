function handleInput() {
    const input = document.getElementById("number-input");
    const output = document.getElementById("output");

    // Check number is positive or not

    if (input.value < 0) {
      output.textContent = "Enter a positive value";
      return;
    }

    // Check number is even or odd

    if (input.value % 2 === 0) {

      //  next 3 even numbers
      output.textContent = `The next 3 even numbers are ${Number(input.value) + 2}, ${Number(input.value) + 4}, ${Number(input.value) + 6}`;
    } 
    
    else {
      
      //  next 3 odd numbers

      output.textContent = `The next 3 odd numbers are ${Number(input.value) + 2}, ${Number(input.value) + 4}, ${Number(input.value) + 6}`;
    }
}