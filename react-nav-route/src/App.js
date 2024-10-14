
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Error from './Component/Error';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>} >
      <Route index element={<Home/>} />
      <Route path='/about' element={<><About/></>} />
      <Route path='/contact' element={<Contact/>} />
      </Route>
      
      <Route path='/*' element={<Error/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
