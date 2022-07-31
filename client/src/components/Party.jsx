import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import App from "../App";
import { Link } from "react-router-dom";
// import PartyCard from "./PartyCard";
const Party = (props) => {
let {id} = useParams()
let Navigate = useNavigate
const [partySelected, setPartySelected] = useState({});

  
useEffect(() => {
    props.getParty();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/party/${id}`);
    props.getParty()
  };

  return (
    <div className="partycard">
     <Link to="party-add"><button>Add</button></Link> 
      {
        
        props.partySelect.partys?.map((party) => (
          <Link to={`/party-card/${party._id}`}>
        <div className="party-Card">
          <form>
          <h3>Name:{party.name}</h3>
          <h3>Email:{party.email}</h3>
          <h3>Childs Name:{party.cname}</h3>
          <h3>Package:{party.package}</h3>
          <h3>Date:{party.date}</h3>
          <h3>Time:{party.time}</h3>
          </form> <div>
          <button className="delete" onClick={() => handleDelete(party._id)}>Delete</button>
          </div>
        </div>
        </Link>
        ))
      } 
    </div>
  )
}

export default Party;
