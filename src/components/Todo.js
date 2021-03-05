import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";
import { Link } from "react-router-dom";

const Todo = ({ todo, toggleTodo }) => (

<tbody>  
  <tr className="todo-item">

    <td
      className={cx(
        "todo-item__text",
        todo.completed && "todo-item__text--completed"
      )}
    >
      <Link to={"details/" + todo.id}> {todo.content}</Link>
    </td>
    <td>
      { !todo.completed ?
        <button className="pendingTodo" onClick={() => toggleTodo(todo.id)}>Active</button> :
          <button className="completedTodo" onClick={() => toggleTodo(todo.id)}>Completed</button>
      }
    </td>
    <td>
      {todo.date}
    </td>
  </tr>
</tbody>
);

export default connect(
  null,
  { toggleTodo }
)(Todo);