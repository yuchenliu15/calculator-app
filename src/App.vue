<template>
  <div id="app">
    <NumberDisplay :number="number" ></NumberDisplay>
  </div>
</template>

<script>

import NumberDisplay from './components/NumberDisplay';

export default {
  name: 'App',
  components: {
    NumberDisplay
  },
  data: function() {
    return {
      number: 111
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
  border-radius: 20px;
  margin: auto;
  margin-top: 80px;
}
</style>
