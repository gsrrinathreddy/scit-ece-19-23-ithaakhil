import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Hobbies from './pages/Hobbies';
import Experience from './pages/Experience';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Aboutus" element={<Aboutus/>}/>
        <Route path="Hobbies" element={<Hobbies/>}/>
        <Route path="Experience" element={<Experience/>}/>
        <Route path="Qualifications" element={<Qualification/>}/>
        <Route path="Skills" element={<Skills/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
