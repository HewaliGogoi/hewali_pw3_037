import './App.css';
import AllProducts from './components/AllProducts';
import Home from './components/Home';
import Product from './components/Product';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Error_404 from './components/Error_404';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/allproducts' element={<AllProducts/>}></Route>
          <Route path='/allproducts/:idNum' element={<Product/>}></Route>
          <Route path='/error' element={<Error_404/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
