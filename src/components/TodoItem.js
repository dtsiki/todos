import React from 'react';
import { useDispatch }  from 'react-redux';
import { toggleTodo, deleteTodo }  from '../store/actions';
import Toggle from '../components/Toggle'

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  
  const handleDelete = () => {
	dispatch(deleteTodo(todo.id));
  }

  const handleToggle = () => {
	dispatch(toggleTodo(todo.id));
  }  
  
  return (
    <li className="todos__item">
      <Toggle completed={todo.completed} handle={handleToggle}>Change status</Toggle>
      <p className="todos__text">{todo.text}</p>
	  <button className="button button--delete" onClick={handleDelete}  aria-label="delete todo"><span className="visually-hidden">Delete</span></button>
    </li>
  );
}

export default TodoItem;