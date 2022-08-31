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
    caption: "DIY Kit assembled (skeleton, no case, bit dusty)",
  },
  {
    url: "/images/back_overview_arduino_micro.jpg",
    caption: "DIY Kit partly assembled (back)",
  },
  {
    url: "/images/case_1.jpg",
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
    caption: "Case by eipporko, build by FaLk",
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
  {
    url: "/images/custom_build_1.jpg",
    caption: "Custom build 5x3 variant with a knob by Ryan Aukes",
  },
  {
    url: "/images/custom_build_2.png",
    caption:
      "Custom build 5x3 variant combined with the DeeJ project. Build by Flousen",
  },
  {
    url: "/images/custom_build_3.png",
    caption:
      "Custom build 3x3 variant combined with the deej project and knob. Build by Flousen",
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
        autoplay={process.env.NODE_ENV !== "development"}
        arrows={size.width >= 640}
        easing="ease"
        nextArrow={<Arrow direction="right" />}
        prevArrow={<Arrow direction="left" />}
        pauseOnHover
      >
        {slideImages.map((slideImage, index) => (
          <div
            key={index}
            className="each-slide relative flex justify-center mx-2 h-[500px]"
          >
            <a
              className="cursor-pointer"
              href={slideImage.url}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt={slideImage.caption}
                sizes="(max-width: 640px) 100vw, 1080px"
                objectFit="contain"
                layout="fill"
                className="justify-center rounded-2xl"
                src={slideImage.url}
              ></Image>
            </a>
            <span className="text-white z-10 md:mb-4 bg-gray-600 rounded-md px-4 py-2 self-end">
              {slideImage.caption}
            </span>
          </div>
        ))}
      </Slide>
    </div>
  );
};
