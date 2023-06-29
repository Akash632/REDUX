import axios from 'axios';
export const inc = 'increament';
export const dec = 'decreament';
export const incByAmount='IncreamentByAmount';
export const init = 'init';
export const increaseBonus='increaseBonus';
export const getUserActionPending = 'getUserAction/pending';
export const getUserActionFulfilled = 'getUserAction/fulfilled';
export const getUserActionRejected = 'getUserAction/rejected';

export function getAccount(id){
    return async (dispatch,getState)=>{
      const {data} = await axios.get(`http://localhost:3000/account/${id}`);
      dispatch(initUser(data.amount));
    }
  }


export function increament(){
    return {type:inc, payload:100};
}

export function decreament(){
    return {type:dec, payload:100};
}

export function increamentByAmount(){
    return {type:incByAmount, payload:100};
}

export function increamentByBonus(){
    return {type:increaseBonus}
}

export function initUser(value){
      return {type:inc,payload:value}
  }
  