/**
 * Created by sepp on 18.05.16.
 */
const PouchDB = require('pouchdb');
const db = new PouchDB('foosball');

module.exports = () => {
  db.put(
    {
      _id: new Date().toISOString(),
      red: ['Sepp', 'My-Yen'],
      blue: ['Vlad', 'Olga'],
      won: 'red',
    },
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
};
