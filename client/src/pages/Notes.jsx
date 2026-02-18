import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";
import DraggableNote from "../components/DraggableNote";
import { useNavigate } from "react-router-dom";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await api.get("/notes");
    setNotes(res.data);
  };

  const handleDelete = async (id) => {
    await api.delete(`/notes/${id}`);
    fetchNotes();
  };

  const handleUpdate = async (id, updatedFields) => {
    try {
      setNotes((prev) =>
        prev.map((note) =>
          note._id === id ? { ...note, ...updatedFields } : note
        )
      );

      await api.put(`/notes/${id}`, updatedFields);

      setEditingId(null);
    } catch (error) {
      console.log("Update error:", error);
    }
  };

  const colors = [
    "bg-yellow-200",
    "bg-pink-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-purple-200",
    "bg-orange-200",
  ];

  return (
    <Layout>
     <div className="relative h-[calc(100vh-96px)] overflow-hidden">

        <div
          className="absolute inset-0 p-16"
          style={{
            backgroundColor: "#caa472",
            backgroundImage: "radial-gradient(#b68d5a 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-5xl font-semibold text-white drop-shadow">
              Your Notes
            </h1>

            <button
              onClick={() => navigate("/add-note")}
              className="px-6 py-3 bg-white/80 backdrop-blur rounded-xl shadow-md hover:shadow-lg transition"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              + Add Note
            </button>
          </div>

          {/* EMPTY STATE */}
          {notes.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-24 text-center">
              <div className="bg-white/80 backdrop-blur-md p-12 rounded-3xl shadow-xl max-w-md">
                <div className="text-6xl mb-6">🧷</div>

                <h2
                  className="text-3xl mb-4 text-[#7c4a22]"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  Your board is empty
                </h2>

                <p className="text-[#5c3d2e] mb-8">
                  Pin your first idea, reminder, or inspiration.
                  Let this board hold your creativity.
                </p>

                <button
                  onClick={() => navigate("/add-note")}
                  className="px-8 py-3 bg-[#8c5a2b] text-white rounded-full shadow-md hover:scale-105 transition"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  + Create First Note
                </button>
              </div>
            </div>
          ) : (
            /* Draggable Notes */
            notes.map((note, index) => (
              <DraggableNote
                key={note._id}
                note={note}
                index={index}
                colors={colors}
                editingId={editingId}
                setEditingId={setEditingId}
                expandedId={expandedId}
                setExpandedId={setExpandedId}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Notes;
