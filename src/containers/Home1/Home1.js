import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import config from 'config';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

export default class Home1 extends Component {

  static propTypes = {
    online: PropTypes.bool
  };

  render() {
    const { online } = this.props;
    return (
      <div >
        <Helmet title="Home 1" />
        <div className="container">
          Hom1
        </div>
      </div>
    );
  }
}
