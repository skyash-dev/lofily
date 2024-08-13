import React, { useState, useEffect } from "react";

function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(interval);
          setIsActive(false);
          alert("Pomodoro session completed!");
        }
      }, 1000);
    } else {
      setIsActive(false);
      setMinutes(25);
      setSeconds(0);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="absolute bottom-0 right-0 flex items-start flex-col opacity-50 hover:opacity-80 transition-opacity">
      <div className="w-48 flex justify-center mr-4 mb-4">
        <button className="text-xl" onClick={toggleTimer}>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
