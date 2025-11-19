import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AnimeDetails from "./pages/AnimeDetails";
// import Favorites from "./pages/Favorites";
import Trending from "./pages/Trending";
import Seasonal from "./pages/Seasonal";
import About from "./pages/About";
import SearchResults from "./pages/SearchResults";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/about" element={<About />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/seasonal" element={<Seasonal />} />

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
