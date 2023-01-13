import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
