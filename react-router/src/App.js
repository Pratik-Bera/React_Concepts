import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import Error from './Component/Error';
function App() {
  return (
    <div className="App">
    {/* <h1 style={{"color":"red"}}>This is App Component.</h1> */}
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route index element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
