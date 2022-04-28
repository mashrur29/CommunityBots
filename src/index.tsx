import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import WebSocket from "isomorphic-ws";
import util from "util";
import req from 'request-promise';
import {startChats} from './juji';

//console.log('JUJI connection establishing')

startChats().then(
    function (v1) {
        var ws1 = v1[0];
        var chatInfo1 = v1[1];
        var chatAgent1 = v1[2];
        var chatTopic1 = v1[3];

        //console.log('URL setup, now starting ........')

        ReactDOM.render(
            <App
                ws1={ws1}
                chatAgent1={chatAgent1}
                chatTopic1={chatTopic1}
                chatInfo1={chatInfo1}
            />,
            document.getElementById('root')
        );
        return true;

    }
).catch(error => console.error(error));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

