import { GITHUB_URL } from "../consts";
import { NextComponentType } from "next";

export const Footer: NextComponentType = () => {
  return (
    <footer className="bg-gray-900">
      <div className="flex justify-center bg-primary-600 text-white text-xl mb-16">
        <a target="_blank" href={GITHUB_URL}>
          <div className="p-4   ease-in-out transition-all hover:bg-primary-500 cursor-pointer">
            Shop
          </div>
        </a>
        <a target="_blank" href={GITHUB_URL}>
          <div className="p-4   ease-in-out transition-all hover:bg-primary-500 cursor-pointer">
            Discord
          </div>
        </a>
        <a href="/privacy">
          <div className="p-4   ease-in-out transition-all hover:bg-primary-500 cursor-pointer">
            Privacy Policy
          </div>
        </a>
        <a href="/imprint">
          <div className="p-4   ease-in-out transition-all hover:bg-primary-500 cursor-pointer">
            Imprint
          </div>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center text-white mb-16">
        <p>FreeYourStream UG</p>
        <p>Gutsmuthsstraße 14</p>
        <p>12163 Berlin</p>
        <p>GERMANY</p>
      </div>
    </footer>
  );
};
