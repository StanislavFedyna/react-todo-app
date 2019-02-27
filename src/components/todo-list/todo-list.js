import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted }) => { //Array with all DATA (array) from App.js, destruction a get the array

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;


    return (
      <li key={id} className="list-group-item">
        { <TodoListItem {...itemProps } onDeleted = {() => onDeleted(id)} />  /*Створення власної події onDeleted та передача його todo-list-item*/}
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
