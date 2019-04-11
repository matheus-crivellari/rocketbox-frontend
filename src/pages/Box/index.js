import React, { Component } from 'react';
import api from '../../services/api';
import { distanceInWords } from 'date-fns';
import en from 'date-fns/locale/en';
import Dropzone from 'react-dropzone';
import socket from 'socket.io-client';

// Material design icons
// it coould any ohter lib like FontAwesome
import { MdInsertDriveFile } from 'react-icons/md';

import './styles.css';
import logo from '../../assets/logo.svg'

export default class Box extends Component {
    state = {
        box : {}
    }

    // Fired as soon as the component is
    // mounted and ready in the DOM.
    async componentDidMount() {
        this.subscribeToNewFiles();

        const box = this.props.match.params.id;
        const response = await api.get(`boxes/${box}`);

        this.setState({
            box : response.data
        });
    }

    subscribeToNewFiles = () => {
        const box = this.props.mathc.params.id;
        const io = socket('http://omnistack-teco.herokuapp.com');

        io.emit('connectRoom', box);

    }

    handleUpload = (files) =>{
        files.forEach(file => {
            const data = new FormData();
            const box = this.props.match.params.id;

            data.append('file', file);
            api.post(`boxes/${box}/files`, data);
        });
    }

    render() {
        return (
            <div id="box-container">
                <header>
                    <img src={logo} alt="" />
                    <h1>{this.state.box.title}</h1>
                </header>

                <Dropzone onDropAccepted={this.handleUpload}>
                    {({ getRootProps, getInputProps }) => (
                        <div className="upload" { ...getRootProps() }>
                            <input { ...getInputProps() }></input>
                            <p>Drop files here or just click</p>
                        </div>
                    )}
                </Dropzone>

                <ul>
                    { this.state.box.files && this.state.box.files.map(file => (
                        <li key={file._id}>
                            <a href={file.url} className="fileInfo" target="_blank">
                                <MdInsertDriveFile size={24} color="#A5CFFF" />
                                <strong>{file.title}</strong>
                            </a>

                            <span>
                                {distanceInWords(file.createdAt, new Date(), {locale: en})}
                                {' '}ago
                            </span>
                        </li>
                    )) }
                </ul>
            </div>
        );
    }
}
