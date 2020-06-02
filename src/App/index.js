import React, { useState }  from 'react';
import { useSelector, useDispatch }  from 'react-redux';
import { addTodo, clearTodos }  from '../store/actions';
import Container from '../components/Container';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import Input from '../components/Input';
import Form from '../components/Form';
import Filter from '../components/Filter';
import Modal from '../components/Modal';

function App() {
  const [ newTodo, setNewTodo ] = useState(null); 
  const [ isModalOpen, setModalOpen ] = useState(false);
  const { todos } = useSelector(state => state.todosReducer);
  const dispatch = useDispatch();
  
  const closeModal = () => {
    setModalOpen(false);
  }

  const openModal = () => {
    setModalOpen(true);
  }

  const handleAddTodo = () => {
    dispatch(addTodo(newTodo));
	setModalOpen(false);
  }
  
  const handleClearTodos =() => {
    localStorage.clear();
    dispatch(clearTodos());
  }  

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  }
   
  return (
    <Container>
	  <Title>to do list</Title>		
	    <Filter>
	      <button className="button button--filter" onClick={handleClearTodos}>Delete all</button>
	    </Filter>
	    <TodoList todos={todos}/>
	    <button className="button button--open" onClick={openModal} aria-label="add new todo"><span className="visually-hidden">Add new todo</span></button>
	    <Modal title="Add new todo" active={isModalOpen} close={closeModal} >		
	      <Form>
	        <Input name="newItem" placeholer="Add new todo" handle={handleChange} />
	        <button className="button button--add" onClick={handleAddTodo} >Add</button>
	      </Form>	  
	  </Modal>
    </Container>
  );
}

export default App;