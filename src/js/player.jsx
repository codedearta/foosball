import React from 'react';
import Form from 'react-router-form';
import PouchStore from './pouchStore.js';

class Player extends React.Component {

  constructor(props) {
    super(props);
    this.savePlayer = this.savePlayer.bind(this);
    this.state = { error: null };
  }

  // componentWillReceiveProps(nextProps) {
  //   const { state } = this.props.location;
  //   const { state: nextState } = nextProps.location;
  //   if (nextState && nextState.error && (!state || state.error !== nextState.error)) {
  //     this.setState({ error: nextState.error });
  //   }
  // }

  savePlayer(e, player) {
    if (!player.name || player.name === '') {
      e.preventDefault();
      this.setState(
        {
          error: 'please type in a player name.',
        }
      );
    } else {
      new PouchStore().savePlayer(player)
        .then((savedPlayer) => console.log(`save player:"${savedPlayer}" to pouch`))
        .catch((err) => console.log(err));
    }
  }

  render() {
    // let {location} = this.props
    // let player = location.state && location.state.player || {};
    return (
      <Form to="/stats" onSubmit={this.savePlayer} >
        {this.state.error && <p className="error">{this.state.error}</p>}
        <label htmlFor="name" value="Name" >player name</label>
        <input type="text" id="name" />
        <button type="submit" value="new_player" >ADD</button>
      </Form>
    );
  }
}

Player.propTypes = {
  location: React.PropTypes.object,
};

export default Player;
