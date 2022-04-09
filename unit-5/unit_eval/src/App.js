import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login/" element={<Login/>}/>
      </Routes>
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
  );
}

export default App;
