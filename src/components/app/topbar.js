import React, { PropTypes } from 'react'

import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import { red800, green800 } from 'material-ui/styles/colors';

const TopBar = ({ authenticated }) => (
  <AppBar title="One More Redux Application"
          iconElementRight={
            <FontIcon className="material-icons" color={authenticated ? green800 : red800}>done</FontIcon>
          }
  />
);

TopBar.propTypes = {
    authenticated: PropTypes.bool.isRequired
}

export default TopBar
