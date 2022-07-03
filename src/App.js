import { Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './Pages/Avaleht';
import Kontakt from './Pages/Kontakt';
import Meist from './Pages/Meist';
import Menuu from './Pages/Menuu';

function App() {
  return (
      <div>
        <Menuu />
        <Routes>
          <Route exact path='/' element={ <Avaleht /> } />
          <Route exact path='kontakt' element={ <Kontakt /> } />
          <Route exact path='meist' element={ <Meist /> } />
        </Routes>
      </div>
  );
}

export default App;
