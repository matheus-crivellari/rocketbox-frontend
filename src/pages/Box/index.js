import React, { Component } from 'react';

// Material design icons
// it coould any ohter lib like FontAwesome
import { MdInsertDriveFile } from 'react-icons/md';

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
                    <a href="" className="fileInfo">
                        <MdInsertDriveFile size={24} color="#A5CFFF" />
                        <strong>Desafio.pdf</strong>
                    </a>

                    <span>há 3 minutos atrás</span>
                </li>
            </ul>
        </div>
      );
  }
}
