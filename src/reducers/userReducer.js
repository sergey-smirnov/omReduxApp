'use strict';

import lodash from 'lodash';
import React from 'react';
import Immutable from 'immutable';
import { Actions as UserActions } from '../constants/user';

const InitialState = Immutable.Map({
    authenticated: false,
    profile: null
});

export function user(state = InitialState, action) {
    switch (action.type) {
        case UserActions.AUTHENTICATE:
            return state
                .set('profile', { name: action.name })
                .set('authenticated', true);
        case UserActions.UNAUTHENTICATE:
            return state
                .delete('profile')
                .set('authenticated', false);
        default:
            return state;
    }
}
