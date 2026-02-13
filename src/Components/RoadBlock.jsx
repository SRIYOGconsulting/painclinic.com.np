import { useEffect, useState, useCallback } from "react";

const RoadBlock = () => {
  const today = new Date();
  const day = today.getDate();
  const monthNames = [
    "january","february","march","april","may","june",
    "july","august","september","october","november","december"
  ];
  const month = monthNames[today.getMonth()];

  const [showRoadBlock, setShowRoadBlock] = useState(false);
  const [displayTimeLeft, setDisplayTimeLeft] = useState(5);
  const [timeLeft, setTimeLeft] = useState(20);
  const [isMobile, setIsMobile] = useState(false);

  // Close function
  const onClose = useCallback(() => {
    document.body.style.overflow = "";
    setShowRoadBlock(false);
  }, []);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 550);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show roadblock once per session
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("roadblock_seen");
    if (!hasSeen) {
      setShowRoadBlock(true);
      sessionStorage.setItem("roadblock_seen", "true");
    }
  }, []);

  // Hide scroll while roadblock is visible
  useEffect(() => {
    if (showRoadBlock) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showRoadBlock]);

  // Force-close timer (20s)
  useEffect(() => {
    if (!showRoadBlock) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onClose, showRoadBlock]);

  // Close button display timer (5s)
  useEffect(() => {
    if (!showRoadBlock) return;

    const timer = setInterval(() => {
      setDisplayTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [showRoadBlock]);

  // Handle missing image
  const handleImageError = () => onClose();

  return (
    <>
      {showRoadBlock && (
        <div className="fixed inset-0 bg-[#D0D0D0] z-[9999] flex items-center justify-center">
          <div className="relative">
            <button
              onClick={displayTimeLeft <= 0 ? onClose : undefined}
              className={`sm:-top-[10px] sm:-right-[10px] ${isMobile ? "top-[40px] right-0" : "-top-[10px] -right-[10px]"}`}
              style={{
                backgroundColor: "#055d59",
                borderRadius: "50%",
                border: "0px",
                width: "40px",
                height: "40px",
                textAlign: "center",
                position: "absolute",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: displayTimeLeft <= 0 ? "pointer" : "not-allowed",
              }}
            >
              {displayTimeLeft <= 0 ? "X" : displayTimeLeft}
            </button>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={`/roadblock/default/default.jpg`}
                onError={handleImageError}
                className="img-fluid rounded"
                style={{
                  borderRadius: "3%",
                  objectFit: "contain",
                  height: "550px",
                  width: "550px",
                }}
                alt="Advertisement"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default RoadBlock;
