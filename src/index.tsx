import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {rootReducer} from "./store/reducers/root.reducer";
import {Provider} from "react-redux";

const store = createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? composeWithDevTools(applyMiddleware(thunk)) : compose(applyMiddleware(thunk)));


const wrapper =
    <Provider store={store}>
        <App/>
    </Provider>

ReactDOM.render(
    wrapper,
    document.getElementById('root')
);