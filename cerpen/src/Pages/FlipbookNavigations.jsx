import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import Story from "./Story";
import LandingPage from "./LandingPage.jsx";

export default function FlipBookNavigation() {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [deviceType, setDeviceType] = useState("desktop");

  const onPageFlip = (e) => {
    setCurrentPage(e.data);
  };

  const goToStory = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDeviceType("mobile");
      } else if (width < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    checkDeviceType();

    window.addEventListener("resize", checkDeviceType);

    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, []);

  const getBookDimensions = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    switch (deviceType) {
      case "mobile":
        return {
          width: width,
          height: height,
          pageMode: 1,
          startPage: 0,
          usePortrait: true,
        };
      case "tablet":
        return {
          width: width,
          height: height,
          pageMode: 2,
          startPage: 0,
          usePortrait: true,
        };
      default:
        return {
          width: Math.min(width, 1920),
          height: Math.min(height, 1080),
          pageMode: 2,
          startPage: 0,
          usePortrait: true,
        };
    }
  };

  const bookDimensions = getBookDimensions();

  return (
    <div
      className={`
      w-full 
      h-screen 
      flex 
      flex-col 
      items-center 
      justify-center 
      overflow-hidden 
      ${deviceType === "mobile" ? "p-0" : "p-4"}
    `}
    >
      <HTMLFlipBook
        width={bookDimensions.width}
        height={bookDimensions.height}
        ref={bookRef}
        onFlip={onPageFlip}
        responsive={true}
        pageMode={bookDimensions.pageMode}
        startPage={bookDimensions.startPage}
        usePortrait={bookDimensions.usePortrait}
        className={`
          max-w-full 
          max-h-full 
          ${deviceType === "mobile" ? "w-full h-full" : ""}
        `}
      >
        <div
          className={`
          demoPage 
          w-full 
          h-full 
          ${deviceType === "mobile" ? "overflow-y-auto" : ""}
          ${deviceType === "mobile" ? "p-2" : "p-0"}
        `}
        >
          <LandingPage goToStory={goToStory} />
        </div>

        <div
          className={`
          demoPage 
          w-full 
          h-full 
          overflow-y-auto 
          ${deviceType === "mobile" ? "p-2" : "p-0"}
        `}
        >
          <Story />
        </div>
      </HTMLFlipBook>

      <div
        className={`
        fixed 
        bottom-4 
        left-4 
        p-2 
        bg-gray-800 
        text-white 
        rounded-lg 
        z-10 
        ${deviceType === "mobile" ? "text-xs" : ""}
      `}
      >
        {currentPage === 0 ? "Halaman: Landing Page" : "Halaman: Story"}
      </div>
    </div>
  );
}
