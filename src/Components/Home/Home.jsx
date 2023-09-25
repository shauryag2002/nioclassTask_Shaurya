import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const arrQues = [];
  function next() {
    if (name) {
      localStorage.setItem("name", name);
      localStorage.setItem("questions", JSON.stringify(arrQues));
      navigate("/test");
    } else {
      setError("Enter Name");
    }
  }
  const handleSubmit = () => {
    const AreaUnderTheCurve_21 = document.getElementById(
      "AreaUnderTheCurve_21"
    );
    const BinomialTheorem_13 = document.getElementById("BinomialTheorem_13");
    const BinomialTheorem_24 = document.getElementById("BinomialTheorem_24");
    const AreaUnderTheCurve_15 = document.getElementById(
      "AreaUnderTheCurve_15"
    );
    const AreaUnderTheCurve_2 = document.getElementById("AreaUnderTheCurve_2");
    const BinomialTheorem_3 = document.getElementById("BinomialTheorem_3");
    const BinomialTheorem_4 = document.getElementById("BinomialTheorem_4");
    const AreaUnderTheCurve_5 = document.getElementById("AreaUnderTheCurve_5");
    if (AreaUnderTheCurve_15.checked) {
      setQuestions([
        ...questions,
        {
          question: "AreaUnderTheCurve_15",
          time: "5:0",
        },
      ]);
      arrQues.push({
        question: "AreaUnderTheCurve_15",
        time: "5:0",
      });
    }
    if (AreaUnderTheCurve_2.checked) {
      setQuestions([
        ...questions,
        {
          question: "AreaUnderTheCurve_2",
          time: "5:0",
        },
      ]);
      arrQues.push({
        question: "AreaUnderTheCurve_2",
        time: "5:0",
      });
    }
    if (AreaUnderTheCurve_21.checked) {
      setQuestions([
        ...questions,
        {
          question: "AreaUnderTheCurve_21",
          time: "5:0",
        },
      ]);
      arrQues.push({
        question: "AreaUnderTheCurve_21",
        time: "5:0",
      });
    }
    if (AreaUnderTheCurve_5.checked) {
      setQuestions([
        ...questions,
        {
          question: "AreaUnderTheCurve_5",
          time: "5:0",
        },
      ]);
      arrQues.push({
        question: "AreaUnderTheCurve_5",
        time: "5:0",
      });
    }
    if (BinomialTheorem_13.checked) {
      setQuestions([
        ...questions,
        {
          question: "BinomialTheorem_13",
          time: "5:0",
        },
      ]);
      arrQues.push({
        question: "BinomialTheorem_13",
        time: "5:0",
      });
    }
    if (BinomialTheorem_24.checked) {
      setQuestions([
        ...questions,
        {
          question: "BinomialTheorem_24",
          time: "5:0",
        },
      ]);
      arrQues.push({
        question: "BinomialTheorem_24",
        time: "5:0",
      });
    }
    if (BinomialTheorem_3.checked) {
      setQuestions([
        ...questions,
        {
          question: "BinomialTheorem_3",
          time: "5:0",
        },
      ]);
      arrQues.push({
        question: "BinomialTheorem_3",
        time: "5:0",
      });
    }
    if (BinomialTheorem_4.checked) {
      setQuestions([
        ...questions,
        {
          question: "BinomialTheorem_4",
          time: "5:0",
        },
      ]);
      arrQues.push({
        question: "BinomialTheorem_4",
        time: "5:0",
      });
    }
    next();
  };
  return (
    <div className="Home">
      <div className="mathPhoto align-start">
        <img
          src="https://imgs.search.brave.com/hAEFgwQMHj9pKwzeJRdUdgeMiSGmrLput1-BecxzMws/rs:fit:500:0:0/g:ce/aHR0cDovL2NsaXBh/cnRzLmNvL2NsaXBh/cnRzL3BpNS9vQTYv/cGk1b0E2eEtULmdp/Zg.jpeg"
          alt="maths icon"
        />
      </div>
      <div className="main bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-5xl mx-auto text-center my-8">Maths Assignment</h1>
        <div className="username">
          <label htmlFor="username" className="username-label">
            Name
          </label>
          <div className="nameInput flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter your name"
              aria-label="Full name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="error" style={{ color: "red" }}>
            {error}
          </div>
        </div>
        <div className="questions">
          <div className="question-label">Select Questions:</div>
          <div className="question-tag">
            <label htmlFor="AreaUnderTheCurve_21">AreaUnderTheCurve_21</label>
            <input
              type="checkbox"
              name="AreaUnderTheCurve_21"
              id="AreaUnderTheCurve_21"
            />
          </div>
          <div className="question-tag">
            <label htmlFor="BinomialTheorem_13">BinomialTheorem_13</label>
            <input
              type="checkbox"
              name="BinomialTheorem_13"
              id="BinomialTheorem_13"
            />
          </div>
          <div className="question-tag">
            <label htmlFor="BinomialTheorem_24">BinomialTheorem_24</label>
            <input
              type="checkbox"
              name="BinomialTheorem_24"
              id="BinomialTheorem_24"
            />
          </div>
          <div className="question-tag">
            <label htmlFor="AreaUnderTheCurve_15">AreaUnderTheCurve_15</label>
            <input
              type="checkbox"
              name="AreaUnderTheCurve_15"
              id="AreaUnderTheCurve_15"
            />
          </div>
          <div className="question-tag">
            <label htmlFor="AreaUnderTheCurve_2">AreaUnderTheCurve_2</label>
            <input
              type="checkbox"
              name="AreaUnderTheCurve_2"
              id="AreaUnderTheCurve_2"
            />
          </div>
          <div className="question-tag">
            <label htmlFor="BinomialTheorem_3">BinomialTheorem_3</label>
            <input
              type="checkbox"
              name="BinomialTheorem_3"
              id="BinomialTheorem_3"
            />
          </div>
          <div className="question-tag">
            <label htmlFor="BinomialTheorem_4">BinomialTheorem_4</label>
            <input
              type="checkbox"
              name="BinomialTheorem_4"
              id="BinomialTheorem_4"
            />
          </div>
          <div className="question-tag">
            <label htmlFor="AreaUnderTheCurve_5">AreaUnderTheCurve_5</label>
            <input
              type="checkbox"
              name="AreaUnderTheCurve_5"
              id="AreaUnderTheCurve_5"
            />
          </div>
        </div>
        <button
          className="test-link flex  text-white font-bold py-2 px-4 rounded color-bg"
          onClick={handleSubmit}
        >
          Begin Test...!
        </button>
      </div>
      <div className="mathPhoto align-end">
        <img
          src="https://imgs.search.brave.com/h2p1yD07nlLa2V_5IM7PM3Tp-3AIRBDH5piWRElzAsE/rs:fit:860:0:0/g:ce/aHR0cDovL2NsaXBh/cnRzLmNvL2NsaXBh/cnRzL3BUNS9vS24v/cFQ1b0tueEdjLmdp/Zg.gif"
          alt="maths icon"
        />
      </div>
    </div>
  );
};

export default Home;
