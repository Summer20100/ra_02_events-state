import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Filter from './components/Filter/Filter'
import Layouts from './components/Layouts/Layouts'
import Dropdown from './components/Dropdown/Dropdown'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <div className="App">
            <Navbar />
            <Filter />
            <Layouts />
            <Dropdown />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
