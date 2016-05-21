import React from 'react';

class Players extends React.Component {
  render() {
    const players = ['My-Yen', 'Sepp', 'Olga', 'Vlad', 'Anna', 'Dimtri'];
    return (
      <select>
        {
          players.map((player) =>
            <option key={player} value={player}>{player}</option>
          )
        }
      </select>
    );
  }
}

export default Players;