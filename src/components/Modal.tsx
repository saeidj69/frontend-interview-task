import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      if (onClose) {
        onClose();
      }
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
          {title && (
            <h2 className="text-xl font-semibold text-black">{title}</h2>
          )}
          <button
            onClick={onClose}
            className="text-gray-500 text-2xl hover:text-gray-700 -mt-3"
          >
            &times;
          </button>
        </div>

        <div className="py-4">{children}</div>
      </div>
    </div>
  );
};
export default Modal;
