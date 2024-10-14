import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
// import { dark } from '@clerk/themes'
import './App.css'
import LandingPage from './components/LandingPage'
import DeployUI from './components/DeployUI';
function App() {

  return (

    <Router>
       {/* <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/deploy" element={<DeployUI />} />
      </Routes>
    </Router>
  );


}

export default App