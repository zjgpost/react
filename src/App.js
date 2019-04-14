import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './component/Clock';

const myStyle = { color: 'red', textAlign: 'center' };

function Message(props) {
    const { message } = props;
    return <h1>{ message }</h1>;
}

function App(props) {
    const { message } = props;
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Message message={ message } />
                <h2 style={myStyle}>欢迎来到启明课堂！</h2>
                <p>
                    Edit
                    <code>src/App.js</code>
                    and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Clock />
        </div>
    );
}

export default App;
