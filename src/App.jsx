
import './App.css';
import MainPage from './components/MainPage';
import TestPage from './components/TestPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/test" element={<TestPage/>}></Route>
        </Routes>
      </Router>
      
  

   
  );
}

export default App;
