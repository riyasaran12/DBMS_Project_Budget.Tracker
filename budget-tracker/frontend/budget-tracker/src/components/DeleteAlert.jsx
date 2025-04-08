import React from "react";

const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div>
      <p className="text-lg text-white">{content}</p>

      <div className="flex justify-end mt-6">
      <button
        type="button"
        className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg"
        onClick={onDelete}
      >
        Delete
      </button>

      </div>
    </div>
  );
};

export default DeleteAlert;
