import React from 'react';
import Players from './players.jsx';
import Form from 'react-router-form';

class Foosball extends React.Component {
  constructor(props) {
    super(props);
    this.players = ['My-Yen', 'Sepp', 'Olga', 'Vlad', 'Anna', 'Dimtri'];
  }
  render() {
    return (
      <Form id="game" to="/stats" >
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
