import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './components/LandingPage'
import DeployUI from './components/DeployUI';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/deploy" element={<DeployUI />} />
      </Routes>
    </Router>
  );

  
}

export default App