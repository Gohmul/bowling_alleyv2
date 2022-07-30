import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import App from "../App";
// import PartyCard from "./PartyCard";
const Party = (props) => {
let {id} = useParams()
let Navigate = useNavigate
const [partySelected, setPartySelected] = useState({});
const initialState = {
  name:"",
  email:"",
  cname:"",
  package:"",
  date:"",
  time:""};
  

const Form = () => {
  const [formState, setFormState] = useState([]);

}
  
useEffect(() => {
    props.getParty();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/party/${id}`);
    props.getParty()
  };

  const handleChange = event => {
    console.log("Change")
    // setFormState({...formState, [event.party.id] : event.target.value});
    Navigate(`/party/${id}`)
  }

// setSelectParty = () => {
//   const handlePartySelect = (party) => {
//     const naviagte = useNavigate
//     setPartySelected(party);
//     naviagte(`/party/${party._id}`)
//     }  
//       console.log(setSelectParty)
//   }
  


  // const handleSubmit = async event => {
  //   event.preventDefault()
  //   let res = await axios.put(`http://localhost:3001/party/${id}`)
  //   setFormState(initialState)
  // }


  return (
    <div className="partycard">
      {
        props.partySelect.partys?.map((party) => (
        <div className="party-Card" onClick={() => handleChange(party)}>
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
        ))
      } 
    </div>
  )
}

export default Party;
