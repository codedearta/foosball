/**
 * Created by sepp on 18.05.16.
 */
import PouchDB from 'pouchdb';

class PouchStore {
  constructor() {
    this.db = new PouchDB('foosball');
  }

  savePlayer(player) {
    this.db.get(player.user_id).catch(() =>
      this.db.put(Object.assign({ date: new Date().toISOString() }, player), player.user_id)
    );
  }

  saveGame(game) {
    var id = new Date().getTime().toString();
    this.db.put(Object.assign({ date: new Date().toISOString(), league: 'itv' }, game), id);
  }

  getAllPlayers() {
    return new Promise((resolve, reject) => {
      this.db.allDocs(
        {include_docs: true, descending: true},
        (err, result) => {
          if (!err) {
            resolve(result);
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
