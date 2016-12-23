import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {IndexLink} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Alert from 'react-bootstrap/lib/Alert';
import Helmet from 'react-helmet';
import {isLoaded as isInfoLoaded, load as loadInfo} from 'redux/modules/info';
import {push} from 'react-router-redux';
import config from 'config';
import {asyncConnect} from 'redux-connect';

export default class App extends Component {
    render() {
        const { user, notifs, children } = this.props;
        return (
            <div>
                <div>headers</div>
                <div>
                    {children}
                </div>
                <div className="well text-center">
                    Have questions? Ask for help{' '}
                    <a href="https://github.com/erikras/react-redux-universal-hot-example/issues" target="_blank">on Github</a>
                    {' '}or in the{' '}
                    <a href="https://discord.gg/0ZcbPKXt5bZZb1Ko" target="_blank">#react-redux-universal</a>
                    {' '}Discord channel.
                </div>
            </div>
        );
    }
}
