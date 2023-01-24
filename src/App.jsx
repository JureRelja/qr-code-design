import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center bg-[#D6E2F0] h-[100vh]">
      <div className="text-center bg-white p-4 rounded-2xl shadow-xl w-[330px] shadow-gray-300">
        <img className="rounded-xl" src="./assets/image-qr-code.png" />
        <div className="my-5 mx-1">
          <h3 className="text-2xl font-bold text-[#1F3251] pb-4  leading-1">
            Improve your front-end skils by building projects
          </h3>
          <p className="text-base font-normal text-[#8e969e]  leading-none">
            Scan this QR code to visit Frontend Mentor and put your coding
            skills to the test.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
