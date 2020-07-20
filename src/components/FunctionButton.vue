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
  border: solid 1px #2e86de;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 900;
  border-radius: 50%;
  margin: auto;
}
</style>
