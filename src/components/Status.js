import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";

const Status = ({ todo, toggleTodo }) => (
  
<li className="todo-item" onClick={() => toggleTodo(todo.id)}>
  {todo && todo.completed ? "👌" : "👋"}{" "}
</li>
);

export default connect(
  null,
  { toggleTodo }
)(Status);
