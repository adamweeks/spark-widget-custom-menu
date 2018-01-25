import React, {Component} from 'react';

import Login from './Login';
import SpaceWidget from './SpaceWidget';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      authorized: false,
      token: null
    };

    this.handleAuthorize = this.handleAuthorize.bind(this);
  }

  handleAuthorize(token) {
    this.setState({
      authorized: true,
      token
    });
  }

  render() {
    return (
      <div>
        Spark Widget OAuth + Custom Menu Demo <br />
        {
          !this.state.authorized &&
          (
            <Login onAuthorization={this.handleAuthorize} />
          )
        }
        {
          this.state.authorized &&
          (
            <SpaceWidget token={this.state.token} />
          )
        }
      </div>
    );
  }
}

export default Main;
