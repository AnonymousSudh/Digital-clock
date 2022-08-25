import React, { useEffect } from 'react'
import { useState } from 'react';
require("./clockOne.css");

function Clock1() {

  const [time, settime] = useState(0);
  const [hour, sethour] = useState("");
  const [ampm, setampm] = useState("");
  const [day, setDay] = useState(2);
  // const array = [0,1,2,3,4,5,6,7,8,9]
  // const date = new Date();
  // // sethour(date.getHours());

  // if (date.getHours() > 12) {
  //   setampm("PM")
  // } else {
  //   setampm("AM")
  // }

  useEffect(() => {
    const date = new Date();
    var second = date.getSeconds();
    sethour(date.getHours());
    var dayno = date.getDay();
    setDay(dayno);
    // document.getElementsByClassName("ccc")[0].style.transform = `rotate(${((second * 6) - 180)}deg)`;



    if (dayno == 1) {
      document.getElementsByClassName("digitalDay")[0].innerHTML = "Monday";
    }
    else if (dayno == 2) {
      document.getElementsByClassName("digitalDay")[0].innerHTML = "Tuesday";
    }
    else if (dayno == 3) {
      document.getElementsByClassName("digitalDay")[0].innerHTML = "Wednesday";
    }
    else if (dayno == 4) {
      document.getElementsByClassName("digitalDay")[0].innerHTML = "Thursday";
    }
    else if (dayno == 5) {
      document.getElementsByClassName("digitalDay")[0].innerHTML = "Friday";
    }
    else if (dayno == 6) {
      document.getElementsByClassName("digitalDay")[0].innerHTML = "Saturday";
    }
    else if (dayno == 7) {
      document.getElementsByClassName("digitalDay")[0].innerHTML = "Sunday";
    }

    const rotatesecond = () => {
      var currentTime = new Date();
      var hourr = currentTime.getHours();
      var minute = currentTime.getMinutes();
      var second = currentTime.getSeconds();
     if(hourr ==0 || hourr==1 ||  hourr==2||hourr==3 || hourr==4 || hourr==5 || hourr==6 || hourr==7 || hourr==8 ||hourr==9){
      hourr = "0"+hourr;
      // hourr.concat(0)

     }
     if(second ==0 || second==1 ||  second==2||second==3 || second==4 || second==5 || second==6 || second== 7|| second==8 ||second==9){
      second = "0"+second
      // second.concate(0)

     }
      // if()



      // console.log(second);
      document.getElementsByClassName("secondhand")[0].style.transform = `rotate(${(second * 6)}deg)`
      document.getElementsByClassName("minutehand")[0].style.transform = `rotate(${(minute * 6)}deg)`
      document.getElementsByClassName("hourhand")[0].style.transform = `rotate(${(hourr * 30)}deg)`
      document.getElementsByClassName("digitalHour")[0].innerHTML = hourr
      document.getElementsByClassName("digitalMinute")[0].innerHTML = minute
      document.getElementsByClassName("digitalSecond")[0].innerHTML = second
      document.getElementsByClassName("ccc")[0].style.transform = `rotate(${((second * 6) - 180)}deg)`;

      // clearInterval(interval);

    }

    const interval = setInterval(rotatesecond, 1000);


    //     const rotatesecondd =()=>{
    //       var currentTime = new Date();
    //       var second = currentTime.getSeconds();
    //       document.getElementsByClassName("ccc")[0].style.transform = `rotate(${((second * 6) - 180)}deg)`;

    //       // console.log("hello");
    // // 


    //     }
    //     const interval2 = setInterval(rotatesecondd, 60000);

  }, [])

  return (
    <>
      <div className="clock1">
        <div className="clock1container">
          <div className="ccc">
          </div>

          <div className="clockOne">
            <div className="hourhand"></div>
            <div className="dot"><h1 id='demo'>.</h1></div>
            <div className="minutehand"></div>
            <div className="secondhand"></div>

          </div>
        </div>


        <div className="timeContainer">
          <div className="component1">


            <div className="amPm">
              {hour > 12 ? (
                <h1 className='am_pm'>PM</h1>
              ) : (
                <h1 className='am_pm'>AM</h1>
              )}
            </div>
            <div className="timegroup">

              <div className="time">
                <h1 className='digitalHour'>00</h1>
                <h1 className='colan'>:</h1>
                <h1 className='digitalMinute'>00</h1>
                <h1 className='colan'>:</h1>
                <h1 className='digitalSecond'>00</h1>
              </div>

            </div>
          </div>
          <div className="day">
            <h1 className='digitalDay'></h1>
          </div>

        </div>
      </div>
    </>
  )
}

export default Clock1