import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends React.Component{

  maxId = 100;

  state = {
      todoData : [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Have a lunch')
      ]
    }
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({ todoData })=>{
      const idx = todoData.findIndex((el)=> el.id === id);

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, ...after];

      return {
        todoData: newArray
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem]; //додавання елементу без зміни помереднього
      return {
        todoData : newArr
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todoData})=>{
      const idx = todoData.findIndex((el)=> el.id === id);

      //1.Update Object
      const oldItem = todoData[idx];
      const newItem = {...oldItem, done: !oldItem.done};

      //2. Constructor new Array
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, newItem, ...after];

      return{
        todoData: newArray
      }
    })
  };

  onToggleDone = (id) => {
    console.log('Toggle done', id)
  };


  render(){
    const {todoData} = this.state;

    return (     
    <div className="todo-app"> 
      <AppHeader toDo={1} done={3} />
    <div className="top-panel d-flex">
      <SearchPanel />
      <ItemStatusFilter />
    </div>
      <TodoList 
      onToggleImportant={this.onToggleImportant} 
      onToggleDone={this.onToggleDone}
      onDeleted={this.deleteItem} 
      todos={todoData} 
      />
      <ItemAddForm onAdded={this.addItem}/>
  </div>
  )}
}
