function myFunction() {
  let x, y, oper;
  x = prompt("Type first number");
  oper = prompt("Type an operator (+, -, *, /)");
  y = prompt("Type second number");



  if (oper == "/") {
      if (y === 0) {
          alert("Error: Cannot divide by zero.");
          return; 
      } else {
          let z = x / y;
          alert("Result: " + z);
          return; 
      }
  }

  if (oper == "+") {
      let z = x + y;
      alert("Result: " + z);
  } else if (oper == "*") {
      let z = x * y;
      alert("Result: " + z);
  } else if (oper == "-") {
      let z = x - y;
      alert("Result: " + z);
  } else {
      alert("Invalid operator! Please use +, -, *, or /");
  }
}

window.onload = function() {
  myFunction();
};