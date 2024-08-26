import { Route, Routes } from 'react-router-dom';
import Login from './Components/Loginpage/Login';
import Onebox from './Components/Onebox/Onebox';

import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/reachinboxappk" element={<Login />} />
      <Route path="/reachinboxappk/onebox" element={<Onebox />} />
    </Routes>
  );
}

export default App;
