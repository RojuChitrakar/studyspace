// import { useContext, useRef } from "react";
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

//   const containerRef = useRef(null);

//   const formatTime = () =>
//     `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

//   const progress =
//     totalSeconds > 0
//       ? ((totalSeconds - currentSeconds) / totalSeconds) * 100
//       : 0;

//   // ✅ FULLSCREEN ONLY FOR TIMER CONTAINER
//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       containerRef.current.requestFullscreen();
//     } else {
//       document.exitFullscreen();
//     }
//   };

//   return (
//     <Layout>
//       <div
//   ref={containerRef}
//  className="w-full h-full flex flex-col items-center
// bg-gradient-to-br from-[#fdf6ec] via-[#f8e8ff] to-[#e0f7fa]"

// >

//         {/* Fullscreen Button */}
//         <button
//           onClick={toggleFullscreen}
//           className="absolute top-6 right-6 px-4 py-2 bg-white/70 backdrop-blur rounded-lg shadow hover:scale-105 transition text-sm"
//         >
//           ⛶ Fullscreen
//         </button>

//         {/* Mode Buttons */}
//         <div className="flex gap-6 mt-12 mb-6">

//           {["focus", "short", "long"].map((type) => (
//             <button
//               key={type}
//               disabled={isRunning}
//               onClick={() => !isRunning && setMode(type)}
//               className={`px-6 py-3 rounded-full font-semibold transition-all
//               ${
//                 mode === type
//                   ? "bg-white shadow-md text-[#7c4a22]"
//                   : "bg-white/60 text-[#7c4a22]/80 hover:scale-105"
//               }`}
//             >
//               {type === "focus"
//                 ? "Focus"
//                 : type === "short"
//                   ? "Short Break"
//                   : "Long Break"}
//             </button>
//           ))}
//         </div>

//         {/* Cycle Indicator */}
//         <div className="mb-6 text-[#7c4a22] text-sm">
//           Cycle: {cycleCount % 4}/4
//         </div>

//         {/* Timer + Illustration */}
//         <div className="flex items-center gap-16">
//           <div className="w-64 bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-xl">
//             <CircularProgressbar
//               value={progress}
//               text={formatTime()}
//               styles={buildStyles({
//                 textColor: "#5c3d2e",
//                 pathColor:
//                   mode === "focus"
//                     ? "#d97706"
//                     : mode === "short"
//                       ? "#22c55e"
//                       : "#8b5cf6",
//                 trailColor: "#f3e8d5",
//                 textSize: "18px",
//               })}
//             />
//           </div>

//           <div className="w-64">
//             <img
//               src="/study-girl.png"
//               alt="Study"
//               className="w-full drop-shadow-xl"
//             />
//           </div>
//         </div>

//         {/* Duration Inputs */}
//         <div className="mt-8 flex gap-6 text-[#7c4a22]">
//           {[
//             { label: "Focus", value: focusTime, setter: setFocusTime },
//             { label: "Short", value: shortBreak, setter: setShortBreak },
//             { label: "Long", value: longBreak, setter: setLongBreak },
//           ].map((item) => (
//             <div key={item.label} className="flex flex-col items-center">
//               <span className="text-xs">{item.label}</span>
//               <input
//                 type="number"
//                 value={item.value}
//                 onChange={(e) => item.setter(Number(e.target.value))}
//                 className="w-16 mt-2 rounded-full text-center bg-white/70 py-1 text-sm"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Controls */}
//         <div className="flex gap-8 mt-8 mb-12">
//           {!isRunning ? (
//             <button
//               onClick={startTimer}
//               className="px-8 py-3 bg-[#8c5a2b] text-white rounded-full shadow hover:scale-105 transition"
//             >
//               Start
//             </button>
//           ) : (
//             <button
//               onClick={pauseTimer}
//               className="px-8 py-3 bg-[#b97a43] text-white rounded-full shadow hover:scale-105 transition"
//             >
//               Pause
//             </button>
//           )}

//           <button
//             onClick={resetTimer}
//             className="px-8 py-3 bg-white/80 rounded-full text-[#7c4a22] shadow"
//           >
//             Reset
//           </button>
//         </div>

//         {/* Completion Overlay */}
//         {showSessionComplete && (
//           <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//             <div className="bg-white px-10 py-8 rounded-2xl shadow-2xl text-center animate-bounce">
//               <h2 className="text-2xl font-bold text-[#7c4a22] mb-3">
//                 Session Complete 🎉
//               </h2>
//               <p className="text-[#5c3d2e]">Take a deep breath and relax.</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
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
    setMode,
    focusTime,
    setFocusTime,
    shortBreak,
    setShortBreak,
    longBreak,
    setLongBreak,
    cycleCount,
    totalSeconds,
    currentSeconds,
    showSessionComplete,
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

  // return (
  //   <Layout>
  //     <div
  //       id="timer-root"
  //       className="h-full w-full 
  //       bg-gradient-to-br from-[#fdf6ec] via-[#f8e8ff] to-[#e0f7fa]
  //       flex flex-col items-center justify-center"
  //     >

  //       {/* Fullscreen */}
  //       <button
  //         onClick={toggleFullscreen}
  //         className="absolute top-6 right-10 px-4 py-2 bg-white/70 backdrop-blur rounded-lg shadow hover:scale-105 transition text-sm"
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
  //             className={`px-6 py-3 rounded-full font-semibold transition-all
  //             ${
  //               mode === type
  //                 ? "bg-white shadow-md text-[#7c4a22]"
  //                 : "bg-white/60 text-[#7c4a22]/80 hover:scale-105"
  //             }`}
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
  //       <div className="flex items-center gap-16 mb-8">

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

  //       {/* Duration */}
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
  //             className="px-8 py-3 bg-[#8c5a2b] text-white rounded-full shadow hover:scale-105 transition"
  //           >
  //             Start
  //           </button>
  //         ) : (
  //           <button
  //             onClick={pauseTimer}
  //             className="px-8 py-3 bg-[#b97a43] text-white rounded-full shadow hover:scale-105 transition"
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

  //       {showSessionComplete && (
  //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
  //           <div className="bg-white px-10 py-8 rounded-2xl shadow-2xl text-center animate-bounce">
  //             <h2 className="text-2xl font-bold text-[#7c4a22] mb-3">
  //               Session Complete 🎉
  //             </h2>
  //             <p className="text-[#5c3d2e]">
  //               Take a deep breath and relax.
  //             </p>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </Layout>
  // );
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

      {/* Mode Buttons */}
      <div className="flex gap-6 mb-6">
        {["focus", "short", "long"].map((type) => (
          <button
            key={type}
            disabled={isRunning}
            onClick={() => !isRunning && setMode(type)}
            className={`px-6 py-3 rounded-full font-semibold transition
              ${
                mode === type
                  ? "bg-white shadow-md text-[#7c4a22]"
                  : "bg-white/60 text-[#7c4a22]/80"
              }`}
          >
            {type === "focus"
              ? "Focus"
              : type === "short"
              ? "Short Break"
              : "Long Break"}
          </button>
        ))}
      </div>

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
              value={item.value}
              onChange={(e) => item.setter(Number(e.target.value))}
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
