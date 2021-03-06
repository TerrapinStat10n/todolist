import React from "react";
import { useParams, Link } from "react-router-dom";

const Details = ({ allTodos, toggleTodo, deleteTodo }) => {
  const { id } = useParams();
  const todo = allTodos.find((todo) => todo.id === parseInt(id));

  return (
    <div className="detail-div">
      <h1>Todo Details</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Id #</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{todo.content}</td>
            <td>{todo.id}</td>
            <td>
              <button
                onClick={() => toggleTodo(todo.id)}
                className={!todo.completed ? "pendingTodo" : "completedTodo"}
              >
                {!todo.completed ? "Active" : "Completed"}
              </button>
            </td>
            <td>{todo.date}</td>
          </tr>
        </tbody>
      </table>
      <button className="toggle" onClick={() => toggleTodo(todo.id)}>
        Toggle Status
      </button>
      <Link to={"/"}>
        <button className="delete" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </Link>
      <Link to={"/"}>
        <button className="goback">Go Back</button>
      </Link>
    </div>
  );
};

export default Details;
