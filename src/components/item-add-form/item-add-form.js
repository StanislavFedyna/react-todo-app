import React from 'react';
import './item-add-form.css';

export default class ItemAddForm extends React.Component{
  state = {
    label: ''
  }
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  }
  onSubmit = (e) => {
    this.props.onAdded('hello world')
  }
  render(){

    return (
    <form className='item-add-form d-flex'> 
    <input type="text" className='form-control' onChange={this.onLabelChange} placeholder='add new task'/>
      <button className='btn btn-outline-dark btn-block'>  Add Item </button> 
    </form> )
  }
}