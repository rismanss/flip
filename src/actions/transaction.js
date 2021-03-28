import axios from 'axios';
import * as actionTypes from './actionTypes';

const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const api = 'https://nextar.flip.id/frontend-test';
export const getData = () => {
  return dispatch => {
    axios.get(`${proxyurl}${api}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(result => {
      dispatch({
        type: actionTypes.GET_DATA,
        payload: result
      });
    }).catch(err => {
      dispatch({
        type: actionTypes.ERROR_DATA,
        payload: err
      });
    });
  };
};