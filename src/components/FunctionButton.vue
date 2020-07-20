<template>
  <button class="button">{{symbol}}</button>
</template>

<script>
export default {
  props: {
    symbol: String
  }
};
</script>

<style scoped>
.button {
  display: block;
  width: 70px;
  height: 70px;
  border: none;
  color: #2e86de;
  background-color: white;
  border: solid 1px #2e86de;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
  border-radius: 50%;
  margin: auto;
}

.button:hover {
  background-color: #dfe4ea;
  cursor: pointer;
}
</style>
