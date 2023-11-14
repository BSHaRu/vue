/* 공식 홈페이지(https://pinia.vuejs.org/introduction.html)에 있는 예제 */
import { defineStore } from 'pinia'

export const useTodos = defineStore('todos', {
    state: () => ({
        /** todos의 해당 타입들이 들어감
         @type {{ text: string, id: number, isFinished: boolean }[]} 
        */
        todos: [],
        /** @type {'all' | 'finished' | 'unfinished'} */
        filter: 'all',
        // type will be automatically inferred to number
        nextId: 0,
    }),
    getters: {
        finishedTodos(state) {
            // autocompletion! ✨
            return state.todos.filter((todo) => todo.isFinished)
        },
        unfinishedTodos(state) {
            return state.todos.filter((todo) => !todo.isFinished)
        },
        /**
         * @returns {{ text: string, id: number, isFinished: boolean }[]}
         */
        filteredTodos(state) {
            if (this.filter === 'finished') {
                // call other getters with autocompletion ✨
                return this.finishedTodos
            } else if (this.filter === 'unfinished') {
                return this.unfinishedTodos
            }
            return this.todos
        },
    },
    actions: {
        // any amount of arguments, return a promise or not
        addTodo(text) {
            // you can directly mutate the state
            this.todos.push({ text, id: this.nextId++, isFinished: false })
        },

        // 추가 함수 정의
        doneTodo(id) {
            // id 값으로 배열의 index 값을 구한 뒤 상태값을 변경해줘야함
            const index = this.todos.findIndex((todo) => todo.id === id);

            if(index > -1) {
                this.todos[index].isFinished = true;
            }
        },

        removeTodo(id) {
            const index = this.todos.findIndex((todo) => todo.id === id);

            if(index > -1) {
                this.todos.splice(index, 1);
            }
        },

        clearTodo() {
            // 배열 초기화 시켜줌 -> todoList 전체 비움
            this.todos = [];
        }
    },
})