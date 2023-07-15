import { combineReducers } from 'redux';
import { SET_RESPONSE_DATA, LOGOUT, DELETE_TODO, ADD_TODO , UPDATE_TODOS} from './actions';
import axios from 'axios';

const initialResponseDataState = {
  id: '',
  username: '',
  email: '',
  password: '',
  todos: [],
};

const responseDataReducer = (state = initialResponseDataState, action) => {
  switch (action.type) {
    case SET_RESPONSE_DATA:
      return action.payload;
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case UPDATE_TODOS:
      const { id, updatedTodo } = action.payload;
      const editedTodos = state.todos.map(todo => {
          if (todo.id === id) {
            return { ...todo, ...updatedTodo };
          }
        });
        upTodo(id, editedTodos);
        return {
          ...state,
          todos: editedTodos,
        };
    case DELETE_TODO:
      const updatedTodos = state.todos.filter(todo => todo.id !== action.payload);
      const updatedState = {
        ...state,
        todos: updatedTodos,
      };
      upTodo(action.payload, updatedState);
      return updatedState;
    case LOGOUT:
      return initialResponseDataState;
    default:
      return state;
  }
};

const upTodo = async (todoId, state) => {
  try {
    const response = await axios.put(`http://localhost:3003/accounts/${state.id}`, state);
    console.log('Todo deleted successfully:', response.data);
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};

const rootReducer = combineReducers({
  responseData: responseDataReducer,
});

export default rootReducer;
