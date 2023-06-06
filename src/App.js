import React, { useState, useEffect, useRef } from "react";
import "./index.css";

function AlertModal({ message, visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Reminder
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{message}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [visible, setVisible] = useState(false);
  const audio = useRef(new Audio(process.env.PUBLIC_URL + "/Alarm03.wav"));

  const playSound = () => {
    audio.current.play();
    setVisible(true);
  };

  useEffect(() => {
    const timer = setInterval(playSound, 1800000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className="App h-screen flex items-center justify-center bg-blue-300">
      <AlertModal
        message="Time to drink water!"
        visible={visible}
        onClose={handleClose}
      />
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold text-white">
          Water Drinking Reminder
        </h1>
        <p className="text-white text-lg">
          You will receive a modal alert with sound every 30 minutes to drink
          water!
        </p>
      </div>
    </div>
  );
}

export default App;
