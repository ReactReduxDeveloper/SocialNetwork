import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {AddPost, AppStateType, state, UpdateNewPostChange} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";


export let rerenderReactDom = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} AddPost={AddPost} UpdateNewPostChange={UpdateNewPostChange}/>
        </BrowserRouter>
        , document.getElementById('root'));
}


rerenderReactDom(state)

serviceWorker.unregister();
