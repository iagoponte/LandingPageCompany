import React from 'react';

export const Modal = ({ isOpen, onClose, onProceed, message, proceedText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md text-center">
        <p className="text-lg text-gray-700 mb-6">{message}</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3">
          <button
            onClick={onProceed}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {proceedText}
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}