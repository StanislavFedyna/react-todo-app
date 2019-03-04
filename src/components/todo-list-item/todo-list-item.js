import React, {Component} from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component{

 
  render(){
    const { label, onDeleted, onToggleDone, onToggleImportant, important, done } = this.props; //Label from todo-list.js
    
    let classNames = 'todo-list-item';
    // Check state done
    if(done){
      classNames += ' done';
    }
    // Check state important
    if(important){
      classNames += ' important'
    }

    return (
      <span className={classNames}>

        <span className="todo-list-item-label" onClick={onToggleDone}> {label} </span>

        <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
 
        <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}>  
          <i className="fa fa-trash-o"/>
        </button>

      </span>
    );
  };
  }

  