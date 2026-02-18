// // import { useContext } from "react";
// // import { TimerContext } from "../context/TimerContext";
// // import Draggable from "react-draggable";
// // import { useNavigate } from "react-router-dom";
// // import alarmImg from "../assets/alarm.png";
// // import { useRef } from "react";
// // function FloatingTimer() {
// //   const { minutes, seconds, isRunning } = useContext(TimerContext);
// //   const navigate = useNavigate();
// //   const nodeRef = useRef(null);
// //   if (!isRunning) return null;

// //   return (
// //     <Draggable nodeRef={nodeRef}>
// //       <div
// //         ref={nodeRef}
// //         onClick={() => navigate("/timer")}
// //         className="fixed bottom-10 right-10 cursor-pointer"
// //       >
// //         <div className="relative w-40">
// //           <img src={alarmImg} alt="Alarm" className="w-full" />

// //           <div
// //             className="absolute inset-0 flex items-center justify-center
// //                           text-xl font-bold text-black"
// //           >
// //             {String(minutes).padStart(2, "0")}:
// //             {String(seconds).padStart(2, "0")}
// //           </div>
// //         </div>
// //       </div>
// //     </Draggable>
// //   );
// // }

// // export default FloatingTimer;
// import { useContext, useRef } from "react";
// import { TimerContext } from "../context/TimerContext";
// import Draggable from "react-draggable";
// import { useNavigate } from "react-router-dom";
// import alarmImg from "../assets/alarm.png";

// function FloatingTimer() {
//   const { minutes, seconds, isRunning } =
//     useContext(TimerContext);

//   const navigate = useNavigate();
//   const nodeRef = useRef(null);

//   if (!isRunning) return null;

//   return (
//     <Draggable nodeRef={nodeRef}>
//       <div
//         ref={nodeRef}
//         onClick={() => navigate("/timer")}
//         className="fixed bottom-10 right-10 cursor-pointer hover:scale-110 transition"
//       >
//         <div className="relative w-40">
//           <img src={alarmImg} alt="Alarm" className="w-full" />

//           <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-black">
//             {String(minutes).padStart(2, "0")}:
//             {String(seconds).padStart(2, "0")}
//           </div>
//         </div>
//       </div>
//     </Draggable>
//   );
// }

// export default FloatingTimer;

import { useContext, useRef, useState } from "react";
import { TimerContext } from "../context/TimerContext";
import Draggable from "react-draggable";
import { useNavigate } from "react-router-dom";
import alarmImg from "../assets/alarm.png";

function FloatingTimer() {
  const { minutes, seconds, isRunning } =
    useContext(TimerContext);

  const navigate = useNavigate();
  const nodeRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  if (!isRunning) return null;

  const handleClick = () => {
    // Prevent navigation if user was dragging
    if (!isDragging) {
      navigate("/timer");
    }
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds="body"
      onStart={() => setIsDragging(false)}
      onDrag={() => setIsDragging(true)}
      onStop={() => {
        // Small timeout prevents click firing after drag
        setTimeout(() => setIsDragging(false), 100);
      }}
    >
      <div
        ref={nodeRef}
        onClick={handleClick}
        className="fixed bottom-10 right-10 cursor-grab active:cursor-grabbing select-none"
      >
        <div className="relative w-36 drop-shadow-xl transition-transform hover:scale-105">
          <img
            src={alarmImg}
            alt="Alarm"
            className="w-full pointer-events-none"
          />

          <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-black">
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default FloatingTimer;
