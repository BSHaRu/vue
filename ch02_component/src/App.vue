<script setup>
import MyComponent1 from "./components/MyComponent1.vue";
import MyComponent2 from "./components/MyComponent2.vue";
import MyComponent3 from "./components/MyComponent3.vue";
import OptionComponent from "./components/OptionComponent.vue";
import OptionComponent2 from "./components/OptionComponent2.vue";
import OptionComponent3 from "./components/OptionComponent3.vue";
</script>

<template>
  <h3>ch02. Component</h3>

  <h4>1) Component</h4>
  <MyComponent1 />
  <MyComponent2 />
  <MyComponent3 />

  <hr/>
  <h4>2) Options API</h4>
  <OptionComponent />
  <OptionComponent2 />
  <OptionComponent3 />


  <hr/>
  <h4>3) Component 통신</h4>


  <hr/>
  <h4>4) Component 생명주기</h4>
</template>

<style scoped>

</style>
