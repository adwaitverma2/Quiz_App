import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {
  const navi = useNavigate();
  const nav = useNavigate();
  const ref3 = useRef();
  const ref4 = useRef();
  const [hide, setHide] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();
   function handleClick() {
    axios
      .post("http://127.0.0.1:9000/data", {
        UserName: ref1.current.value,
        Password: ref2.current.value,
      })
      .then((res) => {
        alert(res.data.message);
      });
    nav("/log");
  }
  const adminLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:9000/Admindata", {
        AdminName: ref3.current.value,
        Password: ref4.current.value,
      })
      .then((res) => {
        if (res.data) {
          sessionStorage.setItem("token", res.data);
          alert(" Successful");
          navi("/admindata");
        } else alert(" Unsuccessful");
      });
  };


  function hideshow() {
    setHide(true);
  }
  return (
    <div className="app">
      <div className="bg"> </div>
      {!hide ? (
        <>
          <form>
            <header>
              <img src="https://assets.codepen.io/3931482/internal/avatars/users/default.png?format=auto&height=80&version=1592223909&width=80" />
            </header>
            <div className="inputs">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" required ref={ref1} />
              <label for="password">Password</label>
              <input type="password" name="password" id="password" ref={ref2} />
            </div>
          </form>
          <footer className="button--alignment">
            <button className="login--button" onClick={handleClick}>
              Register
            </button>
            <button className="login--button" onClick={hideshow}>
              Admin Login
            </button>
          </footer>
        </>
      ) : (
        <div>
          <div className="bg"></div>
          <form>
            <header>
              <img src="https://assets.codepen.io/3931482/internal/avatars/users/default.png?format=auto&height=80&version=1592223909&width=80" />
            </header>
            <div className="inputs">
              <input className="loginput" type="email" name="email" id="email" placeholder="email"required ref={ref3}/>
              <input type="password"name="password"id="password" placeholder="Password"required ref={ref4}/>
            </div>
          </form>
          <footer>
            <button className="login--button" onClick={adminLogin}>
              Admin Login
            </button>
          </footer>
        </div>
      )}
    </div>
  );
}
