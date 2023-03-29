import {useState} from 'react';
import React from 'react';
import './App.css';

function App() {
  
//   const purple = "#8e44ad";
//   const [bg, setBg] = useState(purple);
//   const [name, setname] = useState('Click me');

//   const BgChange = ()=> {
//        let newBg = '#34495e';
//        setBg(newBg);
//        setname('Ouch !!!');
//   }
//   const BgBack = ()=> {
//     let newBg = '#24463e';
//     setBg(newBg);
//     setname('Oho !!! :)');
//}
   const [user, setUser] = useState('null');
   const load = ()  =>setUser({name: 'Jane'});
   const clear = () =>setUser(null);
  return (
    // <div className="App" style={{backgroundColor: bg}}>
    //       <button onClick={BgChange} onDoubleClick={BgBack}>
    //             {name}
    //       </button>
    // </div>
    <div className='App'>
        <div>
            <button onClick={load}>Load</button>
            <button onClick={clear}>Clear</button>
        </div>
        {user && <p>{user.name}</p>}
    </div>
  );
}

export default App;
