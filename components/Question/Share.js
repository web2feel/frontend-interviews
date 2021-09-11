import React from "react";
import {
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
function Share({ title, slug }) {
  let baseURL = process.env.NEXT_PUBLIC_HOST;
  let siteURL = `${baseURL}question/${slug}`;
  return (
    <div className="flex items-center gap-x-1 ">
      <TwitterShareButton url={siteURL} title={title}>
        <TwitterIcon size={32} borderRadius={5} bgStyle={{ opacity: 0.4 }} />
      </TwitterShareButton>
      <WhatsappShareButton url={siteURL} title={title}>
        <WhatsappIcon size={32} borderRadius={5} bgStyle={{ opacity: 0.4 }} />
      </WhatsappShareButton>
      <TelegramShareButton url={siteURL} title={title}>
        <TelegramIcon size={32} borderRadius={5} bgStyle={{ opacity: 0.4 }} />
      </TelegramShareButton>
    </div>
  );
}

export default Share;
