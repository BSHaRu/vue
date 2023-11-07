<script>
export default {
  name: "MyComponent1"
};
</script>

<template>
  <h4>MyComponent1</h4>
  <p>사용자 정의 Component</p>
</template>

<!-- scoped : 현재 component에만 해당 style을 적용-->
<style scoped>
h4{
  color: red;
}
</style>