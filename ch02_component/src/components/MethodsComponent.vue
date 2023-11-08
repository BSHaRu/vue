<script>
export default {
  name: "MethodsComponent",

  // 이벤트 또는 로직 처리를 위한 함수 선언 옵션
  methods: {
    btn1Click() {
      alert("btn1Click");
    },
    btn2Click: function () {
      alert("btn2Click");
    },
    btn3Click: () => {
      alert("btn3Click");
    },
  }
}
</script>

<template>
  <h4>methods 옵션</h4>
  <button v-on:click="btn1Click">button1</button>
  <button @:click="btn2Click">button2</button>
  <button @click="btn3Click">button3</button>
  <!-- :click은 바인딩에 해당하는 문법이니 확인 잘 하셈 -->
  <hr/>
</template>

<style scoped>

</style>