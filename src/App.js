import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from './components/LandingPage';
import ViewCategory from './components/ViewCategory';
import ViewItem from './components/ViewItem';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/:id' element={<ViewItem />} />
          <Route path='/category/:category' element={<ViewCategory />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
