import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import Lottie from "lottie-react";
import studyAnimation from "../assets/studyAnimation.json";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import DraggableNote from "../components/DraggableNote";
import reflectionImg from "../assets/reflection.png";

function Dashboard() {
  console.log("Dashboard rendered");

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      const tasksRes = await api.get("/api/tasks");
      const notesRes = await api.get("/api/notes");
      setTasks(tasksRes.data);
      setNotes(notesRes.data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* HERO */}
        <section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between pt-6 relative">
          {/* Background Glow */}
          <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-pastelPurple/25 blur-3xl rounded-full"></div>
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-pastelPink/25 blur-3xl rounded-full"></div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <h1 className="text-6xl font-semibold leading-tight">
              Focus is built.
            </h1>

            <p className="text-lg text-softGray">
              Welcome back, {user?.name}. Create something meaningful today.
            </p>

            <div className="border-l-4 border-pastelPurple pl-6">
              <p className="text-2xl italic text-gray-700">
                The hours you protect become the life you build.
              </p>
            </div>
          </div>

          <div className="w-80 relative z-10">
            <Lottie animationData={studyAnimation} loop />
          </div>

          {/* STICKY NOTES FLOATING (NOT A BLOCK) */}
          {/* DRAGGABLE STICKY NOTES */}
          {/* {notes.slice(0, 6).map((note, index) => {
            const colors = [
              "bg-yellow-200",
              "bg-pink-200",
              "bg-blue-200",
              "bg-green-200",
              "bg-purple-200",
              "bg-orange-200",
            ];

            return (
              <DraggableNote
                key={note._id}
                note={note}
                color={colors[index % colors.length]}
                top={`${150 + index * 40}px`}
                left={`${200 + index * 60}px`}
              />
            );
          })} */}
        </section>

        {/* CALENDAR + NOTEBOOK TODO */}
        <section className="mt-20 grid md:grid-cols-2 gap-20">
          {/* Calendar */}
          <div>
            <h2 className="text-3xl font-medium mb-6">This Month</h2>

            <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-md">
              <DayPicker mode="single" selected={date} onSelect={setDate} />
            </div>
          </div>

          {/* Notebook To-Do */}
          {/* Notebook Style To-Do */}

          {/* Artistic Journal Notebook */}
          <div>
            <h2 className="text-3xl font-medium mb-8">To-Do List</h2>

            <div className="relative min-h-[450px] w-full">
              {/* Paper */}
              <div className="relative bg-[#fffdf8] shadow-2xl p-14 min-h-[450px] rotate-[0.8deg]">
                {/* Black Margin Line */}
                <div className="absolute top-0 bottom-0 left-20 w-[3px] bg-black z-10"></div>

                {/* Horizontal Journal Lines */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(#fffdf8,#fffdf8_42px,#e5e7eb_43px)] pointer-events-none z-0"></div>

                {/* Content */}
                {/* Content */}
                <div
                  className="relative pl-28 pt-6 z-20"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  {tasks.slice(0, 6).map((task) => (
                    <p
                      key={task._id}
                      className="text-[20px] leading-[42px] italic text-[#1b1b1b]"
                    >
                      • {task.title}
                    </p>
                  ))}
                </div>
              </div>

              {/* Spiral Punch Holes (OUTSIDE paper, above everything) */}
              <div className="absolute left-4 top-6 bottom-6 flex flex-col justify-between z-30">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 bg-white border-2 border-gray-300 rounded-full shadow-inner"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* REFLECTION SECTION */}
        <section className="mt-32 relative">
          <div className="bg-gradient-to-r from-pastelPurple/15 to-pastelPink/15 rounded-[30px] p-16 grid md:grid-cols-2 items-center gap-12">
            {/* Left Text */}
            <div>
              <h2 className="text-4xl font-semibold mb-6">Pause & Reflect</h2>

              <p className="text-lg text-gray-700">
                Progress isn’t always loud. Sometimes it’s quiet discipline,
                consistent effort, and small focused hours.
              </p>

              <button
                onClick={() => navigate("/notes")}
                className="mt-8 bg-pastelPurple text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
              >
                Write Today’s Reflection
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={reflectionImg}
                alt="Reflection Illustration"
                className="w-80 object-contain"
              />
            </div>
          </div>
        </section>

        {/* FOOTER SECTION */}
        <footer className="mt-16 bg-[#f5f3ff] border-t border-purple-200">
          <div className="px-12 py-12 grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-3">StudySpace</h3>
              <p className="text-sm text-gray-600">
                A creative productivity space built for focus, clarity and
                artistic learning.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Navigate</h3>
              <p
                className="text-sm text-gray-600 cursor-pointer hover:text-pastelPurple"
                onClick={() => navigate("/tasks")}
              >
                Tasks
              </p>
              <p
                className="text-sm text-gray-600 cursor-pointer hover:text-pastelPurple mt-2"
                onClick={() => navigate("/notes")}
              >
                Notes
              </p>
              <p
                className="text-sm text-gray-600 cursor-pointer hover:text-pastelPurple mt-2"
                onClick={() => navigate("/timer")}
              >
                Focus Timer
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Daily Reminder</h3>
              <p className="text-sm text-gray-600 italic">
                Consistency builds identity.
              </p>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 py-6 border-t border-purple-200">
            © {new Date().getFullYear()} StudySpace · Designed for focused
            creators
          </div>
        </footer>
      </div>
    </Layout>
  );
//   return (
//   <div style={{ background: "red", height: "100vh" }}>
//     <h1>DASHBOARD</h1>
//   </div>
// );

}

export default Dashboard;
