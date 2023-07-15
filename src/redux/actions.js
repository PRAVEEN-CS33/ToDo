export const SET_RESPONSE_DATA = 'SET_RESPONSE_DATA';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODOS = 'UPDATE_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
export const LOGOUT = 'LOGOUT';

export const setResponseData = (data) => ({
  type: SET_RESPONSE_DATA,
  payload: data,
});

export const logout = () => ({
  type: LOGOUT,
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const updateTodo = (id, updatedTodo) => ({
  type: UPDATE_TODOS,
  payload: { id, updatedTodo },
});

export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  payload: todoId,
});

