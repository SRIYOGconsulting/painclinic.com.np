import React from "react";
// Import your individual QR images
import qrImage1 from "/images/qr/qr-code.png";
import qrImage2 from "/images/qr/qr-loc.png";
import qrImage3 from "/images/qr/qr-fb.png";
import qrImage4 from "/images/qr/qr-tiktok.png";
import qrImage5 from "/images/qr/qr-insta.png";
import qrImage6 from "/images/qr/qr-code.png";

const Qr = () => {
  // Array with the QR code images, titles, and descriptions
  const qrCodes = [
    {
      title: "Google Review",
      description: "Scan this QR code to leave us a review on Google.",
      image: qrImage1,
    },
    {
      title: "Google Location",
      description: "Scan this code to view our location on Google Maps.",
      image: qrImage2,
    },
    {
      title: "Facebook",
      description: "Scan this code to view our page on Facebook and stay updated.",
      image: qrImage3,
    },
    {
      title: "Tiktok",
      description: "Scan this QR code to view our page on Tiktok and stay updated.",
      image: qrImage4,
    },
    {
      title: "Instagram",
      description: "Scan this QR code to view our page on Instagram and stay updated.",
      image: qrImage5,
    },
    {
      title: "Twitter",
      description: "Scan this QR code to view our page on Twitter and stay updated.",
      image: qrImage6,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 font-[sans-serif]">
      <section className="bg-white p-8 text-center">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {qrCodes.map((qr, index) => (
            <div key={index} className="w-full max-w-xs p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              {/* Title */}
              <h3 className="text-lg font-semibold text-[#0A2241] mb-4">
                {qr.title}
              </h3>
              
              {/* QR Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={qr.image}
                  alt={`QR Code for ${qr.title}`}
                  className="w-48 h-48 md:w-64 md:h-64 object-contain"
                />
              </div>

              {/* Paragraph */}
              <p className="text-[#707882] text-sm md:text-base mb-6">
                {qr.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Qr;
