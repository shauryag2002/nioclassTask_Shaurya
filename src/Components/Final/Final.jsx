import React, { useEffect, useState } from "react";
import "./Final.css";
import { Link } from "react-router-dom";
const Final = () => {
  const [name] = useState(localStorage.getItem("name"));
  const [questions] = useState(JSON.parse(localStorage.getItem("questions")));
  const [time, setTime] = useState([]);
  const [totalMin, setTotalMin] = useState(0);
  const [totalSec, setTotalSec] = useState(0);
  const timetaken = () => {
    let arr = [];
    let timeInSecs = 0;
    for (let i = 0; i < questions.length; i++) {
      const elem = questions[i].time;
      const min = Number(elem.split(":")[0]);
      const sec = Number(elem.split(":")[1]);
      let calcMin;
      let calcSec;
      if (sec > 0) {
        calcMin = 4 - min;
        calcSec = 60 - sec;
        if (60 - sec === 60) {
          calcMin = calcMin + 1;
          calcSec = 0;
        }
      } else {
        calcMin = 5 - min;
        calcSec = 0;
      }
      timeInSecs = calcSec + timeInSecs;
      timeInSecs += calcMin * 60;
      let m1 = calcMin + totalMin;
      let s1 = calcSec + totalSec;
      setTotalMin(m1);
      setTotalSec(s1);
      const obj = { min: calcMin, sec: calcSec };
      arr.push(obj);
    }
    let seconds = Math.floor(totalSec / 60);
    setTotalMin(totalMin + seconds);
    setTotalMin(Math.floor(timeInSecs / 60));
    setTotalSec(timeInSecs - Math.floor(timeInSecs / 60) * 60);
    setTime(arr);
  };
  useEffect(() => {
    timetaken();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="final">
      <h1 className="text-5xl mx-auto text-center my-8 heading">
        Maths Assignment
      </h1>
      <div className="flex items-center justify-center final-box">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  ">
          <div className="mb-4">
            <div className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </div>
            <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {name}
            </div>
          </div>
          <div className="mb-6 flex size">
            <div className="qAnswered">
              <div className="block text-gray-700 text-sm font-bold mb-2">
                Questions Answered:
              </div>
              {questions.map((elem, i) => {
                return (
                  <div
                    key={i}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {elem.question}
                  </div>
                );
              })}
            </div>
            <div className="timeTaken">
              <div className="block text-gray-700 text-sm font-bold mb-2">
                Time Taken:
              </div>
              {time.map((elem, i) => {
                return (
                  <div
                    key={i}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {elem.min}:{elem.sec}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="totalTaken">
            <div className="block text-gray-700 text-sm font-bold mb-2">
              Total Time Taken:
            </div>
            <div className="flex items-center  justify-center shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
              {totalMin}:{totalSec}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Link
              to={"/"}
              className="color-bg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Take Test Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
