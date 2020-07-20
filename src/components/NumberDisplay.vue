<template>
  <div class="number-container">
    <p>{{number}}</p>
  </div>
</template>

<script>
export default {
  props: {
    number: Number
  }
};
</script>

<style scoped>
.number-container {
  position: relative;
  background-color: yellow;
  height: 150px;
  border-radius: 20px;
  grid-column: 1/5;
  margin: 15px;
  font-size: 6em;
}

p {
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 0;
}
</style>