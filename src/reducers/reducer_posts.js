import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      //console.log(action.payload.data);
      return _.mapKeys(action.payload.data, 'id'); //mapKeys in loadash converts [{id:1, post:ABC},{id:2, posts:XYZ}] to {"1":{id:1, post:ABC}, "2":{id:2, post:XYZ}}
    default:
      return state;

  }
}
