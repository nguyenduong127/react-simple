import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

export default class Main extends Component {
    render() {
        const {children} = this.props;
        return (
            <div>
                <div>Main layout</div>
                <div className="well text-center">
                    Header
                </div>
                <div>
                    {children}
                </div>
            </div>
        );
    }
}
