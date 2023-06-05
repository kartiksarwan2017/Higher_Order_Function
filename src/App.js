import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Coins from "./components/Coins/Coins";
import Exchanges from "./components/Exchanges/Exchanges.jsx";
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Coins />} />
          <Route exact path="/exchange" element={<Exchanges />} />
        </Routes>   
      </Router>
    </>
  );
}

export default App;
