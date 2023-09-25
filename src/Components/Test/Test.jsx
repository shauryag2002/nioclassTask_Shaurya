import React, { useEffect, useRef, useState } from "react";
import "./Test.css";
import axios from "axios";
import { MathJax } from "better-react-mathjax";
import { useNavigate } from "react-router-dom";
const Test = () => {
  const navigate = useNavigate();
  let [questions] = useState(JSON.parse(localStorage.getItem("questions")));
  const [ques, setQues] = useState([]);
  const [counter, setCounter] = useState(0);
  const [prev, setPrev] = useState(false);
  const [lastQues, setLastQues] = useState(false);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const questionFetch = async (i) => {
    const res = await axios.get(
      "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=" +
        questions[i].question
    );
    const filtered = questions?.filter((elem) => {
      return elem?.question === questions[i]?.question;
    });
    setQues([res.data[0].Question, filtered[0].time, questions[i].question]);
    const timeArr = filtered[0].time.split(":");
    setSeconds(Number(timeArr[1]));
    setMinutes(Number(timeArr[0]));
    if (i === 0) {
      setPrev(false);
    } else {
      setPrev(true);
    }
    if (i === questions.length - 1) {
      setLastQues(true);
    } else {
      setLastQues(false);
    }
  };
  useEffect(() => {
    questionFetch(0);
    // eslint-disable-next-line
  }, []);
  let counting = useRef(false);
  useEffect(() => {
    if (!counting.current) {
      counting.current = true;
      return;
    }
    questionFetch(counter);
    // eslint-disable-next-line
  }, [counter]);
  useEffect(() => {
    const quesWrap = document.getElementById("quesWrap");
    const handleHover = () => {
      quesWrap.classList.add("max-w");
    };
    const handleMouseOut = () => {
      quesWrap.classList.remove("max-w");
      quesWrap.width = "49px";
    };

    quesWrap.addEventListener("mouseover", handleHover);
    quesWrap.addEventListener("mouseout", handleMouseOut);
    // eslint-disable-next-line
  }, []);
  let count = 0;
  const nextQues = () => {
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].question === ques[2]) {
        questions[i].time = `${minutes}:${seconds}`;
      }
    }
    localStorage.setItem("questions", JSON.stringify(questions));
    if (counter !== 0) {
      setPrev(true);
    }
    count = counter + 1;
    if (counter === questions.length - 1) {
      setLastQues(true);
    }
    setCounter(counter + 1);
  };
  const OnSubmit = () => {
    navigate("/submit");
  };
  const prevQues = () => {
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].question === ques[2]) {
        questions[i].time = `${minutes}:${seconds}`;
      }
    }
    localStorage.setItem("questions", JSON.stringify(questions));
    count = counter - 1;
    setCounter(count);
  };

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (counter === questions.length - 1) {
          } else {
            for (let i = 0; i < questions.length; i++) {
              if (questions[i].question === ques[2]) {
                questions[i].time = `${minutes}:${seconds}`;
              }
            }
            localStorage.setItem("questions", JSON.stringify(questions));
            setCounter(counter + 1);
          }
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <div className="test">
      <h1 className="text-5xl mx-auto text-center my-8">Maths Assignment</h1>
      <div className="question-flex">
        <div className="question-wrapper" id="quesWrap">
          {questions.map((elem, i) => {
            return (
              <div
                onClick={() => {
                  setCounter(i);
                  for (let i = 0; i < questions.length; i++) {
                    if (questions[i].question === ques[2]) {
                      questions[i].time = `${minutes}:${seconds}`;
                    }
                  }
                  localStorage.setItem("questions", JSON.stringify(questions));
                }}
                className="question-one"
                key={i}
              >
                <span className="question-number">{i + 1}</span>
                <span className="question-name">{elem.question}</span>
              </div>
            );
          })}
        </div>
        <div className="q-right">
          <div className="timer">
            Time Left:{" "}
            <span className="timer-count">
              {minutes}:{seconds}
            </span>
          </div>
          <div className="question-box">
            <MathJax inline dynamic>
              {ques[0]}
            </MathJax>
          </div>
          <div className="navigation">
            <button
              onClick={prevQues}
              className={`prev ${
                prev ? "" : "none"
              } color-bg text-white font-bold py-2 px-4 rounded`}
            >
              Previous
            </button>

            {lastQues ? (
              <button
                onClick={OnSubmit}
                className="submit color-bg text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={nextQues}
                className="next color-bg text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
