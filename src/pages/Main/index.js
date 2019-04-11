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

    const response = await api.post('boxes', {
      title : this.state.newBox
    });

    console.log(response.data);
  }

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
              placeholder="Criar um box"
              value={ this.state.newBox }
              onChange={this.handleChange}
              />
            <button type="submit">Criar</button>
          </form>
        </div>
      );
  }
}
