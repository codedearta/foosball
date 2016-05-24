import React from 'react';
import Auth0Lock from 'auth0-lock';

class App extends React.Component {

  componentWillMount() {
    this.lock = new Auth0Lock('y3ng0ydD00ZO865h3Xp3P1MtqKyCNKqJ', 'dearta.eu.auth0.com');
    this.setState({ idToken: this.getIdToken() });
  }

  getIdToken() {
    let idToken = localStorage.getItem('userToken');
    const authHash = this.lock.parseHash(window.location.hash);
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token;
        localStorage.setItem('userToken', authHash.id_token);
      }
      if (authHash.error) {
        console.log('Error signing in', authHash);
        return null;
      }
    }
    return idToken;
  }

  render() {
    if (!this.props.children) {
      return null;
    }

    const children = React.cloneElement(this.props.children, { lock: this.lock });

    return (
      <div id="foosballApp">
        <div id="header">
          <i className="fa fa-futbol-o" aria-hidden="true"></i>FOOSBALL CHALLENGE
        </div>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.array,
};

export default App;
