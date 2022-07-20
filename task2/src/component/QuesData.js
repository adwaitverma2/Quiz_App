import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
function QuesData() {
  const [submit, setSubmit] = useState();
  const [quesData, setquesData] = useState([]);
  const [ next,setNext] = useState();
  const [change, setChange] = useState();
  const [show, setShow] = useState(false);
  const [marks, setMarks] = useState(0);
  const [correctAns, setcorrectAns] = useState("");
  const [newQuestion, setNewQuestion] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [disableRadio, setDisableRadio] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const userName = useSelector((state) => state.LogUser.name);
  console.log(userName);
  useEffect(() => {
    axios.get("http://127.0.0.1:9000/question").then((response) => {
      const data = response.data;
      console.log(data);
      setquesData(data);
    });
  }, []);
  function countScore(e) {
    setcorrectAns(e.target.value);
    setChange(e);
  }
  function changeToNext(e) {
    e.preventDefault();
    if (submit) {
      console.log(submit);
      setNext(e);
      change.target.checked = false;
      setDisableRadio(false);
      setDisableButton(false);
      setSubmit(false);
      setNewQuestion(newQuestion + 1);
      if (newQuestion == quesData.length-1) {
        console.log("score",{
          name: userName,
          answer: answer,
          marks: marks,
        });
        axios.post("http://127.0.0.1:9000/Score", {
          name: userName,
          answer: answer,
          marks: marks,
        });
      }
    } else {
      alert("Submit Your Answer first");
    }
  }
  function checkCorrectAns(e) {
    setSubmit(e);
    setDisableRadio(true);
    setDisableButton(true);
    e.preventDefault();
    setAnswer([...answer, correctAns]);
    if (quesData[newQuestion].ans === correctAns)
      setMarks((prvsmarks) => prvsmarks + 1);
  }
  const handleshow = () => setShow(true);
return show ? (
    newQuestion < quesData.length ? (
      <div className="quiz-container">
        <h1 className="h1--color">Hello , {userName}</h1>
        <div className="quiz-header">
          <h1 >Question</h1>
          {console.log({ marks })}
         <ul>
            <p  className="font">{quesData[newQuestion].Question}</p>
            <input
              disabled={disableRadio}
              id="1"
              name="fav_language"
              type="radio"
              onChange={countScore}
              value={quesData[newQuestion].a}
            />
            <label className="font" for="1">{quesData[newQuestion].a}</label>
            <br />
            <input
              disabled={disableRadio}
              id="2"
              name="fav_language"
              type="radio"
              onChange={countScore}
              value={quesData[newQuestion].b}
            />
            <label className="font" for="2">{quesData[newQuestion].b}</label> <br />
            <input
              disabled={disableRadio}
              id="3"
              name="fav_language"
              type="radio"
              onChange={countScore}
              value={quesData[newQuestion].c}
            />
            <label className="font" for="3">{quesData[newQuestion].c}</label>
            <br />
            <input
              disabled={disableRadio}
              id="4"
              name="fav_language"
              type="radio"
              onChange={countScore}
              value={quesData[newQuestion].d}
            />
            <label className="font" for="4">{quesData[newQuestion].d}</label>
            <br />
            <br />
            </ul>
            <div className="button--alignment">
            <button className=" login--button" disabled={disableButton} onClick={checkCorrectAns}>
              Submit
            </button>
            {newQuestion < quesData.length - 1 ? (
              <button className=" login--button" onClick={changeToNext}>Next</button>
            ) : (
              <button className="login--button" onClick={changeToNext}>End Test</button>
            )}
         </div>
        </div>
      </div>
    ) : (
      <div className="score-container">
        <div className="score-header">
          <h1 className="h11" >Result</h1>
        </div >
        <div className="set--image">
        <img alt="image" src="https://i.ibb.co/bHPc65H/1f3c6.png"
        ></img>      </div>
        <div className="heading" >
        <h3>UserName:{userName}</h3>
        <h3>Your score is-:{marks}</h3></div>
        <div className="align-button">
        <button className="login--button" onClick={() =>{window.location.reload()}}>End Quiz</button></div>
      </div>
    )
  ) : (
    <div>
      <div className="start--quiz">
      </div>
      <button className="login--button" onClick={ handleshow}>Start Quiz</button> 
    </div>
  );
}
export default QuesData;



