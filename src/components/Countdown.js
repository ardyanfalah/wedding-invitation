import React, { useEffect, useState } from "react";

const Countdown = ()=> {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-12-19`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} 
      </span>
    );
  });
  return (
    <div>
    
    
      {timerComponents.length ? (  
      <div id="clockdiv">
      <div>
          <span class="days" id="day">{timerComponents[0]}</span>
          <div class="smalltext">Days</div>
      </div>
      <div>
          <span class="hours" id="hour">{timerComponents[1]}</span>
          <div class="smalltext">Hours</div>
      </div>
      <div>
          <span class="minutes" id="minute">{timerComponents[2]}</span>
          <div class="smalltext">Minutes</div>
      </div>
      <div>
          <span class="seconds" id="second">{timerComponents[3]}</span>
          <div class="smalltext">Seconds</div>
      </div>
    </div>
    ) : <span>Time's up!</span>}
    </div>
  );
}

export default Countdown;