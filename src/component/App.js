import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from '../store/store';
import Container from "./Container";
import ExternalAccessofStore from '../component/ExternalAccessofStore';
class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Container />
                </Provider>
                <ExternalAccessofStore />
            </div>
        );
    }
}

module.exports = App;