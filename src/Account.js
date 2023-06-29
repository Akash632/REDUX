import React from 'react';
import { useState } from 'react';
import { increament,decreament,increamentByAmount, getAccount } from './Redux/Actions/Action';
import { useDispatch, useSelector } from 'react-redux';

function Account({store}) {
    const [account,setAccount] =useState({amount:0});
    const [value,setValue] = useState(0);
    const amount= useSelector(state=>state.account.amount);
    const dispatch = useDispatch();


    const increamentFun = ()=>{
        setAccount({amount:account.amount+1})
    }

    const decreamentFun = ()=>{
        setAccount({amount:account.amount-1})
    }

    const increamentByAmount = () =>{
        let amount = Number(value)
        setAccount({amount:account.amount+amount});
    }
  return (
    <div style={{border:"solid 1px black",padding:"10px"}}>
      <h4>
        Account Component
      </h4>
      <h3>Amount : {amount}</h3>
      <button onClick={()=>dispatch(increament())}>Increament</button>
      <button onClick={()=>dispatch(decreament())}>Decreament</button>
      <input type='text' onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={()=>dispatch(increamentByAmount())}>increament by amount</button>
      <button onClick={()=>dispatch(getAccount(1))}>increament by user</button>
    </div>
  );
}

export default Account;
