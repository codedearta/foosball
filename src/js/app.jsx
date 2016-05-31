import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profile: null };
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
