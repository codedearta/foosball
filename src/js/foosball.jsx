import React from 'react';
import Players from './players.jsx';
import Form from 'react-router-form';
import PouchStore from './pouchStore.js';

class Foosball extends React.Component {
  constructor(props) {
    super(props);
    this.saveGame = this.saveGame.bind(this);
    this.state = { error: null };
    this.initPlayers();
  }

  initPlayers() {
    PouchStore.getAllPlayers()
      .then((savePlayers) => {
        this.players = savePlayers.rows.map(doc => doc.id);
        this.forceUpdate();
      })
      .catch((err) => console.log(err));
  }

  saveGame(e, game) {
    console.log(e, game);
    // if (!player.name || player.name === '') {
    //   e.preventDefault();
    //   this.setState(
    //     {
    //       error: 'please type in a player name.',
    //     }
    //   );
    // } else {
    //   const storPromise = PouchStore.savePlayer(player);
    //   storPromise
    //     .then((savedPlayer) =>
    //       console.log(`save player:"${savedPlayer}" to pouch`))
    //     .catch((err) => {
    //       // console.log(err);
    //       e.preventDefault();
    //       this.setState(
    //         {
    //           error: err,
    //         }
    //       );
    //     });
    // }
  }

  render() {
    return (
      <Form id="game" to="/stats" onSubmit={this.saveGame} >
        <div id="team_red" className="team">
          <div className="players">
            <Players id="players_red_1" players={this.players} />
            <Players id="players_red_2" players={this.players} />
          </div>
          <div className="action">
            <button type="submit" value="red_won" >WON !!!</button>
          </div>
        </div>
        <div id="team_blue" className="team">
          <div className="players">
            <Players id="players_blue_1" players={this.players} />
            <Players id="players_blue_2" players={this.players} />
          </div>
          <div id="won_blue" className="action">
            <button type="submit" value="blue_won" >WON !!!</button>
          </div>
        </div>
      </Form>
    );
  }
}

export default Foosball;
