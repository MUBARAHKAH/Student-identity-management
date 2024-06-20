// src/QrCodeDisplay.jsx
import React from "react";
import QRCode from "qrcode.react";
import { idCardData } from "../../../data";

const QrCodeDisplay = () => {
  const idInfo = "Student matricNumber: 20/52Hl120"; // Use actual ID information here

  return (
    <div className="qr-code-display">
      <h1>QR Code Display</h1>
      <QRCode value={idInfo} />
    </div>
  );
};

export default QrCodeDisplay;
