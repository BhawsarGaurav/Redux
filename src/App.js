import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './component/Home';
import Registration from './component/Registration';
import Login from './component/Login';
function App() {
  return (
    <div className="App">
     <Routes>
       <Route exact path="/" element={<Login/>}></Route>
       <Route exact path="/home" element={<Home/>}></Route>
       <Route exact path="/registration" element={<Registration/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
