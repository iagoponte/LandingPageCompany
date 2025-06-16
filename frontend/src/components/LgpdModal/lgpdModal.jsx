export const LgpdModal = ({ isOpen, onClose, message, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 sticky top-0 bg-white z-10 pb-2">
          {title}
        </h2>
        <div className="text-base text-gray-700 leading-relaxed space-y-4">
          {message}
        </div>
        <div className="mt-6 text-right sticky bottom-0 bg-white pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}