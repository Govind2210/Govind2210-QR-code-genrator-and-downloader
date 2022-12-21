import './App.css';
import Qrcorder from './Components/Qr-corder';
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Qrcorder/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
