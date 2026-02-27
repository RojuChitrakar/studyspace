// import { useContext } from "react";
// import Layout from "../components/Layout";
// import { TimerContext } from "../context/TimerContext";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// function TimerPage() {
//   const {
//     minutes,
//     seconds,
//     isRunning,
//     mode,
//     startTimer,
//     pauseTimer,
//     resetTimer,
//     setMode,
//     focusTime,
//     setFocusTime,
//     shortBreak,
//     setShortBreak,
//     longBreak,
//     setLongBreak,
//     cycleCount,
//     totalSeconds,
//     currentSeconds,
//     showSessionComplete,
//   } = useContext(TimerContext);

//   const formatTime = () =>
//     `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

//   const progress =
//     totalSeconds > 0
//       ? ((totalSeconds - currentSeconds) / totalSeconds) * 100
//       : 0;

//   const toggleFullscreen = () => {
//     const container = document.getElementById("timer-root");

//     if (!document.fullscreenElement) {
//       container.requestFullscreen();
//     } else {
//       document.exitFullscreen();
//     }
//   };


//   return (
//   <Layout>
//     <div
//       id="timer-root"
//       className="min-h-screen -mx-16 -my-12
//       bg-gradient-to-br from-[#fdf6ec] via-[#f8e8ff] to-[#e0f7fa]
//       flex flex-col items-center justify-center
//       px-10"
//     >

//       {/* Fullscreen Button */}
//       <button
//         onClick={toggleFullscreen}
//         className="absolute top-8 right-10 px-4 py-2 bg-white/70 backdrop-blur rounded-lg shadow text-sm"
//       >
//         ⛶ Fullscreen
//       </button>

//       {/* Mode Buttons */}
//       <div className="flex gap-6 mb-6">
//         {["focus", "short", "long"].map((type) => (
//           <button
//             key={type}
//             disabled={isRunning}
//             onClick={() => !isRunning && setMode(type)}
//             className={`px-6 py-3 rounded-full font-semibold transition
//               ${
//                 mode === type
//                   ? "bg-white shadow-md text-[#7c4a22]"
//                   : "bg-white/60 text-[#7c4a22]/80"
//               }`}
//           >
//             {type === "focus"
//               ? "Focus"
//               : type === "short"
//               ? "Short Break"
//               : "Long Break"}
//           </button>
//         ))}
//       </div>

//       {/* Cycle */}
//       <div className="mb-6 text-[#7c4a22] text-sm">
//         Cycle: {cycleCount % 4}/4
//       </div>

//       {/* Timer + Image */}
//       <div className="flex items-center gap-16 mb-10">

//         <div className="w-64 bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-xl">
//           <CircularProgressbar
//             value={progress}
//             text={formatTime()}
//             styles={buildStyles({
//               textColor: "#5c3d2e",
//               pathColor:
//                 mode === "focus"
//                   ? "#d97706"
//                   : mode === "short"
//                   ? "#22c55e"
//                   : "#8b5cf6",
//               trailColor: "#f3e8d5",
//               textSize: "18px",
//             })}
//           />
//         </div>

//         <div className="w-64">
//           <img
//             src="/study-girl.png"
//             alt="Study"
//             className="w-full drop-shadow-xl"
//           />
//         </div>
//       </div>

//       {/* Duration Inputs */}
//       <div className="flex gap-6 text-[#7c4a22] mb-8">
//         {[
//           { label: "Focus", value: focusTime, setter: setFocusTime },
//           { label: "Short", value: shortBreak, setter: setShortBreak },
//           { label: "Long", value: longBreak, setter: setLongBreak },
//         ].map((item) => (
//           <div key={item.label} className="flex flex-col items-center">
//             <span className="text-xs">{item.label}</span>
//             <input
//               type="number"
//               value={item.value}
//               onChange={(e) => item.setter(Number(e.target.value))}
//               className="w-16 mt-2 rounded-full text-center bg-white/70 py-1 text-sm"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Controls */}
//       <div className="flex gap-8">
//         {!isRunning ? (
//           <button
//             onClick={startTimer}
//             className="px-8 py-3 bg-[#8c5a2b] text-white rounded-full shadow"
//           >
//             Start
//           </button>
//         ) : (
//           <button
//             onClick={pauseTimer}
//             className="px-8 py-3 bg-[#b97a43] text-white rounded-full shadow"
//           >
//             Pause
//           </button>
//         )}

//         <button
//           onClick={resetTimer}
//           className="px-8 py-3 bg-white/80 rounded-full text-[#7c4a22] shadow"
//         >
//           Reset
//         </button>
//       </div>

//     </div>
//   </Layout>
// );

// }

// export default TimerPage;


import { useContext } from "react";
import Layout from "../components/Layout";
import { TimerContext } from "../context/TimerContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function TimerPage() {
  const {
    minutes,
    seconds,
    isRunning,
    mode,
    startTimer,
    pauseTimer,
    resetTimer,
    focusTime,
    setFocusTime,
    shortBreak,
    setShortBreak,
    longBreak,
    setLongBreak,
    cycleCount,
    totalSeconds,
    currentSeconds,
  } = useContext(TimerContext);

  const formatTime = () =>
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const progress =
    totalSeconds > 0
      ? ((totalSeconds - currentSeconds) / totalSeconds) * 100
      : 0;

  const toggleFullscreen = () => {
    const container = document.getElementById("timer-root");

    if (!document.fullscreenElement) {
      container.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  // ✅ Prevent negative numbers
  const handleSafeNumber = (value, setter) => {
    const num = Math.max(1, Number(value));
    setter(num);
  };

  return (
    <Layout>
      <div
        id="timer-root"
        className="min-h-screen -mx-16 -my-12
        bg-gradient-to-br from-[#fdf6ec] via-[#f8e8ff] to-[#e0f7fa]
        flex flex-col items-center justify-center
        px-10"
      >
        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="absolute top-8 right-10 px-4 py-2 bg-white/70 backdrop-blur rounded-lg shadow text-sm"
        >
          ⛶ Fullscreen
        </button>

        {/* Cycle */}
        <div className="mb-6 text-[#7c4a22] text-sm">
          Cycle: {cycleCount % 4}/4
        </div>

        {/* Timer + Image */}
        <div className="flex items-center gap-16 mb-10">
          <div className="w-64 bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-xl">
            <CircularProgressbar
              value={progress}
              text={formatTime()}
              styles={buildStyles({
                textColor: "#5c3d2e",
                pathColor:
                  mode === "focus"
                    ? "#d97706"
                    : mode === "short"
                    ? "#22c55e"
                    : "#8b5cf6",
                trailColor: "#f3e8d5",
                textSize: "18px",
              })}
            />
          </div>

          <div className="w-64">
            <img
              src="/study-girl.png"
              alt="Study"
              className="w-full drop-shadow-xl"
            />
          </div>
        </div>

        {/* 🔥 Focus Preset Buttons */}
        <div className="flex gap-4 mb-6">
          {[25, 30, 45, 60].map((time) => (
            <button
              key={time}
              disabled={isRunning}
              onClick={() => !isRunning && setFocusTime(time)}
              className="px-5 py-2 bg-white/70 backdrop-blur rounded-full text-sm shadow hover:scale-105 transition"
            >
              {time} Min
            </button>
          ))}
        </div>

        {/* Duration Inputs */}
        <div className="flex gap-6 text-[#7c4a22] mb-8">
          {[
            { label: "Focus", value: focusTime, setter: setFocusTime },
            { label: "Short", value: shortBreak, setter: setShortBreak },
            { label: "Long", value: longBreak, setter: setLongBreak },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="text-xs">{item.label}</span>
              <input
                type="number"
                min="1"
                value={item.value}
                onChange={(e) =>
                  handleSafeNumber(e.target.value, item.setter)
                }
                className="w-16 mt-2 rounded-full text-center bg-white/70 py-1 text-sm"
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex gap-8">
          {!isRunning ? (
            <button
              onClick={startTimer}
              className="px-8 py-3 bg-[#8c5a2b] text-white rounded-full shadow"
            >
              Start
            </button>
          ) : (
            <button
              onClick={pauseTimer}
              className="px-8 py-3 bg-[#b97a43] text-white rounded-full shadow"
            >
              Pause
            </button>
          )}

          <button
            onClick={resetTimer}
            className="px-8 py-3 bg-white/80 rounded-full text-[#7c4a22] shadow"
          >
            Reset
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default TimerPage;
