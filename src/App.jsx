
import './App.css';
import MainPage from './components/MainPage';
import Profile from './components/Profile';
import Homes from './components/Homes';
import Coordinator from './components/Coordinator';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/homes" element={<Homes/>}></Route>
          <Route path="/coordinator" element={<Coordinator/>}></Route>
        </Routes>
      </Router>
      
  

   
  );
}

export default App;
