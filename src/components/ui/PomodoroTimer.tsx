import { useState, useEffect, useRef } from "react";
import bell_sfx from "./../../assets/bell_sfx.wav"; // Adjust the path as needed
import { useAptabase } from "@aptabase/react";

function PomodoroTimer() {
  const { trackEvent } = useAptabase();

  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("work"); // 'work' or 'break'
  const audioRef = useRef(new Audio(bell_sfx));

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
          audioRef.current.play();
          if (mode === "work") {
            setMode("break");
            setMinutes(5);
          } else {
            setMode("work");
            setMinutes(25);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, mode]);

  const toggleTimer = () => {
    trackEvent(
      `toggleTimer: ${String(minutes).padStart(
        2,
        "0"
      )}:{String(seconds).padStart(2, "0")}`
    );
    setIsActive(!isActive);
    setMode("work");
    setMinutes(25);
    setSeconds(0);
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
