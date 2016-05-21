/* eslint import/no-unresolved: "off" */
// require('!style!css!sass!../scss/styles.scss');
import '!style!css!sass!../scss/styles.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import offline from './offline.js';
offline();

import Foosball from './foosball.jsx';
// ReactDOM.render(<Foosball/>, document.getElementById('foosballApp'));
ReactDOM.render(<Foosball/>, document.body);