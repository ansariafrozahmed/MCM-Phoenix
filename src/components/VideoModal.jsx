"use client";
import { Play } from "lucide-react";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

const VideoModal = ({ videoid }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoid}
        onClose={() => setOpen(false)}
      />
      <div className="bg-white p-2 transition-all ease-in-out hover:scale-105 h-14 w-14 flex items-center justify-center rounded-full absolute top-[50%] left-[50%] z-50 -translate-x-[50%] -translate-y-[50%] cursor-pointer">
        <Play
          size={30}
          strokeWidth={3}
          onClick={() => setOpen(true)}
          className="ml-1 text-aqua  "
        />
      </div>
      {/* <button className="btn-primary"></button> */}
    </div>
  );
};

export default VideoModal;
