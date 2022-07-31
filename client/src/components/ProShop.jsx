import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import App from "../App";
import { Link } from "react-router-dom";
const ProShop = (props) => {
  let {id} = useParams()
  let Navigate = useNavigate
  const [shopSelected, setShopSelected] = useState({});


 useEffect(() => {
  props.getShop()
 }, []);

 const handleDelete = (id) => {
  axios.delete(`http://localhost:3001/proshop/${id}`);
  props.getShop()
};

  return (
    <div className="shopCard">
       <Link to="shop-add"><button>Add</button></Link> 
      {
        props.shopSelect.shops?.map((proShop) => (
          <Link to={`/shop-card/${proShop._id}`}>
        <div className="shop-Card"><form>
          <h3>Name:{proShop.name}</h3>
          <h3>Email:{proShop.email}</h3>
          <h3>Ball:{proShop.bname}</h3>
          <h3>Company:{proShop.bcompany}</h3>
          </form>
          <button className="delete" onClick={() => handleDelete(proShop._id)}>Delete</button>
          </div>
        </Link>
        ))
      } 
    </div>
  )
};

export default ProShop;
