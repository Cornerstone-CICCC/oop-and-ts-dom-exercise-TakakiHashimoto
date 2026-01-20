// get input
// on calculate => num1 operator num2
class Calculator {
  // Initial setting: num1 input
  // num2 input;
  constructor() {
    console.log("Calculator initialized");
    this.result = 0;
    this.num1Input = document.getElementById("num1");
    this.num1Input.addEventListener(
      "change",
      (e) => (this.num1Input.value = e.target.value),
    );
    this.num2Input = document.getElementById("num2");
    this.num2Input.addEventListener(
      "change",
      (e) => (this.num2Input.value = e.target.value),
    );
    this.operator = "add";
    this.operatorSelect = document.getElementById("operation");
    this.operatorSelect.addEventListener(
      "change",
      (event) => (this.operator = event.target.value),
    );

    console.log(this.num1Input, this.calcBtn);
    this.calcBtn = document.getElementById("calculateBtn");
    this.calcBtn.addEventListener("click", () => {
      console.log("working");
      console.log(this.operator);
      console.log(this.num1Input.value);
      console.log(this.num2Input.value);
      // get num1 and num2 and conditionally calculate and render the result
      // update operator
      if (this.operator === "add") {
        this.add();
      } else if (this.operator === "subtract") {
        this.subtract();
      } else if (this.operator === "multiply") {
        this.multiply();
      } else if (this.operator === "divide") {
        this.divide();
      }

      this.render();
    });
  }
  add() {
    const result = Number(this.num1Input.value) + Number(this.num2Input.value);
    this.result = result;
  }
  subtract() {
    const result = Number(this.num1Input.value) - Number(this.num2Input.value);
    this.result = result;
  }
  multiply() {
    const result = Number(this.num1Input.value) * Number(this.num2Input.value);
    this.result = result;
  }
  divide() {
    const result = Number(this.num1Input.value) / Number(this.num2Input.value);
    this.result = result;
  }

  render() {
    const resultDisplay = document.getElementById("result");
    resultDisplay.innerText = this.result;
  }
}

const calc = new Calculator();
