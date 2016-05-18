/* eslint import/no-unresolved: "off" */
require('!style!css!sass!../scss/styles.scss');

const ReactDOM = require('react-dom');
const markup = require('./players.jsx');

const playersRed1Container = document.getElementById('players_red_1');
const playersRed2Container = document.getElementById('players_red_2');
const playersBlue1Container = document.getElementById('players_blue_1');
const playersBlue2Container = document.getElementById('players_blue_2');
ReactDOM.render(markup, playersRed1Container);
ReactDOM.render(markup, playersRed2Container);
ReactDOM.render(markup, playersBlue1Container);
ReactDOM.render(markup, playersBlue2Container);
