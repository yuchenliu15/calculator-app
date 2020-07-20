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
#app {
  width: 350px;
  height: 650px;
  box-shadow: 0 0 5px grey;
  border-radius: 20px;
  margin: auto;
  margin-top: 80px;
}
</style>
