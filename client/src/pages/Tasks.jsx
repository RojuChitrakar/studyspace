import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import todoBackgroundImg from "../assets/todoBackgroundImg.png";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const toggleStatus = async (task) => {
    await api.put(`/tasks/${task._id}`, {
      status: task.status === "completed" ? "pending" : "completed",
    });
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const colors = [
    "bg-yellow-100",
    "bg-pink-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-purple-100",
    "bg-orange-100",
  ];

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-14">
          <h1 className="text-5xl font-semibold">To-Do List</h1>

          <button
            onClick={() => navigate("/add-task")}
            className="px-6 py-3 bg-pastelPurple text-white rounded-xl shadow-md hover:shadow-lg transition"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            + New Task
          </button>
        </div>

        {/* EMPTY STATE */}
        {tasks.length === 0 ? (
          <div className="mt-20 flex flex-col items-center text-center text-[#7c4a22]">
            <div className="text-7xl mb-6">📒</div>

            <h2
              className="text-3xl mb-3"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              Your planner is empty
            </h2>

            <p className="max-w-md text-lg opacity-80 mb-8">
              Add your first task and start organizing your day.
              Small steps today create big success tomorrow.
            </p>

            <button
              onClick={() => navigate("/add-task")}
              className="px-8 py-4 bg-pastelPurple text-white rounded-full shadow-md hover:scale-105 transition"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              + Add First Task
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {tasks.map((task, index) => (
              <div
                key={task._id}
                className={`relative p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  colors[index % colors.length]
                }`}
                style={{
                  fontFamily: "'Patrick Hand', cursive",
                  transform: `rotate(${index % 2 === 0 ? "-1deg" : "1deg"})`,
                }}
              >
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/60 rotate-2"></div>

                <div className="flex items-start gap-4">
                  {/* Checkbox */}
                  <div
                    onClick={() => toggleStatus(task)}
                    className={`w-7 h-7 mt-1 rounded-full border-2 cursor-pointer flex items-center justify-center transition ${
                      task.status === "completed"
                        ? "bg-green-400 border-green-400"
                        : "border-gray-600"
                    }`}
                  >
                    {task.status === "completed" && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>

                  {/* Task Content */}
                  <div
                    className="flex-1 cursor-pointer"
                    onClick={() => toggleExpand(task._id)}
                  >
                    <h2
                      className={`text-2xl italic transition ${
                        task.status === "completed"
                          ? "line-through text-gray-400"
                          : "text-gray-800"
                      }`}
                    >
                      {task.title}
                    </h2>

                    {task.dueDate && (
                      <p className="text-sm mt-2 text-gray-600">
                        Due:{" "}
                        {new Date(task.dueDate).toLocaleDateString()}
                      </p>
                    )}

                    {expandedId === task._id &&
                      task.description && (
                        <p className="mt-4 text-lg italic text-gray-700 transition-all duration-300">
                          {task.description}
                        </p>
                      )}
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Tasks;

