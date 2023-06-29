// import Account from './Account';
// import './App.css';
// import Bonus from './Bonus';

// function App({store}) {

//   // console.log(store.getState())
//   return (
//     <div className="App">x
//       <div style={{border:"solid 1px black"}}>
//       <h4>App</h4>
//       <h3>Current Amount : {store.getState().account.amount}</h3>
//       <h3>Total Bonus : {store.getState().bonus.points}</h3>
//       </div>
//       <Account store={store}></Account>
//       <Bonus></Bonus>
//     </div>
//   );
// }

// export default App;

import { useSelector } from 'react-redux';
import Account from './Account';
import './App.css';
import Bonus from './Bonus';

function App() {

 const amount= useSelector(state=>state.account.amount);
 const points= useSelector(state=>state.bonus.points)


  // console.log(store.getState())
  return (
    <div className="App">
      <div style={{border:"solid 1px black"}}>
      <h4>App</h4>
      <h3>Current Amount : {amount}</h3>
      <h3>Total Bonus : {points}</h3>
      </div>
      <Account></Account>
      <Bonus></Bonus>
    </div>
  );
}

export default App;
