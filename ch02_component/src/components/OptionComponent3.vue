<script>
export default {
  name: "OptionComponent3",

  // component 상태값이 변하면 자동으로 계산해서 출력하는 함수 정의 옵션
  computed: {
    totalPrice: function () {
      return this.price * this.count;
    },
    textCount() {
      return this.mytext.length;
    },
    remainTxt() {
     return 20 - this.mytext.length;
    },
    computeColor: function () {
      this.mycolor = "green";
      if(this.remainTxt < 15){
        this.mycolor = "orange";
      }
      if(this.remainTxt < 1){
        this.mycolor = "red";
      }
      return this.mycolor;
    },
  },
  methods: {
    textCountLimit(){
      if(this.remainTxt < 0){
        alert("글자수를 20자 이내로 제한해주세요.");
      }
    },
  },
  data() {
    return {
      price: 1000,
      count: 1,
      mytext: "",
      mycolor: "black",
    };
  },
  watch:{
    // 글자수가 변경 될 때마다 체크
    mytext : "textCountLimit",
  }
}
</script>

<template>
  <h4>computed 옵션</h4>
  <div>
    <!--
      v-bind는 단방향 바인딩
        - 업데이트가 안됨
        -> v-bind가 아니라 v-model(양방향)로 써야 됨
        ※ 양방향 : 실시간 업데이트 됨
        => input 태그는 앵간하면 v-model쓴다고 보면 됨

        크롬에서 Vue.js devtools 확장 프로그램 깔아서
        개발자 모드 켜서 확인해보면 단방향 / 양방향 차이 구분 가능
    -->
    <input type="number" v-model="price"/>원
    <input type="number" v-model="count"/>개
    <p>금액 : {{ totalPrice }}원 </p>
  </div>

  <div>
    <p>20자 이내로 작성하세요.</p>
    <textarea cols="30" rows="10" v-model="mytext"></textarea>
    <p>글자수 : {{ textCount }}</p>
    <p :style="{color: computeColor}">남은 글자수 : {{remainTxt}}</p>
  </div>
  <hr/>
</template>

<style scoped>

</style>