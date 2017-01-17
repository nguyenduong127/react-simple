import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

export default class Header extends Component {
    render() {
        const { user, notifs, children } = this.props;
        return (
            <div className="row border-bottom white-bg">
              <nav className="navbar navbar-static-top" role="navigation">
                  <div className="navbar-header">
                      <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                          <i className="fa fa-reorder"></i>
                      </button>
                      <a href="/" className="navbar-brand">Blog</a>
                  </div>
                  <div className="navbar-collapse collapse" id="navbar">
                      <ul className="nav navbar-nav">
                          <li>
                              <Link aria-expanded="false" role="button" to="/login">Login</Link>
                          </li>
                          <li>
                              <Link aria-expanded="false" role="button" to="/home">Home</Link>
                          </li>
                          <li>
                              <Link aria-expanded="false" role="button" to="/home1">Home1</Link>
                          </li>
                      </ul>
                      <ul className="nav navbar-top-links navbar-right">
                          <li><a href='#'>Logout</a> </li>
                      </ul>
                  </div>
              </nav>
          </div>
        );
    }
}
