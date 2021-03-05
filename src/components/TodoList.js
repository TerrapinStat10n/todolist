import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import { toggleTodo, deleteTodo } from "../redux/actions";
import Details from './Details';

const TodoList = ({allTodos}) => (
  <table className="table">
      
      <th className="top-th">Todo</th>
      <th className="top-th">Status</th>
      <th className="top-th">Added On</th>
    {console.log("allTodos:")} 
    {console.log(allTodos)}
    { allTodos.map(todo => (
            <Todo key={`todo-${todo.id}`} todo={todo} />
        )
    )}
  </table>
);

const mapStateToProps = state => {
  const { visibilityFilter, todos } = state;
  console.log('Destructured Todos ');
  console.log(todos);
  const allTodos = getTodosByVisibilityFilter(todos, visibilityFilter);
  console.log('All todos:')
  console.log(allTodos);
  return {allTodos};

};

export default connect(mapStateToProps)(TodoList);
export const SingleTodo = connect(mapStateToProps, {toggleTodo, deleteTodo })(Details); 
