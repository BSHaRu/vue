<script>
export default {
  name: "DataComponent",

  // component에서 사용할 데이터(상태 값) 선언 속성
  data(){
    return {
      name: "홍길동",
      age: 18,
      address: "부산",
    };
  },
};
</script>

<template>
  <h4>data 옵션</h4>
  <p>
    name: {{ name }}<br />
    age: {{ age }}<br />
    address: {{ address }}
  </p>
  <hr/>
</template>

<style scoped>

</style>