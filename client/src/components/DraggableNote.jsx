import { useRef, useState } from "react";
import Draggable from "react-draggable";

function DraggableNote({
  note,
  index,
  colors,
  editingId,
  setEditingId,
  expandedId,
  setExpandedId,
  handleUpdate,
  handleDelete,
}) {
  const nodeRef = useRef(null);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds="parent"
      position={note.position}
      onStop={(e, data) => {
        handleUpdate(note._id, {
          position: { x: data.x, y: data.y },
        });
      }}
      enableUserSelectHack={false}
    >
      <div
        ref={nodeRef}
        className={`absolute p-6 w-72 shadow-2xl cursor-move ${
          colors[index % colors.length]
        }`}
        style={{
          position: "absolute",
          transform: `rotate(${index % 2 === 0 ? "-4deg" : "3deg"})`,
          fontFamily: "'Patrick Hand', cursive",
        }}
      >
        {/* Pin */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-600 rounded-full shadow-lg"></div>

        {editingId === note._id ? (
          <>
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full mb-3 p-2 bg-white/50 rounded"
            />

            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="w-full p-2 bg-white/50 rounded resize-none"
              rows="4"
            />

            <div className="flex justify-between mt-3 text-sm">
              <button
                onClick={() => {
                  handleUpdate(note._id, {
                    title: editTitle,
                    content: editContent,
                  });
                }}
                className="text-green-700 hover:underline"
              >
                Save
              </button>

              <button
                onClick={() => setEditingId(null)}
                className="text-gray-600 hover:underline"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h2
              className="text-xl italic mb-3"
              onClick={() =>
                setExpandedId(expandedId === note._id ? null : note._id)
              }
            >
              {note.title}
            </h2>

            {expandedId === note._id && (
              <p className="text-lg italic">{note.content}</p>
            )}
          </>
        )}

        <div className="flex justify-between mt-4 text-sm">
          <button
            onClick={() => setEditingId(note._id)}
            className="text-blue-700 hover:underline"
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(note._id)}
            className="text-red-700 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
    </Draggable>
  );
}

export default DraggableNote;
