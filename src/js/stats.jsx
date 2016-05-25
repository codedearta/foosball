import React from 'react';
import Form from 'react-router-form';
import PouchStore from './pouchStore.js';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stats: [] };
  }

  componentDidMount() {
    PouchStore.getAllGames().then(games => {
      PouchStore.getAllPlayers().then(players => {
        const stats = players.map(player => {
          const gamesPlayed = this.gamesFor(player, games);
          const gamesWon = this.pointsFor(player, games);
          const ratio = gamesPlayed > 0 ? gamesWon / gamesPlayed : 0;
          return {
            name: player.nickname,
            games: gamesPlayed,
            points: gamesWon,
            ratio,
          };
        }).sort((statA, statB) => statB.ratio - statA.ratio);
        console.log(stats);
        this.setState({ stats });
      });
    });
  }

  pointsFor(player, games) {
    return games.filter(game => {
      if (game.winningTeam === 'red') {
        return game.teamRed.some(userId => userId === player.user_id);
      }
      return game.teamBlue.some(userId => userId === player.user_id);
    }).length;
  }

  gamesFor(player, games) {
    return games.filter(game =>
      game.teamBlue.some(userId => userId === player.user_id) ||
      game.teamRed.some(userId => userId === player.user_id)
    ).length;
  }

  render() {
    if (this.props) {
      return (
        <div id="stats">
          <div id="stats_title">
            STATS
          </div>

          <table id="stats_table">
            <tr>
              <th>Name</th>
              <th>Games</th>
              <th>Points</th>
              <th>Ratio</th>
            </tr>
            {this.state.stats.map(stat => <tr>
              <td>{stat.name}</td>
              <td>{stat.games}</td>
              <td>{stat.points}</td>
              <td>{stat.ratio}</td>
            </tr>)}
          </table>

          <Form id="stats_form" to="/foosball">
            <button type="submit" value="new_game">NEW GAME</button>
          </Form>
        </div>
      );
    }
    return null;
  }
}

export default Stats;
