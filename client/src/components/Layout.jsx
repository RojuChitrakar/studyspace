// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate, NavLink } from "react-router-dom";
// import FloatingTimer from "./FloatingTimer";

// function Layout({ children }) {
//   const { logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <div className="flex min-h-screen">

//       {/* Sidebar */}
//       <aside
//         className="w-64 fixed top-0 left-0 h-full
//         bg-gradient-to-b from-[#6a67ce] to-[#4f4ca3]
//         text-white p-10 shadow-2xl
//         border-r border-white/10"
//       >
//         <h1 className="text-2xl font-semibold tracking-wide mb-16">
//           StudySpace
//         </h1>

//         <nav className="space-y-8 text-white/80 text-lg">
//           <NavLink
//             to="/dashboard"
//             className={({ isActive }) =>
//               `block transition cursor-pointer ${
//                 isActive ? "text-white font-semibold" : "hover:text-white"
//               }`
//             }
//           >
//             Dashboard
//           </NavLink>

//           <NavLink
//             to="/tasks"
//             className={({ isActive }) =>
//               `block transition cursor-pointer ${
//                 isActive ? "text-white font-semibold" : "hover:text-white"
//               }`
//             }
//           >
//             Tasks
//           </NavLink>

//           <NavLink
//             to="/notes"
//             className={({ isActive }) =>
//               `block transition cursor-pointer ${
//                 isActive ? "text-white font-semibold" : "hover:text-white"
//               }`
//             }
//           >
//             Notes
//           </NavLink>

//           <NavLink
//             to="/timer"
//             className={({ isActive }) =>
//               `block transition cursor-pointer ${
//                 isActive ? "text-white font-semibold" : "hover:text-white"
//               }`
//             }
//           >
//             Timer
//           </NavLink>
//         </nav>

//         <button
//           onClick={handleLogout}
//           className="absolute bottom-10 text-white/60 hover:text-white transition"
//         >
//           Logout
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="ml-64 flex-1 min-h-screen px-16 py-12 bg-softBg text-gray-800 overflow-y-auto">
//         {children}
//       </main>

//       {/* Floating Timer */}
//       <FloatingTimer />
//     </div>
//   );
// }

// export default Layout;
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate, NavLink, useLocation } from "react-router-dom";
// import FloatingTimer from "./FloatingTimer";

// function Layout({ children }) {
//   const { logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside
//         className="w-64 fixed top-0 left-0 h-full 
//         bg-gradient-to-b from-[#6a67ce] to-[#4f4ca3]
//         text-white p-10 shadow-2xl
//         border-r border-white/10"
//       >
//         <h1 className="text-2xl font-semibold tracking-wide mb-16">
//           StudySpace
//         </h1>

//         <nav className="space-y-8 text-white/80 text-lg">
//           <NavLink
//             to="/dashboard"
//             className={({ isActive }) =>
//               `block transition cursor-pointer ${
//                 isActive ? "text-white font-semibold" : "hover:text-white"
//               }`
//             }
//           >
//             Dashboard
//           </NavLink>

//           <NavLink
//             to="/tasks"
//             className={({ isActive }) =>
//               `block transition cursor-pointer ${
//                 isActive ? "text-white font-semibold" : "hover:text-white"
//               }`
//             }
//           >
//             Tasks
//           </NavLink>

//           <NavLink
//             to="/notes"
//             className={({ isActive }) =>
//               `block transition cursor-pointer ${
//                 isActive ? "text-white font-semibold" : "hover:text-white"
//               }`
//             }
//           >
//             Notes
//           </NavLink>

//           <NavLink
//             to="/timer"
//             className={({ isActive }) =>
//               `block transition cursor-pointer ${
//                 isActive ? "text-white font-semibold" : "hover:text-white"
//               }`
//             }
//           >
//             Timer
//           </NavLink>
//         </nav>

//         <button
//           onClick={handleLogout}
//           className="absolute bottom-10 text-white/60 hover:text-white transition"
//         >
//           Logout
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main
//         className={`ml-64 flex-1 bg-softBg text-gray-800
//   ${
//     location.pathname === "/timer"
//       ? "h-screen overflow-hidden p-0"
//       : location.pathname === "/notes"
//         ? "h-screen overflow-hidden px-16 py-12"
//         : "min-h-screen overflow-y-auto px-16 py-12"
//   }`}
//       >
//         {children}
//       </main>

//       <FloatingTimer />
//     </div>
//   );
// }

// export default Layout;
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import FloatingTimer from "./FloatingTimer";

function Layout({ children }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isTimerPage = location.pathname === "/timer";
  const isNotesPage = location.pathname === "/notes";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <aside
        className="w-64 fixed top-0 left-0 h-full 
        bg-gradient-to-b from-[#6a67ce] to-[#4f4ca3]
        text-white p-10 shadow-2xl
        border-r border-white/10"
      >
        <h1 className="text-2xl font-semibold tracking-wide mb-16">
          StudySpace
        </h1>

        <nav className="space-y-8 text-white/80 text-lg">
          <NavLink to="/dashboard" className={({ isActive }) =>
            `block ${isActive ? "text-white font-semibold" : "hover:text-white"}`
          }>
            Dashboard
          </NavLink>

          <NavLink to="/tasks" className={({ isActive }) =>
            `block ${isActive ? "text-white font-semibold" : "hover:text-white"}`
          }>
            Tasks
          </NavLink>

          <NavLink to="/notes" className={({ isActive }) =>
            `block ${isActive ? "text-white font-semibold" : "hover:text-white"}`
          }>
            Notes
          </NavLink>

          <NavLink to="/timer" className={({ isActive }) =>
            `block ${isActive ? "text-white font-semibold" : "hover:text-white"}`
          }>
            Timer
          </NavLink>
        </nav>

        <button
          onClick={handleLogout}
          className="absolute bottom-10 text-white/60 hover:text-white transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main
        className={`ml-64 flex-1 
        ${isTimerPage || isNotesPage ? "h-screen overflow-hidden" : "overflow-y-auto"}
        px-16 py-12 bg-softBg text-gray-800`}
      >
        {children}
      </main>

      <FloatingTimer />
    </div>
  );
}

export default Layout;
