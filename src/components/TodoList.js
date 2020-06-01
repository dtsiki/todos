import React from 'react';
import TodoItem from '../components/TodoItem';

function TodoList({ todos }) {
  const getList = () => {
    let list = [];
	if(todos){
      todos.map((todosItem, id) => {
	    list.push(<TodoItem id={id} key={`todo-${id}`} todo={todosItem} />);
	  });
	} else if(todos.length === 0) list.push(<li className="todos__item--empty">List is empty</li>);
	return list;
  }

  return (
    <ul className="todos">
      {getList()}
    </ul>
  );
}

export default TodoList;
