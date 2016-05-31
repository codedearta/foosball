import React from 'react';
import Authentication from './authentication.js';
import PouchStore from './pouchStore.js';

class SecureComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (!this.isAuthenticated()) {
      const idToken = Authentication.getIdToken();
      if (idToken) {
        Authentication.getProfile(idToken)
          .then(profile =>
            PouchStore.savePlayer(profile)
              .then(() => this.setState(Object.assign({ profile }, this.state)))
          .then(() =>
            PouchStore.getAllPlayers()
              .then(savedPlayers =>
                this.setState(Object.assign({ players: savedPlayers }, this.state))))
          .catch(error => this.setState(Object.assign({ error }, this.state))));
      } else {
        Authentication.showLogin();
      }
    }
  }

  isAuthenticated() {
    const authenticated = !!this.state.profile;
    // console.log('authenticated', authenticated);
    return authenticated;
  }
}

export default SecureComponent;
