import './App.css';
import MainPage from './components/MainPage/MainPage';
import Profile from './components/Profile';
import Homes from './components/Homes';
import Coordinator from './components/Coordinator';
import About  from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='main bg-gradient-to-b from-rose-950 via-slate-800 to-slate-800 text-lime-800 font-serif min-h-screen'>
            <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/homes" element={<Homes/>}></Route>
          <Route path="/coordinator" element={<Coordinator/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Router>
      
    </div>

  

   
  );
}


export default App;
