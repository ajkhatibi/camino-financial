import { GET_REQUEST } from '../actions/types';

const INITIAL_STATE = { data: null }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_REQUEST:
            return { data: action.payload }
        default:
            return state;
    }
}