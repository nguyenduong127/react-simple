import * as types from '../../actions/Types'

const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null
};

export default function reducer(state = initialState, action = {}){
    switch (action.type){
        case types.LOGIN_REQUEST:
            return Object.assign({}, state, {
                'isAuthenticating': true,
                'statusText': null
            });
        case types.LOGOUT_REQUEST:
            return Object.assign({}, state, {
                'isAuthenticated': false,
                'token': null,
                'userName': null,
                'statusText': 'You have been successfully logged out.'
        });
    }
    return state;
}
