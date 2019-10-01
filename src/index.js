import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from './reducers/index';
import MainRoute from './routers/MainRoute';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import * as serviceWorker from './serviceWorker';


const Jsx=(
    <Provider store={store} >
        {/* <PersistGate loading={null} persistor={persistor} > */}
            <MainRoute />
        {/* </PersistGate> */}
    </Provider>
)
ReactDOM.render(Jsx,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
