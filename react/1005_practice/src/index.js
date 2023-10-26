import { createStore } from 'redux'

const inputTodo = document.getElementById("inputTodo");
const add = document.getElementById("add");
const todoList = document.getElementById("todoList");

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

const delTodo = (id) => ({
  type: DEL_TODO,
  id,
});

const reducer = (state = { todos: [] }, action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.text, id: Date.now() }],
      };
    case DEL_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  const todos = store.getState().todos
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    const del = document.createElement("button");
    listItem.textContent = todo.text;
    del.textContent = "DEL";
    del.addEventListener("click", () => {
      store.dispatch(delTodo(todo.id));
    });
    listItem.appendChild(del);
    todoList.appendChild(listItem);
  });
});

add.addEventListener("click", () => {
  const text = inputTodo.value;
  if (text.trim() !== "") {
    store.dispatch(addTodo(text));
    inputTodo.value = "";
  }
});