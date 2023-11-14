<script setup>
import axios from "axios";
import {reactive, ref} from "vue";

// 반응형 객체
const users = ref([]);
const inputText = ref([]);
const user1 = reactive({
  data : {},
});

const btnGetUser = () => {
  axios({
    url: "http://localhost:8080/Ch10/user1",
    method: "GET",
    responseType: "json",
  })
    .then(response => {
      console.log(response.data);
      users.value = response.data;
    })
    .catch(err => {
      console.log(err.message);
    });
}

const btnGetUserById = async () => {
  /* axios(async - await)
    - 비동기 방식으로 동기 방식 스타일로 표기
    - 실제 동작은 비동기방식으로 처리
   */
   const response = await axios.get(
       // id값만 찾기 위한 url
       "http://localhost:8080/Ch10/user1/" + inputText.value
   );
   user1.data = response.data;
}

const registerUser = () => {
  axios.post(
      "http://localhost:8080/Ch10/user1/", user1
  )
    .then(response => {
      console.log(response.data);
      alert("삭제");
    })
    .catch(err => {
      console.log(err);
    })
}

const updateUser = () => {
  axios.put(
      "http://localhost:8080/Ch10/user1/", user1
  )
    .then(response => {
      console.log(response.data);
      alert("수정");
    })
    .catch(err => {
      console.log(err);
    })
}

const btnDeleteUser = () => {
  axios.delete(
      `http://localhost:8080/Ch10/user1/${inputText.value}`
  )
      .then(response => {
        console.log(response.data);
        alert("삭제");
      })
      .catch(err => {
        console.log(err);
      })
}
</script>

<template>
  <h4>Axios 실습</h4>
  <button @click="btnGetUser">User 요청</button>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>연락처</th>
      <th>나이</th>
    </tr>
    <tr v-for="user in users">
      <td>{{user.uid}}</td>
      <td>{{user.name}}</td>
      <td>{{user.hp}}</td>
      <td>{{user.age}}</td>
    </tr>
  </table>

  <h4>Get - id검색 </h4>
  <input type="text" v-model="inputText" />
  <button @click="btnGetUserById">UserId 요청</button>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>연락처</th>
      <th>나이</th>
    </tr>
    <tr>
      <td>{{user1.data.uid}}</td>
      <td>{{user1.data.name}}</td>
      <td>{{user1.data.hp}}</td>
      <td>{{user1.data.age}}</td>
    </tr>
  </table>

  <h4>Post - 등록</h4>
  <form @:submit.prevent="registerUser">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user1.uid"></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user1.name"></td>
      </tr>
      <tr>
        <td>휴대폰</td>
        <td><input type="text" v-model="user1.hp"></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="text" v-model="user1.age"></td>
      </tr>
      <input type="submit" value="등록" />
    </table>
  </form>

  <h4>Put - 수정</h4>
  <form @:submit.prevent="updateUser">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user1.uid"></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user1.name"></td>
      </tr>
      <tr>
        <td>휴대폰</td>
        <td><input type="text" v-model="user1.hp"></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="text" v-model="user1.age"></td>
      </tr>
      <input type="submit" value="수정" />
    </table>
  </form>

  <h4>Delete - 삭제</h4>
  <input type="text" v-model="inputText" />
  <button @click="btnDeleteUser">삭제</button>
</template>

<style scoped>

</style>