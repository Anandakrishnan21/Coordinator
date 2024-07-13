import React, { useEffect, useState, useRef } from 'react';

function Countdown({handleTimer}) {
  const duration = 5 * 60 * 1000;
  const targetTimeRef = useRef(new Date().getTime() + duration);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetTimeRef.current - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { expired: true };
      handleTimer();
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {timeLeft.expired ? (
        <span>EXPIRED</span>
      ) : (
        <p>
          Time Left: {timeLeft.minutes}:{timeLeft.seconds}
        </p>
      )}
    </div>
  );
}

export default Countdown;
