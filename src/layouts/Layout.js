import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from './Header'

export default class Layout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                <Header/>
                <div>Layout</div>
                {children}
            </div>
        );
    }
}
