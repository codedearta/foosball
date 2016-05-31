/**
 * Created by sepp on 18.05.16.
 */
import PouchDB from 'pouchdb';

class PouchStore {
  constructor() {
    this.db = new PouchDB('foosball2');
  }

  savePlayer(player) {
    // console.log('savePlayer',player)
    return this.db.get(player.user_id).catch(() =>
      this.db.put(
        Object.assign(
          {
            date: new Date().toISOString(),
            type: 'player'
          },
          player),
        player.user_id
      )
    );
  }

  saveGame(game) {
    var id = new Date().getTime().toString();
    return this.db.put(
      Object.assign(
        {
          date: new Date().toISOString(),
          league: 'itv',
          type: 'game',
          _id: id
        },
        game
      )
    );
  }

  getAllPlayers() {
    return new Promise((resolve, reject) => {
      this.db.allDocs(
        {include_docs: true, descending: true},
        (err, result) => {
          if (!err) {
            resolve(result.rows.filter(row => row.doc.type === 'player').map(row => row.doc));
          }
          else{
            reject(err);
          }
        }
      );
    });
  }

  getAllGames() {
    return new Promise((resolve, reject) => {
      this.db.allDocs(
        {include_docs: true, descending: true},
        (err, result) => {
          if (!err) {
            resolve(result.rows.filter(row => row.doc.type === 'game').map(row => row.doc));
          }
          else{
            reject(err);
          }
        }
      );
    });
  }
}

export default new PouchStore();
