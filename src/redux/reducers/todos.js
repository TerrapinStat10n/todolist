import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actionTypes";

const initialState = [{
  id: 0,
  content: "Content",
  date: new Date().toISOString(),
  completed: false  
}];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content, date } = action.payload;
      return [
        ...state,
        {
          id,
          content,
          date,
          completed: false
        }
      ]
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return state.map(todo => (todo.id === id) ? {...todo, completed: !todo.completed} : todo)       
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      return state.filter(todo => todo.id !== id)      
    }
    default:
      return state;
  }
}
