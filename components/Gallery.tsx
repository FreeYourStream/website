import "react-slideshow-image/dist/styles.css";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";

const slideImages = [
  {
    url: "/images/component_overview_arduino_micro.jpg",
    caption: "Buyable DIY Kit",
  },
  {
    url: "/images/skeleton_1.jpg",
    caption: "DIY Kit assembled (skeleton, no case)",
  },
  {
    url: "/images/back_overview_arduino_micro.jpg",
    caption: "DIY Kit partly assembled (back)",
  },
  {
    url: "/images/case_1.webp",
    caption: "Case by Kilian Gosewisch",
  },
  {
    url: "/images/case_2.jpg",
    caption: "Case by Thijs Eigenwijs",
  },
  {
    url: "/images/case_3.jpg",
    caption: "Case by J. Haardt",
  },
  {
    url: "/images/case_4.jpg",
    caption: "Case by eipporko, build by FalK",
  },
  {
    url: "/images/case_5.jpg",
    caption: "Case by Flousen",
  },
  {
    url: "/images/config_1.jpg",
    caption: "The Configurator WebApp",
  },
  {
    url: "/images/config_2.jpg",
    caption: "Configuring the Image to display",
  },
  {
    url: "/images/config_3.jpg",
    caption: "Configuring the button actions",
  },
];
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 1000,
    height: 1000,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      const handleResize = () => {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Arrow: FC<{
  direction: "left" | "right";
  onClick?: (props: any) => void;
}> = ({ direction, onClick }) => {
  return (
    <div
      onClick={() =>
        onClick?.({
          currentTarget: {
            dataset: { type: direction === "left" ? "prev" : "next" },
          },
        })
      }
      className="cursor-pointer bg-gray-600 flex justify-center items-center w-12 h-12 rounded-md"
    >
      <div
        className={`border-y-8 border-y-gray-600 ${
          direction === "left"
            ? "border-r-8 border-r-white"
            : "border-l-8 border-l-white"
        }`}
      ></div>
    </div>
  );
};

export const Gallery: FC = () => {
  const size = useWindowSize();
  return (
    <div className="slide-container flex-grow -mx-4 md:mx-0">
      <Slide
        duration={5000}
        arrows={size.width >= 640}
        easing="ease"
        nextArrow={<Arrow direction="right" />}
        prevArrow={<Arrow direction="left" />}
        pauseOnHover
      >
        {slideImages.map((slideImage, index) => (
          <div
            key={index}
            className="each-slide relative flex flex-col items-center justify-center mx-2 h-[500px]"
          >
            <Image
              alt={slideImage.caption}
              sizes="(max-width: 640px) 100vw, 1080px"
              objectFit="contain"
              layout="fill"
              className="justify-center rounded-2xl"
              src={slideImage.url}
            ></Image>
            <span className="text-white -mt-4 bg-gray-600 rounded-md px-4 py-2">
              {slideImage.caption}
            </span>
          </div>
        ))}
      </Slide>
    </div>
  );
};