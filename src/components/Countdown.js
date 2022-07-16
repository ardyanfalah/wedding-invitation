import React, { useEffect, useState } from 'react'

const Countdown = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    const difference = +new Date(`July 25, ${year} 10:00:00`) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [year] = useState(new Date().getFullYear())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(<span>{timeLeft[interval]}</span>)
  })
  return (
    <div>
      {timerComponents.length ? (
        <div id="clockdiv">
          <div>
            <span className="days" id="day">
              {timerComponents[0] ? timerComponents[0] : '0'}
            </span>
            <div className="smalltext" tw="text-white">
              Days
            </div>
          </div>
          <div>
            <span className="hours" id="hour">
              {timerComponents[1]}
            </span>
            <div className="smalltext" tw="text-white">
              Hours
            </div>
          </div>
          <div>
            <span className="minutes" id="minute">
              {timerComponents[2]}
            </span>
            <div className="smalltext" tw="text-white">
              Minutes
            </div>
          </div>
          <div>
            <span className="seconds" id="second">
              {timerComponents[3]}
            </span>
            <div className="smalltext" tw="text-white">
              Seconds
            </div>
          </div>
        </div>
      ) : (
        <span>Time's up!</span>
      )}
    </div>
  )
}

export default Countdown
