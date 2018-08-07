import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {applyMiddleware, createStore} from "redux";
import {loadState, saveState} from "./App.localStorage";
import {Provider} from "react-redux";
import {throttle} from 'lodash';
import logger from "redux-logger";
import appReducer from './App.reducer';

const persistedState = loadState();

const store = createStore(appReducer, persistedState, applyMiddleware(logger));

// Save State is throttled. State is saved at most once every second
store.subscribe(throttle(() => {
    saveState({
        surveyReducer: store.getState().surveyReducer
    })
}, 1000));


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
