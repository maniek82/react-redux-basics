
import {USER_UPDATE, SHOW_ERROR} from '../actions/users-actions';



export default function usersReducer(state='', {type, payload}) {
    switch (type) {
        case USER_UPDATE:
            return payload.user;
        case SHOW_ERROR:
        return payload.error
        default:
            return state;

    }
}