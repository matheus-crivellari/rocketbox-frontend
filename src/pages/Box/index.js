import React, { Component } from 'react';

import './styles.css';
import logo from '../../assets/logo.svg'

export default class Box extends Component {
  render() {
      return(
        <div id="box-container">
            <header>
                <img src={logo} alt=""/>
                <h1>Rocketbox</h1>
            </header>

            <ul>
                <li>
                    <a href="">

                    </a>
                </li>
            </ul>
        </div>
      );
  }
}
