import React from 'react';
import './item-add-form.css';

export default class ItemAddForm extends React.Component{

  render(){
    const {onAdded} = this.props;

    return (<div className='item-add-form'> <button onClick={onAdded('stas')} className='btn btn-outline-dark btn-block'> Add Item </button> </div> )
  }
}