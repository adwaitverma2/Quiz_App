import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import QuesData from "./component/QuesData";
import Register from "./component/Register";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import AdminData from "./component/AdminData";
// import { useEffect, useState } from "react";
// import jwt from "jsonwebtoken";
// import { Buffer } from 'buffer';
// global.Buffer = Buffer;
function App() {
  // const [token, setToken] = useState(false);
  // useEffect(() => {
  //   const data = sessionStorage.getItem("token");
  //   if (data)
  //   jwt.verify(data, "aaa", (err, verifiedJwt) => {
  //       if (err) {
  //         setToken(false);
         
  //       } else {
  //         setToken(true);
         
  //       }
  //     });
  // }, []);

  
  return (
    // <>
      <div className="App">
        <BrowserRouter>
        <Routes>
   
            {/* { token ?  */}
             
              {/* // <> */}
                <Route path="que" element={<QuesData />} />
                <Route path="admindata" element={<AdminData />} />
              {/* </> */}
             : 
              {/* <> */}
                <Route path="/" element={<Register />} />
                <Route path="log" element={<Login />} />
              {/* </> */}
             
            {/* } */}
     
             </Routes>
         
        </BrowserRouter>
      </div>
    // </>
  );
}
export default App;
