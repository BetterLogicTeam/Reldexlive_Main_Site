import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Main from './Components/Main/Main';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Main />}></Route>
       <Route path='/Login' element={<Login />}></Route>
       <Route path='/Register' element={<Register />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
