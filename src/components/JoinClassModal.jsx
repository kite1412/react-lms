import { useState, useEffect } from "react";

function JoinClassModal({ onClose, onSubmit, isJoining }) {
  const [code, setCode] = useState("");
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimateIn(true);
  }, []);

  const handleJoin = () => {
    if (code.length === 7 && /^[A-Za-z0-9]+$/.test(code)) {
      onSubmit(code);
    } else {
      alert(
        "Class code must be 7 alphanumeric characters with no spaces/symbols."
      );
    }
  };

  return (
    <div
      className={`fixed top-1/2 left-1/2 z-[100] transform -translate-x-1/2 -translate-y-1/2 
        bg-white rounded-md w-[90%] max-w-md p-6 shadow-xl border 
        transition-all duration-300 ease-out
        ${animateIn ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
      <h2 className="text-xl font-semibold mb-4">Join Class</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">
          Class Code
        </label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Class Code..."
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          disabled={isJoining}
        />
        <p className="text-sm text-gray-500 mt-2">
          Ask your teacher for the class code, then enter it here.
        </p>
      </div>

      <div className="text-sm text-gray-700 mb-4">
        <ul className="list-disc ml-5 space-y-1">
          <li>Use an authorized account</li>
          <li>
            Use a class code with 7 letters or numbers, and no spaces or symbols
          </li>
        </ul>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onClose}
          className="text-red-500 font-medium cursor-pointer transition-transform duration-200 hover:text-red-600"
          disabled={isJoining}>
          Cancel
        </button>
        <button
          onClick={handleJoin}
          className="text-blue-500 font-medium cursor-pointer transition-transform duration-200  hover:text-blue-600"
          disabled={isJoining}>
          {isJoining ? "Joining..." : "Join"}
        </button>
      </div>
    </div>
  );
}

export default JoinClassModal;
