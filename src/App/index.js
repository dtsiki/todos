import React, { useEffect }  from 'react';
import { connect }  from 'react-redux';
import { useSelector, useDispatch }  from 'react-redux';
import { addTodo, clearTodos }  from '../store/actions';
import Container from '../components/Container'

function App() {
  const { todos } = useSelector(state => state.todosReducer);
  const dispatch = useDispatch();

  async function handleAddTodo(){
    dispatch(addTodo({id: 2, completed: false, text: "Sleep well"}));
  }
  async function handleClearTodos(){
    dispatch(clearTodos());
  }  

  return (
    <Container>
	  <button onClick={handleAddTodo}>Add</button>
	  <button onClick={handleClearTodos}>Clear all</button>
    </Container>
  );
}

export default App;
