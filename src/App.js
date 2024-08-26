import { Route, Routes, Redirect } from 'react-router-dom';
import Failureview from './Components/Failureview/Failureview';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Login from './Components/Loginpage/Login';
import Onebox from './Components/Onebox/Onebox';

import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/reachinboxapp" element={<Login />} />
      <Route path="onebox" element={<Onebox />} />
    </Routes>
  );
}

export default App;
