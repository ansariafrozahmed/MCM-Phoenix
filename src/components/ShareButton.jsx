import React from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramShareButton,
  TelegramIcon,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";

const ShareButton = ({ url }) => {
  return (
    <div className="flex gap-2 items-center justify-start">
      <div>
        <h2 className="font-medium">Share On :</h2>
      </div>
      <div className="flex items-center gap-1">
        <EmailShareButton
          url={"https://github.com/next-share"}
          subject={"Next Share"}
          body="body"
        >
          <EmailIcon size={25} round />
        </EmailShareButton>

        <FacebookShareButton
          url={"https://github.com/next-share"}
          quote={
            "next-share is a social share buttons for your next React apps."
          }
          hashtag={"#nextshare"}
        >
          <FacebookIcon size={25} round />
        </FacebookShareButton>

        <LinkedinShareButton url={"https://github.com/next-share"}>
          <LinkedinIcon size={25} round />
        </LinkedinShareButton>

        <TelegramShareButton
          url={"https://github.com/next-share"}
          title={
            "next-share is a social share buttons for your next React apps."
          }
        >
          <TelegramIcon size={25} round />
        </TelegramShareButton>

        <TwitterShareButton
          url={"https://github.com/next-share"}
          title={
            "next-share is a social share buttons for your next React apps."
          }
        >
          <TwitterIcon size={25} round />
        </TwitterShareButton>

        <WhatsappShareButton
          url={"http://localhost:3000/the-power-of-forgiveness-in-islam?id=549"}
          //   title={
          //     "next-share is a social share buttons for your next React apps."
          //   }
          separator=":: "
        >
          <WhatsappIcon size={25} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default ShareButton;
