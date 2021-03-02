import React from 'react';
import AddTodo from "./components/AddTodo";
import TodoList, { SingleTodo } from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
      
      <Route path="/" exact>
        <div className="todo-app">
          <h1>
            Todo List
          </h1>
          <AddTodo />
          <TodoList />
          <VisibilityFilters />
      </div>
      </Route>
      <Route path="/details/:id" component={SingleTodo} exact />
      
      </Switch>
    </Router>
  );
}
