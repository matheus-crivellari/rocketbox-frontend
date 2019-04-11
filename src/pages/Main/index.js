import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './styles.css';

export default class Main extends Component {
  /**
   * Contains all data that
   * is handled by this component.
   *
   * Everytime data is changed in state
   * component's render method is called.
   */
  state = {
    newBox : '',
  };

  /**
   * Method for handling data
   * submission from form.
   */
  handleSubmit = async e => {
    e.preventDefault();

    // Sends a post request through axios
    // Awaits for the response
    const response = await api.post('boxes', {
      title : this.state.newBox
    });

    // Redirects to a new route passing
    // response's id as route parameter
    this.props.history.push(`/box/${response.data._id}`);
  }

  /**
   * Method for handling
   * input value changing.
   */
  handleChange = e => {
    this.setState({
      newBox : e.target.value
    });
  }

  render() {
      return(
        <div id="main-container">
          <form onSubmit={this.handleSubmit}>
            <img src={logo} alt=""/>
            <input
              placeholder="Create a box"
              value={ this.state.newBox }
              onChange={this.handleChange}
              />
            <button type="submit">Create</button>
          </form>
        </div>
      );
  }
}
