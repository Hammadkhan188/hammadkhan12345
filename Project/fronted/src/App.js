
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './Component/Register';
import Showdata from './Component/Showdata';
import Login from './Component/Login';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/get' element={<Showdata/>}/>
        <Route path='/log' element={<Login/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
