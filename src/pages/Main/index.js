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

  };

  /**
   * Method for handling data
   * submission from form.
   */
  handleSubmit = () => {

  }

  render() {
      return(
        <div id="main-container">
          <form onSubmit={this.handleSubmit}>
            <img src={logo} alt=""/>
            <input placeholder="Criar um box" />
            <button type="submit">Criar</button>
          </form>
        </div>
      );
  }
}
