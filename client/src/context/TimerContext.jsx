import { createContext, useState, useEffect, useRef } from "react";
import alarmSound from "../assets/alarm.mp3";

export const TimerContext = createContext();

export function TimerProvider({ children }) {
  const [mode, setMode] = useState("focus");

  const [focusTime, setFocusTime] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const [isRunning, setIsRunning] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);
  const [showSessionComplete, setShowSessionComplete] = useState(false);

  const alarmRef = useRef(new Audio(alarmSound));

  const getInitialSeconds = () => {
    if (mode === "focus") return focusTime * 60;
    if (mode === "short") return shortBreak * 60;
    if (mode === "long") return longBreak * 60;
  };

  const [timeLeft, setTimeLeft] = useState(getInitialSeconds());

  useEffect(() => {
    setTimeLeft(getInitialSeconds());
  }, [mode, focusTime, shortBreak, longBreak]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          finishTimer();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const finishTimer = () => {
    setIsRunning(false);

    // 🔔 Play alarm
    alarmRef.current.currentTime = 0;
    alarmRef.current.play().catch(() => {});

    setShowSessionComplete(true);

    // Wait 3 seconds before switching mode
    setTimeout(() => {
      handleAutoSwitch();
      setShowSessionComplete(false);
    }, 3000);
  };

  const handleAutoSwitch = () => {
    if (mode === "focus") {
      const newCycle = cycleCount + 1;
      setCycleCount(newCycle);

      if (newCycle % 4 === 0) {
        setMode("long");
      } else {
        setMode("short");
      }
    } else {
      setMode("focus");
    }
  };

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(getInitialSeconds());
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const totalSeconds = getInitialSeconds();
  const currentSeconds = timeLeft;

  return (
    <TimerContext.Provider
      value={{
        mode,
        setMode,
        focusTime,
        setFocusTime,
        shortBreak,
        setShortBreak,
        longBreak,
        setLongBreak,
        minutes,
        seconds,
        isRunning,
        startTimer,
        pauseTimer,
        resetTimer,
        cycleCount,
        totalSeconds,
        currentSeconds,
        showSessionComplete,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}
