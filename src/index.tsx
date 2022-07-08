import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {AppStateType, store, StoreType} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";


export let rerenderReactDom = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}
                 />
        </BrowserRouter>
        , document.getElementById('root'));
}


rerenderReactDom()
store.subscribe(rerenderReactDom)


serviceWorker.unregister();
