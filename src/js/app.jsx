import React from 'react';
import Authentication from './authentication.js';
import PouchStore from './pouchStore.js';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = { profile: null };
  }

  componentDidMount() {
    Authentication.getProfile(Authentication.getIdToken())
      .then(profile =>
        PouchStore.savePlayer(profile)
          .then(() => this.setState({ profile }))
          .catch(error => this.setState({ error }))
      );
  }

  render() {
    if (!this.props.children) {
      return null;
    }
    if(this.state.error) {
      return (<div id="foosballApp">
        <div id="header">
          <i className="fa fa-futbol-o" aria-hidden="true"></i>FOOSBALL CHALLENGE<br></br>
        </div>
        <div>{this.state.error}</div>
      </div>);
    }
    if (!this.state.profile) {
      return (<div id="foosballApp">
        <div id="header">
          <i className="fa fa-futbol-o" aria-hidden="true"></i>FOOSBALL CHALLENGE<br></br>
        </div>
        <div>load user profile...</div>
      </div>);
    }
    
    return (
      <div id="foosballApp">
        <div id="header">
          <i className="fa fa-futbol-o" aria-hidden="true"></i>FOOSBALL CHALLENGE<br></br>
        </div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.array,
};

export default App;
