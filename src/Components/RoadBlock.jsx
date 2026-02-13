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

  // Handle missing image - fallback to default
  const handleImageError = (e) => {
    if (!e.target.src.includes('/roadblock/default/default.jpg')) {
      e.target.src = '/roadblock/default/default.jpg';
    } else {
      // If even default image is missing, close the roadblock
      onClose();
    }
  };

  // OneSignal initialization
  useEffect(() => {
    // Check if OneSignal is already initialized
    if (window.OneSignalDeferred) {
      return;
    }

    // Initialize OneSignalDeferred
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    
    // Load OneSignal SDK script
    const script = document.createElement('script');
    script.src = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
    script.defer = true;
    document.head.appendChild(script);

    // Initialize OneSignal
    OneSignalDeferred.push(async function(OneSignal) {
      await OneSignal.init({
        appId: "add8c7e5-0874-4f9e-8961-71b987148955",
        notifyButton: {
          enable: true,
          position: 'bottom-right',
          theme: 'default',
          size: 'medium',
          showCredit: false,
          text: {
            'tip.state.unsubscribed': 'Subscribe to notifications',
            'tip.state.subscribed': 'You\'re subscribed to notifications',
            'tip.state.blocked': 'You\'ve blocked notifications',
            'message.prenotify': 'Click to subscribe to notifications',
            'message.action.subscribed': 'Thanks for subscribing!',
            'message.action.resubscribed': 'You\'re subscribed to notifications',
            'message.action.unsubscribed': 'You won\'t receive notifications again',
            'dialog.main.title': 'Manage Site Notifications',
            'dialog.main.button.subscribe': 'Subscribe',
            'dialog.main.button.unsubscribe': 'Unsubscribe',
            'dialog.blocked.title': 'Unblock Notifications',
            'dialog.blocked.message': 'Follow these instructions to allow notifications:'
          },
          colors: {
            'circle.background': '#234179',
            'circle.foreground': 'white',
            'badge.background': '#234179',
            'badge.foreground': 'white',
            'edge.circle.background': '#234179',
            'edge.circle.foreground': 'white',
            'badge.bordercolor': 'white',
            'pulse.color': '#234179',
            'dialog.button.background': '#234179',
            'dialog.button.foreground': 'white'
          }
        },
        welcomeNotification: {
          disable: true
        },
        promptOptions: {
          actionMessage: "We'd like to show you notifications for the latest news and updates.",
          acceptButtonText: "Allow",
          cancelButtonText: "No thanks"
        }
      });
    });

    return () => {
      // Cleanup if needed
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

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
