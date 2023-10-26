import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// // 리덕스를 이용한 숫자 증가, 감소 코드
// import { createStore } from 'redux'

// const plus = document.querySelector("#plus");
// const minus = document.querySelector("#minus");
// const num = document.querySelector("#num");

// const PLUS = 'PLUS';
// const MINUS = 'MINUS';

// // 리듀서
// const countReducer = (state = 0, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case PLUS:
//       return state + 1;
//     case MINUS:
//       return state - 1;
//     default:
//       return state;
//   }
// }

// // store는 데이터를 넣는 곳
// // createStore: store 생성
// const countStore = createStore(countReducer);
// console.log(countStore);

// // subscribe()는 데이터와 저장소가 변경될때마다 콜백 함수를 실행
// countStore.subscribe(() => {
//   // getState()는 저장소에서 최신 상태의 값을 반환할 때 쓰는 메소드
//   num.textContent = countStore.getState();
// })

// plus.addEventListener('click', () => {
//   countStore.dispatch({ type: PLUS });
// })

// minus.addEventListener('click', () => {
//   countStore.dispatch({ type: MINUS });
// })

// // countStore.dispatch({ type: "PLUS" });
// // countStore.dispatch({ type: "PLUS" });
// // countStore.dispatch({ type: "PLUS" });
// // countStore.dispatch({ type: "MINUS" });

// // console.log(countStore.getState());

// // 자바스크립트를 이용한 숫자 즈가, 감소 코드
// // let count = 0;

// // plus.addEventListener("click", () => {
// //   count = count + 1;
// //   num.textContent = count;
// // })

// // minus.addEventListener("click", () => {
// //   count = count - 1;
// //   num.textContent = count;
// // })