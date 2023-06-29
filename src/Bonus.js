import React,{useState} from 'react';

function Bonus() {
    const[bonus,setBonus] = useState({points:0});

    const increament = () =>{
        setBonus({points:bonus.points+1})
    }
  return (
    <div style={{border:"solid 1px black",padding:"10px"}}>
      <h3>Bonus Points</h3>
      <h4>Total Points {bonus.points}</h4>
      <button onClick={increament}>increament</button>
    </div>
  );
}

export default Bonus;
