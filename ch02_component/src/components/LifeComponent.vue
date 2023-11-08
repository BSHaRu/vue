<script>
export default {
  name: "LifeComponent",
  data() {
    return {
      count : 0,
    };
  },
  // components 생명 주기를 hook이라고 함
  beforeCreate() {
    console.log("1 beforeCreate");
  },
  created() {
    console.log("2 created");
  },
  beforeMount() {
    console.log("3 beforeMount");
  },
  mounted() {
    console.log("4 mounted");
  },
  beforeUpdate() {
    console.log("555 beforeUpdate");
  },
  updated() {
    console.log("화면 출력 updated");
  },
  beforeUnmount() {
    console.log("end1 beforeUnmount");
  },
  unmounted() {
    console.log("end2 unmounted");
  },
};
</script>

<template>
  <h4>LifeComponent</h4>
  <p>
    카운터 : {{ count }}
    <button @click="count++">증가</button>
  </p>
</template>

<style scoped></style>