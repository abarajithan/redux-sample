import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from '../store/store';
import Container from "./Container";
import ExternalAccessofStore from '../component/ExternalAccessofStore';
import BindActionCreatorComponent from '../component/BindActionCreatorComponent';

class App extends Component {
    render() {
        return (
            <div className='container m-t-10'>
                <Provider store={store}>
                    <Container />
                    <BindActionCreatorComponent />
                </Provider>
                <ExternalAccessofStore />
            </div>
        );
    }
}

module.exports = App;