import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const ProShopCard = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const initialState = {
    name:"",
    email:"",
    bname:"",
    bcompany:"",
    weight:""}

     const [formState, setFormState] = useState(initialState)
      const handleChange = event => {
      console.log("Change")
      setFormState({...formState, [event.target.id] : event.target.value});
    }
    const handleSubmit = async event => {
      event.preventDefault()
      let res = await axios.put(`http://localhost:3001/proshop/${id}`, formState)
      navigate("/proshop")
    }

return ( 
      <div className="Shop-Card">
        <form onSubmit={handleSubmit}>
        <input placeholder="name" id="name" onChange={handleChange}/>
        <input placeholder="email" id="email" onChange={handleChange}/>
        <input placeholder="ball" id="bname" onChange={handleChange}/>
        <input placeholder="company" id ="bcompany" onChange={handleChange}/>
        <input placeholder="weight" id ="weight" onChange={handleChange}/>

        <button type="submit">Save</button>
        </form> 
      </div>
)
}

export default ProShopCard