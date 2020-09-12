import fetch from 'axios';
import * as constants from '../constants/AppConstants'


export function componentDidMount(data) {
    return fetch(constants.API_URL, {
        method: 'POST',
        mode: 'CORS',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}