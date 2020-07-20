<template>
  <div id="app">
    <NumberDisplay :number="number" ></NumberDisplay>
    <FunctionButton 
      v-for="button in buttons" 
      :symbol="button"
      :key="button"
      @click="onClick"
    ></FunctionButton>

  </div>
</template>

<script>

import NumberDisplay from './components/NumberDisplay';
import FunctionButton from './components/FunctionButton';

export default {
  name: 'App',
  components: {
    NumberDisplay,
    FunctionButton
  },
  data: function() {
    return {
      number: '0',
      current: '',
      buttons: [
        '(',')', '%', 'AC',
        '7', '8', '9', '÷',
        '4', '5', '6', 'x',
        '1', '2', '3', '-',
        '0', '.', '=', '+'
        ]
    }
  },
  methods: {
    onClick: function(symbol) {
      this.number = this.number === '0'? symbol: this.number + symbol;
      if(isNaN(symbol)) {
        console.log('no');
      }
      else {
        console.log('yes');
      }
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'MyFont';
  src: url('./assets/roboto.ttf');
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
