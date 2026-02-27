// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Layout from "../components/Layout";
// import api from "../services/api";

// function AddTask() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: "",
//     subject: "",
//     description: "",
//     priority: "Medium",
//     dueDate: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await api.post("/tasks", formData);
//       navigate("/tasks");
//     } catch (error) {
//       alert("Failed to create task");
//     }
//   };

//   return (
//     <Layout>
//       <div className="max-w-2xl mx-auto">

//         <h1 className="text-4xl font-semibold mb-10">
//           Add New Task
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-6">

//           <input
//             type="text"
//             name="title"
//             placeholder="Task title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastelPurple"
//           />

//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastelPurple"
//           />

//           <textarea
//             name="description"
//             placeholder="Description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastelPurple"
//           />

//           <select
//             name="priority"
//             value={formData.priority}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastelPurple"
//           >
//             <option>Low</option>
//             <option>Medium</option>
//             <option>High</option>
//           </select>

//           <input
//             type="date"
//             name="dueDate"
//             value={formData.dueDate}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastelPurple"
//           />

//           <button
//             type="submit"
//             className="w-full bg-pastelPurple text-white py-3 rounded-xl hover:opacity-90 transition"
//           >
//             Create Task
//           </button>

//         </form>

//       </div>
//     </Layout>
//   );
// }

// export default AddTask;


//updated

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import api from "../services/api";

function AddTask() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    dueDate: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // ✅ Prevent past date submission
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(formData.dueDate);

    if (selectedDate < today) {
      setError("Due date cannot be in the past.");
      return;
    }

    try {
      await api.post("/tasks", formData);
      navigate("/tasks");
    } catch (error) {
      setError("Failed to create task");
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">

        <h1 className="text-4xl font-semibold mb-10">
          Add New Task
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="title"
            placeholder="Task title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastelPurple"
          />

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastelPurple"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}  // ✅ blocks past date in UI
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastelPurple"
          />

          {/* Error Message */}
          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-pastelPurple text-white py-3 rounded-xl hover:opacity-90 transition"
          >
            Create Task
          </button>

        </form>

      </div>
    </Layout>
  );
}

export default AddTask;