import Navbar from "./components/Navbar";
import "./App.scss";
import Footer from "./components/Footer";
import FeatureRedirect from "./components/FeatureRedirect";
import FeatureItems from "./components/FeatureItems";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FeatureRedirect />
      <FeatureItems />
      <Footer />
    </div>
  );
}

export default App;
