import React from "react";
import Modal from "./Modal";

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Logout Confirmation">
      <div className="text-sm text-gray-600">
        Are you sure you want to log out?
      </div>
      <div className="flex justify-end gap-3 mt-5">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 text-sm rounded-md bg-red-500 text-white hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </Modal>
  );
};

export default LogoutModal;