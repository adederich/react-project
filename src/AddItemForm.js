import React, { Component } from 'react';
import './AddItemForm.css';


class AddItemForm extends Component {
	
	
  constructor (props) {
    super(props);
    this.state = {
	    active: '',
	    color: '',
	    images_collected: '',
	    last_command: '',
	    deorbit_dt: ''
	    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    fetch('http://localhost:3000/doves/', {
	    method: 'POST',
	    headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json',
	    },
	    body: JSON.stringify({
		  id: '',
	      active: this.state.active,
	      color: this.state.color,
	      images_collected: this.state.images_collected,
	      last_command: this.state.last_command,
	      deorbit_dt: this.state.deorbit_dt,
	    })
	})    
	
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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="active"
            autoFocus
            placeholder="True or False"
            value={this.state.active}
            onChange={this.handleInputChange}
          /><br /><br />
          <input
            type="text"
            name="color"
            autoFocus
            placeholder="Color"
            value={this.state.color}
            onChange={this.handleInputChange}
          /><br /><br />
          <input
            type="text"
            name="images_collected"
            autoFocus
            placeholder="Images Collected"
            value={this.state.images_collected}
            onChange={this.handleInputChange}
          /><br /><br />
          <input
            type="text"
            name="last_command"
            autoFocus
            placeholder="Last Command"
            value={this.state.last_command}
            onChange={this.handleInputChange}
          /><br /><br />
          <input
            type="text"
            name="deorbit_dt"
            autoFocus
            placeholder="Deorbit Date"
            value={this.state.deorbit_dt}
            onChange={this.handleInputChange}
          /><br /><br />
          
          <input type="submit" name="submit" value="Submit" />
        </form>
        <br /><br />
      </div>
    );
  }
}

export default AddItemForm;
