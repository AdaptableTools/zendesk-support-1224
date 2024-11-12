import React from "react";
import { ToastContainer } from "react-toastify";

const ConfiguredToastContainer = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
      theme="light"
    />
  );
};

export default ConfiguredToastContainer;
