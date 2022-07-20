import React from "react";
import axios from "axios";
import { useState } from "react";
function Profile() {
  const [image, setImage] = useState("di.jpg");
  const[profiles]=useState();
  function imageSelect(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }
  function imageUpload(e) {
    e.preventDefault()
    const formdata = new FormData();
    formdata.append("image", image);
    axios.post("http://127.0.0.1:9000/single", formdata).then((res) => {
      console.log(res.data);
      setImage(res.data.filename);
    });
  }
  axios.post("http://127.0.0.1:9000/single", {
    profile: profiles
 });
  return (
    <div>
      <div className="app">
        <div className="bg"></div>
        <form>
          <header>
            <img src={"http://127.0.0.1:9000/" + image} id="output" width="300"/>
          </header>
          <div>
            <input type="file" onChange={(e) => imageSelect(e)} id="myFile"name="filename"  /><br></br><br></br><br></br><br></br><br></br>
            <button className="login--button" onClick={(e)=>imageUpload(e)}>Upload</button>
        </div>
        </form>
        </div>
    </div>
  );
}
export default Profile;
