import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./Profile";
import Pagination from "./Pagination";
function AdminData() {
  const[Register,setRegister]=useState()
  const[loading, setloading]=useState(false)
  const[currentPage, setCurrentPage]= useState(1)
  const[postsPerPage]=useState(3)
  const [newQ, setNewQ] = useState({
    Question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    ans: "",
  });
  const [data, setData] = useState("");
  const [hide, setHide] = useState(false);
  const [marks, setMarks] = useState(false);
  const [answer,setAnswer] = useState('')
  useEffect(() => {
    axios.get("http://127.0.0.1:9000/data").then((response) => {
      setRegister(response.data);
    
  });
  }, []);
 useEffect(() => {
    axios.get("http://127.0.0.1:9000/Score").then((response) => {
      setData(response.data);
      setloading(false)
    });
  }, []);
  function onSubmit(e) {
    e.preventDefault();
    Object.entries(newQ).forEach(([key,value])=>{
      if(answer==key){
        axios.post("http://127.0.0.1:9000/question", { ...newQ,  ans : value });
        console.log(newQ);
      }
    })
    
   
  }
  function hideshow() {
    setMarks(true);
    setHide(false);
  }
  const handlechange = (target) => {
    setNewQ({ ...newQ, [target.name]: target.value });
    console.log(newQ);
  };
  function hideshow2() {
    setHide(true);
  }
  const lastPage= currentPage*postsPerPage
  const firstPost= lastPage-postsPerPage
  const currentPost=data.slice(firstPost, lastPage)

 const paginate= (pageNumber)=> setCurrentPage(pageNumber)
  function changeAnswer(e){
    
    setAnswer(e.target.value)
    console.log(answer);
  
    

  }
  return (
    <div>
      {/* <button className="login--button" onClick={hideshow2}>
        Marks
      </button>
      <button className="login--button" onClick={hideshow}>
        {" "}
        SetQuestion
      </button> */}
      {/* {Register.map((ele)=>{
        return(
          <p>{ele.}</p>
        )
      })} */}
      {/* {console.log(Register,"set")}
      {
            Register.map((element) => {
              return (
                <tbody>
                  <tr className="table-rows">
                    <td className="items">{element.RegName}</td>
                  </tr>
                </tbody>
              );
            })} */}
        {hide ? (
        <>          
          <div>
            <table className="table">
              <thead>
                <tr className="header-row">
                <th className="header-item items">S_No :</th>
                  <th className="header-item items">Name</th>
                  <th className="header-item items">Marks</th>
                  <th className="header-item items">Answer</th>
                </tr>
              </thead>
              {currentPost &&
                currentPost.map((element ,i) => {
                  console.log(element.answer);
                  return (
                    <tbody>
                      <tr className="table-rows">
                      <td className="items">{i+1}</td>
                        <td className="items">{element.userName}</td>
                        <td className="items">{element.marks}/{element.answer.length}</td>
                        <td className="items">{element.answer.map(
                          
                          (items,i)=>{
                         return(<ul>
                             <li className="">{`${i+1}:`}{items}</li>
                          </ul>)
                       
                        })}</td>
                      </tr>
                    </tbody>
                  );
                })}
                <br></br>
                <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>
            </table>
          </div>{" "}
        </>
      ) : marks ? (
        <div className="b">
        <form>
 
            <input
              className="inputs"
              type="text"
              placeholder="Question"
              name="Question"
              onChange={(e) => handlechange(e.target)}
            />
                    <input onClick={(e)=>changeAnswer(e)} type="radio" id="html" name="fav_language" value="a"/>
            <input
              type="text"
              id="lname"
              name="a"
              onChange={(e) => handlechange(e.target)}
              placeholder="option 1"
            />
                    <input  onClick={(e)=>changeAnswer(e)} type="radio" id="html" name="fav_language" value="b"/>
            <input
              type="text"
              id="fname"
              name="b"
              onChange={(e) => handlechange(e.target)}
              placeholder="option 2"
            />
                    <input  onClick={(e)=>changeAnswer(e)} type="radio" id="html" name="fav_language" value="c"/>
             <input
              type="text"
              id="lname"
              name="c"
              onChange={(e) => handlechange(e.target)}
              placeholder="option 3"
            />
                    <input  onClick={(e)=>changeAnswer(e)} type="radio" id="html" name="fav_language" value="d"/>
            <input
              type="text"
              id="fname"
              name="d"
              onChange={(e) => handlechange(e.target)}
              placeholder="option 4"
            />
                  
            {/* <input
              type="text"
              id="fname"
              name="ans"
              onChange={(e) => handlechange(e.target)}
              placeholder="correctAns"
            /> */}
          <button className="login--button" onClick={onSubmit}>
              Submit
            </button>
          </form> 

        </div>
      ) : (
       <Profile />
            )}
       <div className="sidenav">
        <a href="#" onClick={hideshow2}>Marks</a>
        <a href="#" onClick={hideshow}>Add Question</a>
        <a href="">Profile</a>
        <a href="">Register</a>
     </div>
    </div>
  );
}
export default AdminData;

