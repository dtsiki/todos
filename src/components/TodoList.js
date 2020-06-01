import React from 'react';
import TodoItem from '../components/TodoItem';

function TodoList({ todos }) {
  const getList = () => {
    let list = [];
	if(todos.length === 0) list.push(<li key="empty" className="todos__item--empty">List is empty</li>);
	else if(todos){
      todos.map((todosItem, id) => {
	    list.push(<TodoItem id={id} key={`todo-${id}`} todo={todosItem} />);
	  });
	} return list;
  }

  return (
    <ul className="todos">
      {getList()}
    </ul>
  );
}

export default TodoList;
