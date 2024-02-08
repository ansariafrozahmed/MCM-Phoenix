import React from "react";

const FloatingButton = () => {
  return (
    <div className="fixed bottom-4 transition-all ease-in-out hover:scale-110 cursor-pointer left-4 z-50 h-10 w-10">
      <a href="https://wa.me/16023064959" target="_blank">
        <img src="/whatsapp.webp" alt="" />
      </a>
    </div>
  );
};

export default FloatingButton;
