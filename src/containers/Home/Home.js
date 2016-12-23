import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import config from 'config';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

export default class Home extends Component {

  static propTypes = {
    online: PropTypes.bool
  };

  render() {
    const { online } = this.props;
    return (
      <div >
        <Helmet title="Home" />
        <div className="container">
          <p>This starter boilerplate app uses the following technologies:</p>
          <h3>Features demonstrated in this project</h3>
          <h3>From the author</h3>
          <p>
            I cobbled this together from a wide variety of similar "starter" repositories. As I post this in June 2015,
            all of these libraries are right at the bleeding edge of web development. They may fall out of fashion as
            quickly as they have come into it, but I personally believe that this stack is the future of web development
            and will survive for several years. I'm building my new projects like this, and I recommend that you do,
            too.
          </p>
          <p>Thanks for taking the time to check this out.</p>
          <p>– Erik Rasmussen</p>
        </div>
      </div>
    );
  }
}
