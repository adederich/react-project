import React, { Component } from 'react';
import './AddItemForm.css';

class AddItemForm extends Component {

  handleAddItemSubmit = (e) => {
    e.preventDefault();
    
    var data = {
    	id: this.state.id.trim(),
		active: this.active.trim(),
		color: this.color.trim(),
		images_collected: this.images_collected.trim(),
		last_command: this.last_command.trim(),
		deorbit_dt: this.deorbit_dt.trim(),
    }
    
    
    this.props.handleSubmit(this.submitInput.value);
    this.setState({
      id: '',
      active: '',
      color: '',
      images_collected: '',
      last_command: '',
      deorbit_dt: ''
    });
    
  }
  

  render() {

    return (

      <div className="add-item-form">
      	<h2>Put a Bird on It</h2>
        <form onSubmit={this.handleAddItemSubmit}>
          <input
            type="text"
            name="id"
            autoFocus
            placeholder="Id"
            ref={(input) => { this.submitInput = input; }}
          /><br /><br />
          <input
            type="text"
            name="active"
            autoFocus
            placeholder="True or False"
            ref={(input) => { this.submitInput = input; }}
          /><br /><br />
          <input
            type="text"
            name="color"
            autoFocus
            placeholder="Color"
            ref={(input) => { this.submitInput = input; }}
          /><br /><br />
          <input
            type="text"
            name="images_collected"
            autoFocus
            placeholder="Images Collected"
            ref={(input) => { this.submitInput = input; }}
          /><br /><br />
          <input
            type="text"
            name="last_command"
            autoFocus
            placeholder="Last Command"
            ref={(input) => { this.submitInput = input; }}
          /><br /><br />
          <input
            type="text"
            name="deorbit_dt"
            autoFocus
            placeholder="Deorbit Date"
            ref={(input) => { this.submitInput = input; }}
          /><br /><br />
          
          <input type="button" name="submit" value="Submit" />
        </form>
        <br /><br />
      </div>
    );
  }
}

export default AddItemForm;
