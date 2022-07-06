import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {state} from "./Redux/State";

import {rerenderReactDom} from "./Render";

rerenderReactDom(state)

serviceWorker.unregister();
