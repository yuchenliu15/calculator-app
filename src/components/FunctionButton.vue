<template>
  <button class="button" @click="onClick">{{symbol}}</button>
</template>

<script>
export default {
  props: {
    symbol: String
  },
  methods: {
      onClick: function() {
          this.$emit('click', this.symbol);
      }
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
