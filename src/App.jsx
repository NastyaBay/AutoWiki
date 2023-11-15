import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './Pages/Home';
import {Login} from './Pages/Login';
import {Account} from './Pages/Account';

function App() {

  return (
    <>
    <Router>
    <NaviBar /> 
       <Routes>
           <Route exact path="/" element={<Home />}/> 
           <Route exact path="/login" element={<Login />}/> 
           <Route path="/account" element={<Account />}/>
       </Routes>
    </Router>         
    </>     
  )
}

export default App