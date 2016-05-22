/**
 * Created by sepp on 18.05.16.
 */
import PouchDB from 'pouchdb';

class PouchStore {
  constructor() {
    this.db = new PouchDB('foosball');
  }

  savePlayer(player) {
    console.log(player);
    return new Promise((resolve, reject) => {
      this.db.put(
        { _id : player.name, date : new Date().toISOString(), name : player.name },
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

export default PouchStore;
