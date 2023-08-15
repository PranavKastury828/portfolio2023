import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const ButtonHeader: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      className="bg-gradient-to-r from-slate-400 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonHeader;
