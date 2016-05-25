import React from 'react';
import Authentication from './authentication.js';
import PouchStore from './pouchStore.js';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = { profile: { nickname: 'no name' } };
  }

  componentDidMount() {
    Authentication.getProfile(Authentication.getIdToken()).then(profile => {
      this.setState({ profile });
      PouchStore.savePlayer(profile);
    }
    );
  }

  render() {
    if (!this.props.children) {
      return null;
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
