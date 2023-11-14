<script setup>
import {useTodos} from "../store/todos.js";
import {ref} from "vue";

// 전역 스토어 가져오기
const todosStore = useTodos();

const text = ref(null);

// 핸들러 정의
const btnAdd = () => {
  // todos.js에 있는 action에 있는 addTodo함수 호출
  todosStore.addTodo(text.value);
}
const btnClear = () => {
  todosStore.clearTodo();
}

const btnDone = (id) => {
  todosStore.doneTodo(id);
}
const btnRemove = id => {
  todosStore.removeTodo(id);
}

const btnFinishedTodos = () => {
  todosStore.finishedTodos();
}
const btnUnFinishedTodos = () => {
  todosStore.unfinishedTodos();
}

</script>

<template>
  <h4>MyComponent2</h4>
  <p>
    <input type="text" v-model="text" placeholder="할일을 입력해주세요.">
    <button @click="btnAdd">등록</button>
    <button @click="btnClear">초기화</button>
  </p>
  <p>
    <button @click="btnFinishedTodos()">완료된 할일</button>
    <button @click="btnUnFinishedTodos()">미완료된 할일</button>
  </p>
  <table border="1">
    <tr>
      <th>번호</th>
      <th>할일</th>
      <th>상태</th>
      <th>관리</th>
    </tr>
    <tr v-for="todo in todosStore.todos">
      <!-- id값은 배열이라서 index값임
          즉 0부터 시작하기 때문에 +1 해주면 번호가 1번부터 들어감
      -->
      <td>{{todo.id + 1}}</td>
      <td>{{todo.text}}</td>
      <td class="done" v-if="todo.isFinished">완료</td>
      <td class="notyet" v-else="todo.isFinished">미완료</td>
      <td>
        <button @click="btnRemove(todo.id)">삭제</button>
        <button @click="btnDone(todo.id)">완료</button>
      </td>
    </tr>
  </table>

  <table border="1">
    <caption>
      완료된 할일
    </caption>
    <tr>
      <th>번호</th>
      <th>할일</th>
      <th>상태</th>
    </tr>
    <tr v-for="todo in todosStore.finishedTodos">
      <!-- id값은 배열이라서 index값임
          즉 0부터 시작하기 때문에 +1 해주면 번호가 1번부터 들어감
      -->
      <td>{{todo.id + 1}}</td>
      <td>{{todo.text}}</td>
      <td class="done">완료</td>
    </tr>
  </table>

  <table border="1">
    <caption>
      미완료된 할일
    </caption>
    <tr>
      <th>번호</th>
      <th>할일</th>
      <th>상태</th>
    </tr>
    <tr v-for="todo in todosStore.unfinishedTodos">
      <!-- id값은 배열이라서 index값임
          즉 0부터 시작하기 때문에 +1 해주면 번호가 1번부터 들어감
      -->
      <td>{{todo.id + 1}}</td>
      <td>{{todo.text}}</td>
      <td class="notyet">미완료</td>
    </tr>
  </table>

</template>

<style scoped>
.done{
  color: green;
}
.notyet{
  color: red;
}
</style>