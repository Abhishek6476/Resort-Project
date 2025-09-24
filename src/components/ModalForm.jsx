export default function ModalForm({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay with only dark transparent background */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose} // overlay click se modal close hoga
      ></div>

      {/* Modal Box */}
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-lg mx-4 p-6 z-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Get a Quote
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
