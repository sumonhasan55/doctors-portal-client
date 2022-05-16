import logo from './logo.svg';
import './App.css';
import Navber from './Pages/Shared/Navber';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Reviews from './Pages/Reviews/Reviews';
import Appointment from './Pages/Home/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';



function App() {
  return (
    <div>
     <Navber></Navber>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='/reviews' element={<Reviews></Reviews>}></Route>
       <Route path='/appointment' element={
         <RequireAuth>
            <Appointment></Appointment>
         </RequireAuth>
      }></Route>
      
       

     </Routes>

    

    </div>
  );
}

export default App;
