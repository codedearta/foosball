import React from 'react';
import Form from 'react-router-form';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.showLock = this.showLock.bind(this);
  }

  showLock() {
    // We receive lock from the parent component in this case
    // If you instantiate it in this component, just do this.lock.show()
    this.props.lock.show();
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
            <tr>
              <td>My-Yen</td>
              <td>5</td>
              <td>5</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Sepp</td>
              <td>5</td>
              <td>3</td>
              <td>0.6</td>

            </tr>
            <tr>
              <td>Olga</td>
              <td>5</td>
              <td>2</td>
              <td>0.4</td>
            </tr>
            <tr>
              <td>Vlad</td>
              <td>5</td>
              <td>2</td>
              <td>0.4</td>
            </tr>
          </table>

          <Form id="stats_form" to="/foosball">
            <button type="submit" value="new_game">NEW GAME</button>
          </Form>

          <Form id="new_player_form" to="/player">
            <button type="submit" value="new_player">NEW PLAYER</button>
          </Form>

          <button type="submit" value="sign_in" onClick={this.showLock} >SIGN IN</button>
        </div>
      );
    }
    return null;
  }
}

Stats.propTypes = {
  lock: React.PropTypes.object,
};

export default Stats;
