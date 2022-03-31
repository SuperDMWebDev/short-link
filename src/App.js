
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import {useSelector} from 'react-redux'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Manager from './pages/manager/Manager'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Info from './pages/info/Info';
function App() {
return(

  <div className="App">
  <Router>  
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/header" element={<Header/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/user" element={<Info/>}></Route>
        <Route path="/manager" element={<Manager/>} ></Route>
    </Routes>
  </Router>

  </div>
)
}

export default App;
