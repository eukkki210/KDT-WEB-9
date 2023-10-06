import { createStore } from 'redux'

// 상수의 변수
export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";

// reducer
const reducer = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case ADD_TODO:
            const newTodo = { text: action.text, id: Date.now() }
            return [newTodo, ...state]
        case DEL_TODO:
            const remove = state.filter((todo) => todo.id !== action.id);
            return remove;            
        default:
            return state;
    }
};

// store
const store = createStore(reducer);

export default store;