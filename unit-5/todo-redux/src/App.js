import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Items from './components/Items';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/items/:id" element={<Items />}></Route>
      </Routes>
    </>
  );
}

export default App;
