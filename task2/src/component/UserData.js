import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { UserName } from "../redux/user/UserAction";
function UserData(props) {
  const [name, setName] = useState("");
  return (
    <div className="cont3">
      <form className="edit3">
     <input 
        type="text"
        name="username"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name"
      />
       <button className="login--button" onClick={(e) =>{ props.UserName(name)
       e.preventDefault()}}>Submit</button>
      </form>                                
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userName: state.userName.userName,
  };                         
};
const mapDispatchToProps = (dispatch) => {
  return {
    UserName: (name) => dispatch(UserName(name)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserData);
  

