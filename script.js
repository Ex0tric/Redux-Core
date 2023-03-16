import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';



// const history = []

// Action Names Constant

const init = "INIT";
const inc = "INCREMENT";
const dec = "DECREMENT";
const incByNum = "INCBYNUM";

// Store 
const store = createStore( combineReducers({accountReducer,bonusReducer}), applyMiddleware(logger.default, thunk.default) )

// Reducers
function accountReducer(state=0, action){
  switch(action.type){
    case init : return action.payload;
    case inc : return state + 1;
    case dec : return state - 1;
    case incByNum : return state + action.payload;
    default : return state;
  }
}

function bonusReducer(state=0, action){
  switch(action.type){
    // case init : return action.payload;
    case inc : return state + 1;
    // case dec : return state - 1;
    // case incByNum : return state + action.payload;
    default : return state;
  }
}

// Action Creators
function getUser(id){
  return async (dispatch, getState) => {
    const {data} = await axios.get(`http://localhost:3000/account/${id}`)
    dispatch(initUser(data.amount))
  }

}

let initUser = (value) =>{return {type: init, payload: value}}
let increase = () =>{return {type: inc}}
let decrease = () =>{return {type: dec}}
let increaseByNum = (value) =>{return {type: incByNum, payload: value}}

setTimeout
(()=>{
  
  store.dispatch(increase())

},2000)
