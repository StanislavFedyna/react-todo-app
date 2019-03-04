import React, {Component} from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component{

  constructor(){
    super();
    this.state = {
      done: false,
      important : false
    }
  }
  
   onLabelClick = () => {
    this.setState(({done})=>{
      return { done: !done }
    })
   };
   onMarkImportant = () =>{
     this.setState(({important}) => {
       return{ important: !important }
     })
   }
   deleteElement = () =>{
     return console.log('deleted')
   }
 
  render(){
    const { label, onDeleted } = this.props; //Label from todo-list.js
    const {done, important} = this.state;
    
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

        <span className="todo-list-item-label" onClick={this.onLabelClick}> {label} </span>

        <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>
 
        <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}>  
          <i className="fa fa-trash-o"/>
        </button>

      </span>
    );
  };
  }

  