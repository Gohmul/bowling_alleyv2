const PartyCard = (props) => {

return (
  <div className="partycard">
    {
      props.partySelect?.map((party) => (
      <div className="party-Card">
        <form>
        <input placeholder="name"/>
        <h3 placeholder="email"></h3>
        <h3 placeholder="childs name"></h3>
        <h3 placeholder="package number"></h3>
        <h3 placeholder="date"></h3>
        <h3 placeholder ></h3>
        </form> 
      </div>
      ))
    } 
  </div>
)
}

export default PartyCard