<script>
  import PropsComponent4 from "./PropsComponent4.vue";

  export default {
    name: "PropsComponent3",
    components: {PropsComponent4},
    props: ["c3Name", "c3Age"],
  };
</script>

<template>
  <h4>PropsComponent3</h4>
  <p>
    c3Name: {{ c3Name }}<br>
    c3Age: {{ c3Age }}
  </p>
  <PropsComponent4 :c4Name="c3Name" :c4Age="c3Age" />
  <hr/>
</template>

<style scoped>

</style>