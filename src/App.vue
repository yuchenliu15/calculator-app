<template>
  <div id="app">
    <NumberDisplay :number="number"></NumberDisplay>
    <FunctionButton v-for="button in buttons" :symbol="button" :key="button" @click="onClick"></FunctionButton>
  </div>
</template>

<script>
import NumberDisplay from "./components/NumberDisplay";
import FunctionButton from "./components/FunctionButton";

const reg = RegExp('[+-/%x()]');

export default {
  name: "App",
  components: {
    NumberDisplay,
    FunctionButton,
  },
  data: function () {
    return {
      number: "0",
      buttons: [
        '(',')', '%', 'AC',
        '7', '8', '9', '÷',
        '4', '5', '6', 'x',
        '1', '2', '3', '-',
        '0', '.', '=', '+'
        ],
    };
  },
  methods: {
    onClick: function (symbol) {
      switch (symbol) {
        case "AC":
          this.number = "0";
          break;
        case "=":
          this.calculate();
          break;
        default:
          this.number = this.number === "0" ? symbol : this.number + symbol;
      }
    },
    calculate: function () {
      const input = this.number;
      const validOperators = ["+", "-", "%", "x", "/"];
      const valueStack = [];
      const operatorStack = [];
      for (const char of this.parseInput(input)) {
        if (validOperators.includes(char)) {
          operatorStack.push(char);
        } else if (char === ")") {
          const second = valueStack.pop();
          const first = valueStack.pop();
          const operator = operatorStack.pop();
          valueStack.push(this.getValue(first, second, operator));
        } else if (char !== "(") {
          valueStack.push(char);
        }
        console.log(valueStack)
        console.log(operatorStack)
      }
      while(operatorStack.length > 0) {
        const second = valueStack.pop();
        const first = valueStack.pop();
        const operator = operatorStack.pop();
        valueStack.push(this.getValue(first, second, operator));
      }

      this.number = valueStack.pop().toString();
    },
    getValue(first, second, operator) {
      first = parseInt(first);
      second = parseInt(second);
      switch (operator) {
        case "+":
          return first + second;
        case "-":
          return first - second;
        case "%":
          return first % second;
        case "x":
          return first * second;
        case "/":
          return first / second;
      }
    },
    parseInput: function(input) {
      const result = [];
      let string = '';
      for(let i = 0; i < input.length; i++) {
        const current = input.charAt(i);
        if(reg.test(current)) {
          if(string !== '')
            result.push(string);
          result.push(current);
          string = '';
        }
        else if(i === input.length - 1) {
          string += current;
          result.push(string);
        }
        else {
          string += current;
        }
      }
      return result;
    },

  },

};
</script>

<style>
@font-face {
  font-family: "MyFont";
  src: url("./assets/roboto.ttf");
}
#app {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 350px;
  height: 650px;
  font-family: MyFont;
  box-shadow: 0 0 5px grey;
  color: #2e86de;
  border-radius: 20px;
  margin: auto;
  margin-top: 80px;
}
</style>
