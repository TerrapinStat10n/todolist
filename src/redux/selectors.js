import { VISIBILITY_FILTERS } from "../constants";

export const getTodosState = store => store.todos;

export const getTodosByVisibilityFilter = (todos, visibilityFilter) => {
  console.log("Visibility Filter:" + visibilityFilter + "Type:" + typeof visibilityFilter + "outside switch")
  
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      console.log("Visibility Filter:" + todos + "Type:" + typeof todos + "completed test")
      return todos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.ACTIVE:
      console.log("Visibility Filter:" + todos + "Type:" + typeof todos + "active test")
      return todos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return todos;
  }
};
