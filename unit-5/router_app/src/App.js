import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import ProductId from './components/ProductId';
import Register from './components/Register';
import Products from './components/Products';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/productid" element={<ProductId/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
