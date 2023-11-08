<script>
export default {
  name: "WatchComponent",
  // 상태값의 변화를 감지해서 특정 조건에 해당하는지 확인
  watch: {
    inputTxt: function(){
      // inputTxt에 해당 금지어(fobiddenTxt)가 존재하는지 체크
      const pos = this.inputTxt.indexOf(this.fobiddenTxt);

      if(pos >= 0){
        alert(this.fobiddenTxt + "입력 불가");
        // inputTxt에 금지어가 있으면 해당 금지어 삭제 해줌
        this.inputTxt = this.inputTxt.substring(0, pos);
      }
    },
  },
  data() {
    return {
      fobiddenTxt: "바보",
      inputTxt: "",
    };
  },
};
</script>

<template>
  <h4>watch 옵션</h4>
  <div>
    <p>금지어 발견 : {{ fobiddenTxt }}</p>
    <textarea v-model="inputTxt" cols="30" rows="10"></textarea>
  </div>
</template>

<style scoped>

</style>