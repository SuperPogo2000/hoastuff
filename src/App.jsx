
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Profile from './components/Profile';
import Homes from './components/Homes';
import Coordinator from './components/Coordinator';
import About  from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/homes" element={<Homes/>}></Route>
          <Route path="/coordinator" element={<Coordinator/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Router>
      
  

   
  );
}

export default App;
