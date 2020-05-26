import React from 'react';
import TodoItem from '../components/TodoItem'

function TodoList({ todos }) {
  console.log(todos);

  const getList = () => {
    let list = [];
	if(todos){
      todos.map(todosItem => {
	    list.push(<TodoItem key={`todo-${todosItem.id}`} todo={todosItem} />);
	  });
	} else list.push(<li>List is empty</li>);
	return list;
  }

  return (
    <ul>
      {getList()}
    </ul>
  );
}

export default TodoList;
