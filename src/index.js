'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

let contentNode = document.createElement('div');
document.getElementsByTagName('body')[0].appendChild(contentNode);

ReactDOM.render(<App />, contentNode);
