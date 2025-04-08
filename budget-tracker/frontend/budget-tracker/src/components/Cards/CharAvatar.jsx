import React from "react";

const getInitials = (name) => {
  if (!name) return "";
  const nameParts = name.trim().split(" ");
  if (nameParts.length === 1) return nameParts[0][0].toUpperCase();
  return (
    nameParts[0][0].toUpperCase() + nameParts[nameParts.length - 1][0].toUpperCase()
  );
};

const CharAvatar = ({ fullName, width, height, style }) => {
  return (
    <div
      className={`${width || "w-12"} ${height || "h-12"} ${
        style || ""
      } flex items-center justify-center rounded-full text-gray-900 font-bold bg-gray-200`}
    >
      {getInitials(fullName || "")}
    </div>
  );
};

export default CharAvatar;
