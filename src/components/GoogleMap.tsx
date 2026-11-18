import React from "react";

// 店舗の位置（青森県八戸市妙花生8-161）
const position = { lat: 40.4854, lng: 141.5455 };

// API キーが要らない Google マップの埋め込み URL
// maps.google.com/maps?q=緯度,経度&z=15&hl=ja&output=embed のリダイレクト先を直接指定している
const embedUrl = `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${position.lat},${position.lng}!6i15!3m1!1sja!5m1!1sja`;

const GoogleMap = () => {
  return (
    <div
      style={{
        width: "90%",
        maxWidth: "800px",
        height: "clamp(280px, 55vw, 420px)",
        margin: "0 auto",
      }}
    >
      <iframe
        src={embedUrl}
        title="イットフィールズイットの地図（Google マップ）"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
};

export default GoogleMap;
