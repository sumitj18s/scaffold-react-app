import createAsyncActionType from '../utils/reduxUtils'
import { takeLatest } from 'redux-saga/effects'
// ACTIONS
const FETCH_API= createAsyncActionType('my-app/api/FETCH');
const FETCH_SEC_API= createAsyncActionType('my-app/api/FETCH_SEC');

const initialState = Object.freeze({
  items: {},
  lastSync: '',
});

// Action Creators
export const fetchAPI = (url)=>{
  return {
    type: FETCH_API.PENDING,
    url
  }
}

export const fetchSecondAPI = (url)=>{
  return {
    type: FETCH_SEC_API.PENDING,
    url
  }
}

// Reducer
export default function placeholderReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_API.PENDING:
      return Object.assign({},state, {count: action.url});
    case FETCH_SEC_API.PENDING:
      return Object.assign({},state, {count: action.url});
    default: return state;
  }
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function* fetchData(){
  yield takeLatest(FETCH_API.PENDING, ()=>{console.log('saga called');})
}