import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Restaurant: </label>
          <input onChange={this.handleOnChange} type='text' value={this.state.text}placeholder='Restaurant Name..'></input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
