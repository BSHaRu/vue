<script>
export default {
  name: "EmitComponent1",
  props: ["name", "age"],
  data() {
    return {
      myName: this.name,
      myAge: this.age,
    }
  },
  methods: {
    btnEmit: function (){
      // alert("Emit click");

      // 상위 Component로 전달할 data(JSON data)
      const emitData = {
        name: this.myName,
        age: this.myAge,
      };
      // 상위 Component로 myEmit 이벤트를 발생
      // -> emitData를 같이 전달 시킴
      this.$emit("myEmit", emitData);
    },
  },
};
</script>

<template>
  <h4>EmitComponent1</h4>
  <p>
    이름 : <input type="text" v-model="myName" /> <br/>
    나이 : <input type="text" v-model="myAge" /> <br/>
  </p>
  <button @click="btnEmit">emit 전달</button>
</template>

<style scoped>

</style>