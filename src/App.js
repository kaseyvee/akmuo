import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from './components/LandingPage';
import ViewCategory from './components/ViewCategory';
import ViewItem from './components/ViewItem';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/:id' element={<ViewItem />} />
          <Route path='/category/:category' element={<ViewCategory />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
