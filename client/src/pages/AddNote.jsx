
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import api from "../services/api";

function AddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/notes", {
        title,
        content,
      });

      console.log("Created:", res.data);

      navigate("/notes");
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen p-16">
        <h1 className="text-4xl font-semibold mb-10">
          Add New Note
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-xl"
        >
          <input
            type="text"
            placeholder="Title"
            className="w-full p-4 border rounded-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Write your thoughts..."
            className="w-full p-4 border rounded-lg resize-none"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg"
          >
            Save Note
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default AddNote;
