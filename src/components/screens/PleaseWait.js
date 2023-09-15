import React from "react";

const PleaseWait = () => {
  return (
    <div
      className="bg-gray-800"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1 className="text-white text-center font-bold mt-1 text-xl">
        Please Wait...
      </h1>
    </div>
  );
};

export default PleaseWait;
