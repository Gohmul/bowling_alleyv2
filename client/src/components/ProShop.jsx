import { useState,useEffect } from "react";
import axios from "axios";

const ProShop = (props) => {
const [showInput, setShowInput] = useState(false)
 useEffect(() => {
  props.getShop()
 }, []);

 const handleDelete = (id) => {
  axios.delete(`http://localhost:3001/proshop/${id}`);
  props.getShop()
};

const handleEdit = () => {
  setShowInput(!showInput)
}
  return (
    <div className="shopCard">
      {
        props.shopSelect.shops?.map((proShop) => (
        <div className="shop-Card"><form>
          <h3>Name:{proShop.name}</h3>
          <h3>Email:{proShop.email}</h3>
          <h3>Ball:{proShop.bname}</h3>
          <h3>Company:{proShop.bcompany}</h3>
          </form>
          <button className="delete" onClick={() => handleDelete(proShop._id)}>Delete</button>
          

        </div>
        ))
      } 
    </div>
  )
};

export default ProShop;
