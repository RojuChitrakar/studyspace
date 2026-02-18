// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";
// import studyAnimation from "../assets/studyAnimation.json";
// import Lottie from "lottie-react";

// function Register() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       await api.post("/api/auth/register", {
//         name,
//         email,
//         password,
//       });

//       navigate("/");
//     } catch (error) {
//       alert("Registration failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-softBg flex items-center justify-center px-6 relative overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-pastelPurple/30 blur-3xl rounded-full"></div>
//       <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-pastelPink/30 blur-3xl rounded-full"></div>

//       <div className="grid md:grid-cols-2 bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full relative z-10">

//         {/* Left Section */}
//         <div className="hidden md:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-pastelPurple/20 to-pastelPink/20">

//           <div className="w-72">
//             <Lottie animationData={studyAnimation} loop />
//           </div>

//           <h2 className="text-2xl font-semibold mt-6">
//             Start Your Study Journey
//           </h2>

//           <p className="text-softGray text-center mt-3">
//             Build focus. Track growth. Stay consistent.
//           </p>

//         </div>

//         {/* Right Section */}
//         <div className="p-12">

//           <h1 className="text-3xl font-semibold mb-8">
//             Create Account
//           </h1>

//           <form onSubmit={handleRegister} className="space-y-6">

//             <div>
//               <label className="block text-sm mb-2 text-gray-600">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastelPurple transition"
//               />
//             </div>

//             <div>
//               <label className="block text-sm mb-2 text-gray-600">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastelPurple transition"
//               />
//             </div>

//             <div>
//               <label className="block text-sm mb-2 text-gray-600">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastelPurple transition"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-pastelPurple text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
//             >
//               Register
//             </button>

//           </form>

//           <p className="text-sm text-gray-600 mt-6">
//             Already have an account?{" "}
//             <span
//               onClick={() => navigate("/")}
//               className="text-pastelPurple cursor-pointer"
//             >
//               Sign In
//             </span>
//           </p>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default Register;
import study from "../assets/Study.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      navigate("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-softBg flex items-center justify-center px-6">
      <div className="grid md:grid-cols-2 bg-white shadow-soft rounded-2xl overflow-hidden max-w-5xl w-full">

        {/* Left Section (Same as Login) */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-pastelPurple/20 to-pastelPink/20 p-10">
          <img
            src={study}
            alt="Study Illustration"
            className="w-72 mb-6 animate-fadeIn"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            Start Your Study Journey
          </h2>
          <p className="text-softGray text-sm mt-2 text-center">
            Build focus. Track growth. Stay consistent.
          </p>
        </div>

        {/* Right Section */}
        <div className="p-10">
          <h1 className="text-3xl font-semibold text-gray-800 mb-8">
            Create Account
          </h1>

          <form onSubmit={handleRegister} className="space-y-6">

            <div>
              <label className="block text-sm text-softGray mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastelPurple transition"
              />
            </div>

            <div>
              <label className="block text-sm text-softGray mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastelPurple transition"
              />
            </div>

            <div>
              <label className="block text-sm text-softGray mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastelPurple transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pastelPurple text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              Register
            </button>

          </form>

          <p className="text-sm text-softGray mt-6">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-pastelPurple font-medium cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Register;
