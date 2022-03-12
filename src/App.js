
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import {useSelector} from 'react-redux'
import Login from './pages/login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
function App() {
return(

  <div className="App">
  <Router>  
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/header" element={<Header/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>
  </Router>

  </div>
)
}

export default App;
