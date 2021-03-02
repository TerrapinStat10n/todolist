import { ADD_TODO, TOGGLE_TODO, SET_FILTER, DELETE_TODO } from "./actionTypes";

export let nextTodoId = 0;

export const addTodo = (content, date) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
    date
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id }  
});

export const setFilter = filter => ({ type: SET_FILTER, payload: filter });
