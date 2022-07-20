import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import {
  RegisterUser,
  UserAdmin,
  Admindata,
} from "../redux/register/RegisterAction";
import { useNavigate } from "react-router-dom";
function Register({ RegisterUser, UserAdmin, Admindata }) {
  const navi = useNavigate();
  const navigate = useNavigate();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  useEffect(() => {
    UserAdmin();
  }, []);
  const [hide, setHide] = useState(false);
  function handleClick() {
    RegisterUser({
      UserName: ref1.current.value,
      Password: ref2.current.value,
    });
    navigate("/log");
  }

  function adminLogin(e) {
    e.preventDefault();
    let flag = false;
    Admindata.forEach((elm) => {
      if (
        elm.AdminName === ref3.current.value &&
        elm.Password === ref4.current.value
      )
        flag = true;
    });
    if(flag)  {
      alert("AdminLogin Successful")
      navi("/admindata")}
      else alert("AdminLogin Unsuccessful");
    ;
  }
function hideshow() {
    setHide(true);
  }
  return (
    <div className="cont">
      {!hide ? (
        <form className="edit-form">
          <h1>Register</h1>
          <label for="email">Email</label>
          <input type="email" name="email" id="email" required ref={ref1} />
          <label for="password">Password</label>
          <input type="password" name="password" id="password" ref={ref2} />

          <button onClick={handleClick}>Register</button>
          <button onClick={hideshow}>Click here if you are admin</button>
        </form>
      ) : (
        <div className="cont2">
          <form className="edit2">
            <h1>Admin Login</h1>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required ref={ref3} />
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              ref={ref4}
            />
           <button onClick={adminLogin}>Login</button>
          </form>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    Regdata: state.RegUser,
    Admindata: state.RegUser.AdmUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    RegisterUser: (newUser) => dispatch(RegisterUser(newUser)),
    UserAdmin: () => dispatch(UserAdmin()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
