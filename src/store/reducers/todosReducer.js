const initialState = {
  todos: [{id: 1, completed: false, text: "Drink a tea"}]
};

const todosReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return{
        ...state,
        todos: [...state.todos, action.payload]
      }	  
    case 'CLEAR_TODOS':
      return{
        ...state,
        todos: []
      }	  
    default:
      return state;    
  }
}

export default todosReducer;
