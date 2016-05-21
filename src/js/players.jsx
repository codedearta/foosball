import React from 'react';

class Players extends React.Component {
  render() {
    if (!this.props.players) {
      return null;
    }
    return (
      <select>
        {
          this.props.players.map((player) =>
            <option key={player} value={player}>{player}</option>
          )
        }
      </select>
    );
  }
}

Players.propTypes = {
  players: React.PropTypes.array,
};

export default Players;
