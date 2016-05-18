const React = require('react');
const players = ['My-Yen', 'Sepp', 'Olga', 'Vlad', 'Anna', 'Dimtri'];
const markup = <select>{players.map((player) => <option key={player} value="{player}">{player}</option>)}</select>;
module.exports = markup;

