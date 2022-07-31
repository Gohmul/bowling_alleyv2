import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const CreateParty = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const initialState = {
    name:"",
    email:"",
    cname:"",
    package:"",
    date:"",
    time:""};
     const [formState, setFormState] = useState(initialState)
      const handleChange = event => {
      console.log("Change")
      setFormState({...formState, [event.target.id] : event.target.value});
    }
    const handleSubmit = async event => {
      event.preventDefault()
      let res = await axios.post(`http://localhost:3001/party`, formState)
      navigate("/party")
    }

return ( 
      <div className="party-Card">
        <form onSubmit={handleSubmit}>
        <input placeholder="name" id="name" onChange={handleChange}/>
        <input placeholder="email" id="email" onChange={handleChange}/>
        <input placeholder="childs name" id="cname" onChange={handleChange}/>
        <input placeholder="package number" id="package" onChange={handleChange}/>
        <input placeholder="date" id ="date" onChange={handleChange}/>
        <input placeholder="time" id ="time" onChange={handleChange}/>

        <button type="submit">Save</button>
        </form> 
      </div>
)
}

export default CreateParty