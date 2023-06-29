//reducer

import {init,inc,dec,incByAmount,increaseBonus} from '../Actions/Action.js'

export function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
      case init:
          return {amount:action.payload}
      case inc:
        //immutability
        //we have to make a new copy of the object not to edit the original object
        return { amount: state.amount + 1 };
      case dec:
        return { amount: state.amount - 1 };
      case incByAmount:
        return { amount: state.amount + action.payload };
      default:
          return state;
    }
  }
  
  
  
  //second reducer
  
  export function bonusReducer(state={points:0},action){
    switch(action.type){
      case incByAmount:
          return {points:state.points+action.payload}
      case increaseBonus:
          return {points:state.points+1};
      default:
        return state;
    }    
  }
  