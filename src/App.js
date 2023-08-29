
import './App.css';
import Feed from './components/Feed';
import Leftsidebar from './components/Leftsidebar';
import SearchPart from './components/SearchPart';
// import {useState} from 'react'
// import Login from './components/Login';
function App() {
  // const [isLoggedIn ,setIsLoggedIn] = useState(false)
  
  return (
    <div >
      {/* <Login/> */}
     {/* {isLoggedIn?<div className="App"> */}
     <div className="App">
     <Leftsidebar/>
     <Feed/>
     <SearchPart/>
     </div>
     {/* :<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} */}
    </div>
  );
}

export default App;
