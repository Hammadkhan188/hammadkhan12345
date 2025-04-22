
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './Component/Register';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Register/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
