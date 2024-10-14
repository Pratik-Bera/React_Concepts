import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Admin from "./components/Admin";
import Authentication from "./components/Authentication";

function App() {
  return (
    <div className="App">
      {/* <h2> Hey Pratik</h2> */}
      {/* <Contacts/> */}
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="/contact" element={<Contacts/>}/>  
          <Route path="/login" element={<Login/>}/>  
          <Route path="/about" element={<About/>}/>  
          <Route path="/admin" element={<Authentication Component={Admin}/>}/> 
          </Route> 
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
