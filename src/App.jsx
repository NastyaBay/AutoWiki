import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './Pages/Home';
import {Login} from './Pages/Login';
import {Account} from './Pages/Account';
import {Registration} from './Pages/Registration';
import {Auto} from './Pages/Auto';
import {AutoAdd} from './Pages/AutoAdd';
import {AutoGuide} from './Pages/AutoGuide';
import {AutoEdit} from './Pages/AutoEdit';


function App() {

  return (
    <>
    <Router>
    <NaviBar /> 
       <Routes>
           <Route exact path="/" element={<Home />}/> 
           <Route exact path="/login" element={<Login />}/> 
           <Route path="/account" element={<Account />}/>
           <Route path="/registration" element={<Registration />}/>
           <Route path="/auto" element={<Auto />}/>
           <Route path="/autoAdd" element={<AutoAdd />}/>
           <Route path="/auto/electric" element={<AutoGuide />}/>
           <Route path="/auto/edit" element={<AutoEdit />}/>
       </Routes>
    </Router>         
    </>     
  )
}

export default App