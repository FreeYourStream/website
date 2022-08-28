import { NextComponentType } from "next";

import { GITHUB_URL } from "../consts";

export const Footer: NextComponentType = () => {
  return (
    <footer className="bg-gray-900">
      <div className="flex flex-col gap-1  md:flex-row justify-center items-center bg-gradient-to-r from-primary-400 to-primary-600 text-white text-xl mb-16">
        <a
          className="w-full bg-primary-500 md:bg-opacity-0 md:w-auto"
          target="_blank"
          href={GITHUB_URL}
        >
          <div className="py-4 px-12 ease-in-out transition-all hover:bg-primary-700 cursor-pointer text-center">
            Shop
          </div>
        </a>
        <a
          className="w-full bg-primary-500 md:bg-opacity-0 md:w-auto"
          target="_blank"
          href={GITHUB_URL}
        >
          <div className="py-4 px-12 ease-in-out transition-all hover:bg-primary-700 cursor-pointer text-center">
            Discord
          </div>
        </a>
        <a
          className="w-full bg-primary-500 md:bg-opacity-0 md:w-auto"
          href="/privacy"
        >
          <div className="py-4 px-12 ease-in-out transition-all hover:bg-primary-700 cursor-pointer text-center">
            Privacy Policy
          </div>
        </a>
        <a
          className="w-full bg-primary-500 md:bg-opacity-0 md:w-auto"
          href="/imprint"
        >
          <div className="py-4 px-12 ease-in-out transition-all hover:bg-primary-700 cursor-pointer text-center">
            Imprint
          </div>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center text-white pb-16">
        <p>FreeYourStream UG</p>
        <p>Gutsmuthsstraße 14</p>
        <p>12163 Berlin</p>
        <p>GERMANY</p>
      </div>
    </footer>
  );
};
