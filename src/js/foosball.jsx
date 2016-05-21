import React from 'react';
import Players from './players.jsx';

class Foosball extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="foosballApp">
          <div id="header">
            <i className="fa fa-futbol-o" aria-hidden="true"></i>FOOSBALL CHALLENGE
          </div>

          <form id="game" action="stats.html">

            <div id="team_red" className="team">
              <div className="players">
                <Players id="players_red_1"></Players>
                <Players id="players_red_2"></Players>
              </div>
              <div className="action">
                <button type="submit" value="red_won" target="stats.html">WON !!!</button>
              </div>
            </div>

            <div id="team_blue" className="team">
              <div className="players">
                <Players id="players_blue_1"></Players>
                <Players id="players_blue_2"></Players>
              </div>
              <div id="won_blue" className="action">
                <button type="submit" value="blue_won" target="stats.html">WON !!!</button>
              </div>
            </div>
        </form>
      </div>
    );
  }
}

export default Foosball;