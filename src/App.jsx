import "./App.css";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("https://www.frontendmentor.io");
  return (
    <div className="flex justify-center items-center bg-[#D6E2F0] h-[100vh] ">
      <div className="flex flex-col justify-center items-center bg-white p-9 w-[300px] rounded-2xl shadow-xl  shadow-gray-300 md:flex-row md:w-[600px]">
        <label className="md:mr-5 mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-[#1F3251] text-center">
            Enter the URL that you want to convert to QR code
          </h3>

          <input
            className="w-full border-2 border-[#2C7DFA] rounded-lg my-1 py-2 px-2 hover:shadow-xl shadow-gray-300 transition ease-in-out"
            type="url"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="URL"
          />
        </label>

        <div className="text-center">
          <QRCodeSVG value={url} fgColor={"#2C7DFA"} size={220} />
          <h3 className="text-2xl font-bold text-[#1F3251]">
            Scan your QR code
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
