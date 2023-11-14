import {createPinia, defineStore} from 'pinia'

// pinia 전역스토어 생성 후 내보내기
export const useMainStore = defineStore("mainStore", {

    /*
      state
       - store에서 관리하는 상태 선언 속성
       - 해당 store에서 관리하는 상태값 집합
      action (setter 느낌이라고 보면 됨)
       - store의 state를 변경할 때 사용하는 속성
       - 비동기 처리로 직접 state 제어
       getters
        - state를 반환하는 속성
    */
    state: () => {
        return {
            // app에서 사용할 값을 return함
            title: 'Hello Pinia!',
            count: 0,
            cities: ["서울", "부산", "대구", "인천", "광주"],
            persons: [
                {uid: "a101", name: "김유신", age: "21"},
                {uid: "a102", name: "홍길동", age: "22"},
                {uid: "a103", name: "고길동", age: "23"},
                {uid: "a104", name: "이기영", age: "24"},
                {uid: "a105", name: "이기철", age: "25"},
            ],
        };
    },
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
    },
    getters: {
        doubleCount: (state) => {
            return state.count * 2;
        }
    },
})