import { Actions as UserActionsTypes } from '../constants/user';

const UserActions = {
    Authenticate: function(name, password) {
        return {
            type: UserActionsTypes.AUTHENTICATE,
            name,
            password
        };
    },

    Unauthenticate: function() {
        return {
            type: UserActionsTypes.UNAUTHENTICATE
        };
    }
};

export default UserActions;
