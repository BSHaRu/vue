<script>
import MyComponent1 from "./components/MyComponent1.vue";
import MyComponent2 from "./components/MyComponent2.vue";
import MyComponent3 from "./components/MyComponent3.vue";
import DataComponent from "./components/DataComponent.vue";
import MethodsComponent from "./components/MethodsComponent.vue";
import ComputedComponent from "./components/ComputedComponent.vue";
import WatchComponent from "./components/WatchComponent.vue";
import PropsComponent1 from "./components/PropsComponent1.vue";
import PropsComponent2 from "./components/PropsComponent2.vue";
import PropsComponent3 from "./components/PropsComponent3.vue";
import EmitComponent1 from "./components/EmitComponent1.vue";
import LifeComponent from "./components/LifeComponent.vue";

export default {
  name: "App",
  data() {
    return{
      cities: ["서울","부산","대구","인천","광주","대전","울산"],
      isShow: true,
    };
  },
  /* script에 setup이 없으면 이렇게 하나씩 다 선언해줘야함
      - vue2에서 사용하는 방식임
  */
  components: {
    LifeComponent,
    EmitComponent1,
    PropsComponent3,
    MyComponent1,
    MyComponent2,
    MyComponent3,
    DataComponent,
    MethodsComponent,
    ComputedComponent,
    WatchComponent,
    PropsComponent1,
    PropsComponent2
  },
  methods: {
    emitHandler : function(data) {
      console.log(data.name);
      console.log(data.age);
    },
    btnToggle : function(data) {
      if(this.isShow) {
        this.isShow = false;
      }else
        this.isShow = true;
    },
  },
};
</script>

<template>
  <h3>ch02. Component</h3>

  <h4>1) Component</h4>
  <MyComponent1 />
  <MyComponent2 />
  <MyComponent3 />

  <hr/>
  <h4>2) Options API</h4>
  <DataComponent />
  <MethodsComponent />
  <ComputedComponent />
  <WatchComponent />

  <hr/>
  <h4>3) Component 통신</h4>
  <!-- 하위 Component에서 props을 통해 지정한 값을
    상위 Component에서는 속성값을 통해 출력
  -->
  <PropsComponent1 name="김유신" />
  <PropsComponent1 name="홍길동" age="22" />

  <ul>
    <!-- 상위 Component에서 선언한 값을 하위 Component에 전달 해서 출력 -->
    <PropsComponent2 v-for="city in cities" :myCity="city" />
  </ul>
  <hr/>
  <!-- props3에 선언한걸 props4에도 같은 값을 전달 하는 방법
      - props3안에서 바인딩해주면 됨
  -->
  <PropsComponent3 c3Name="고길동" c3Age="12" />

  <!-- 하위에서 이벤트를 만들고 상위에서 실행시킴 -->
  <EmitComponent1 name="고구마" age="2" @myEmit="emitHandler" />

  <hr/>
  <h4>4) Component 생명주기</h4>
  <LifeComponent v-if="isShow"/>
  <button @click="btnToggle">Toggle</button>
</template>

<style scoped></style>
