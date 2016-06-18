import React, { PropTypes } from 'react'

import RaisedButton from 'material-ui/RaisedButton';

const LoginForm = ({ authenticated, onSuccess }) => (
   <RaisedButton label="Primary" primary={true} onClick={onSuccess} />
);

LoginForm.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    onSuccess: PropTypes.func.isRequired
}

export default LoginForm
