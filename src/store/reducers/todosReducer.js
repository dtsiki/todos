const initialState = {
  todos: [{id: 0, completed: false, text: "Drink a tea"}]
};

const todosReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TODO':
	  console.log(action.payload);
	  console.log(action.id);
      return{
        ...state,
        todos: [...state.todos, {id: action.id, completed: false, text: action.payload}]
      }	
	  
    case 'CLEAR_TODOS':
      return{
        ...state,
        todos: []
      }	

    case 'DELETE_TODO':
      return {
        ...state,
        todos: [...state.todos.filter(todo => { return todo.id !== action.payload })]
      }

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: [...state.todos, ...state.todos.filter(todo => {if(todo.id === action.payload) todo.completed = !todo.completed})]
      }	  
	  
    default:
      return state;    
  }
}

export default todosReducer;
