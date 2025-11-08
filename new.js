function equation(num1, num2, operation) {
  if (operation == "+") {
    return num1 + num2;
  } else if (operation == "-") {
    return num1 - num2;
  } else if (operation == "*") {
    return num1 * num2;
  } else {
    return num1 / num2;
  }
}

let result = equation(10, 5, "+");
