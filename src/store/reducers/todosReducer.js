import { loadState } from '../../services'

const defaultState = {
  todos: [{completed: false, text: "Do something"}, {completed: true, text: "Do something else"}]
};

const initialState = localStorage.length ? loadState() : defaultState;

const todosReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return{
        ...state,
        todos: [...state.todos, {completed: false, text: action.payload}]
      }	
	  
    case 'CLEAR_TODOS':
      return{
        ...state,
        todos: []
      }	
  
    case 'DELETE_TODO':
      return {
        ...state,
        todos: [...state.todos.filter((todo, id) => { return id !== action.payload })]
      }
	  
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: [...state.todos, ...state.todos.filter((todo, id) => {if(id === action.payload) {todo.completed = !todo.completed} return null})]
      }	  
	  
    default:
      return state;    
  }
}

export default todosReducer;
