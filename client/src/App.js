import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import ProShop from "./components/ProShop";
import ProShopCard from "./components/ProShopCard";
import Specials from "./components/Specials";
import League from "./components/League";
import Food from "./components/Food";
import Party from "./components/Party";
import PartyCard from "./components/PartyCard";
import CreateParty from "./components/CreateParty";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import CreateShop from "./components/CreateShop";
const App = () => {
  const [shopSelect, setShopSelect] = useState([]);
  const [partySelect, setPartySelect] = useState([]);
  const Navigate = useNavigate;
  const getShop = async () => {
    const res = await axios.get("http://localhost:3001/proshop");
    setShopSelect(res.data);
  };

  const getParty = async () => {
    const res = await axios.get("http://localhost:3001/party");
    setPartySelect(res.data);
    console.log(getParty);
  };
  const handlePartySelect = (party) => {
    setPartySelect(party);
    Navigate(`/party/${party._id}`);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/proshop"
            element={<ProShop getShop={getShop} shopSelect={shopSelect} />}
          />
          <Route path="shop-card/:id" element={<ProShopCard />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/food" element={<Food />} />
          <Route path="/leagues" element={<League />} />
          <Route
            path="/Party"
            element={<Party getParty={getParty} partySelect={partySelect} />}
          />
          <Route
            path="/party-card/:id"
            handlePartySelect={handlePartySelect}
            element={<PartyCard />}
          />
          <Route path="party/party-add" element={<CreateParty />} />
          <Route path="proshop/shop-add" element={<CreateShop />} />
        </Routes>
      </main>
    </div>
  );
};
export default App;
