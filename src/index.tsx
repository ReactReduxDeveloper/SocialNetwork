import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {DialogsDataType, messageDataType, postsType, state} from "./Redux/State";

export type statetype = {
    statetype: {
        ProfilePages: {
            posts: Array<postsType>

        }
        Messagespages: {
            messageData: Array<messageDataType>
            DialogsData: Array<DialogsDataType>
        }

    }
}
ReactDOM.render(<App statetype={state}/>,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
