import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGUSER } from "../redux/login/loginType";
export default function Login({ settoken }) {
  const dispatch = useDispatch();
  const ref1 = useRef();
  const ref2 = useRef();
  const Navigate = useNavigate();
  const getData = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:9000/login", {
        username: ref1.current.value,
        password: ref2.current.value,
      })
      .then((res) => {
        if (res.data) {
          dispatch({ type: LOGUSER, payload: ref1.current.value });
          sessionStorage.setItem("token", res.data);
          alert("Login Successful");
          Navigate("/que");
        } else alert("Login Unsuccessful");
      });
  };
  return (
    <div className="app">
      <div className="bg"> </div>
      <form>
        <header>
          <img src="https://assets.codepen.io/3931482/internal/avatars/users/default.png?format=auto&height=80&version=1592223909&width=80" />
        </header>
        <div className="inputs">
          <input
            className="loginput"
            type="email"
            name="email"
            id="email"
            placeholder="username or email"
            required
            ref={ref1}
          />
          <input
            className="loginput"
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            ref={ref2}
          />
        </div>
      </form>
      <footer>
        <button
          className="login--button"
          onClick={(e) => {
            getData(e);
          }}
        >
          Login
        </button>
      </footer>
    </div>
  );
}


