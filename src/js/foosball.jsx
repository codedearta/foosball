import React from 'react';
import Form from 'react-router-form';
import PouchStore from './pouchStore.js';

class Foosball extends React.Component {
  constructor(props) {
    super(props);
    this.saveGame = this.saveGame.bind(this);
    this.state = { error: null, players: [] };
  }

  componentDidMount() {
    PouchStore.getAllPlayers()
      .then((savedPlayers) => {
        this.setState({ error: null, players: savedPlayers });
      })
      .catch((err) => this.setState({ error: err })
    );
  }

  saveGame(e, players) {
    const game = {
      winningTeam: this.state.winningTeam,
      teamRed: [players.player_red_1, players.player_red_2],
      teamBlue: [players.player_blue_1, players.player_blue_2],
    };
    PouchStore.saveGame(game);
  }

  optionsFor(players) {
    return players.map((player) =>
      <option key={player.user_id} value={player.user_id}>{player.nickname}</option>
    );
  }

  render() {
    return (
      <Form id="game" to="/stats" onSubmit={this.saveGame} >
        <div id="team_red" className="team">
          <div className="players">
            <select id="player_red_1">
              {this.optionsFor(this.state.players)}
            </select>
            <select id="player_red_2">
              {this.optionsFor(this.state.players)}
            </select>
          </div>
          <div id="won_red" className="action">
            <button
              type="submit"
              value="red_won"
              onClick={() => this.setState(Object.assign({ winningTeam: 'red' }, this.state))}
            >WON !!!</button>
          </div>
        </div>
        <div id="team_blue" className="team">
          <div className="players">
            <select id="player_blue_1">
              {this.optionsFor(this.state.players)}
            </select>
            <select id="player_blue_2">
              {this.optionsFor(this.state.players)}
            </select>
          </div>
          <div id="won_blue" className="action">
            <button
              type="submit"
              value="blue_won"
              onClick={() => this.setState(Object.assign({ winningTeam: 'blue' }, this.state))}
            >WON !!!</button>
          </div>
        </div>
      </Form>
    );
  }
}

export default Foosball;
