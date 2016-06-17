'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

require('../assets/styles/app.less');

let contentNode = document.createElement('div');
document.body.appendChild(contentNode);

ReactDOM.render(<App />, contentNode);
