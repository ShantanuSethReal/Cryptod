import "./App.css";
import HomePage from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./Pages/DashBoard";
import CoinPage from "./Pages/Coin";
import ComparePage from "./Pages/Compare";
import WatchList from "./Pages/WatchList";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Cryptod">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
