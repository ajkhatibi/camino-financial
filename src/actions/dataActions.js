import { GET_REQUEST } from './types';
import axios from 'axios';

export const dataActions = () => async dispatch => {
    const { data } = await axios.get('https://raw.githubusercontent.com/react-d3/react-d3-example/master/simple/data/user_sample.json');
    dispatch({ type: GET_REQUEST, payload: data })

}