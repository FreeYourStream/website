import { NextComponentType } from "next";
import Link from "next/link";
import { FC, ReactNode } from "react";

import { DISCORD_URL, SHOP_URL } from "../consts";

export const FooterLink: FC<{
  newTab?: boolean;
  href: string;
  children: ReactNode;
}> = ({ newTab = false, href, children }) => {
  if (newTab)
    return (
      <a
        rel="noreferrer"
        className="w-full  md:border-b-0 border-b-2 md:border-primary-50 md:w-auto"
        target="_blank"
        href={href}
      >
        <div className="py-4 px-12 ease-in-out transition-all hover:bg-primary-700 cursor-pointer text-center">
          {children}
        </div>
      </a>
    );
  else
    return (
      <Link
        className="w-full  md:border-b-0 border-b-2 md:border-primary-50 md:w-auto"
        href={href}
      >
        <div className="py-4 px-12 ease-in-out transition-all hover:bg-primary-700 cursor-pointer text-center">
          {children}
        </div>
      </Link>
    );
};

export const Footer: NextComponentType = () => {
  return (
    <footer className="bg-gray-900">
      <div className="md:flex md:flex-row justify-center items-center bg-gradient-to-r from-primary-400 to-primary-600 text-white text-xl mb-16">
        <FooterLink newTab href={SHOP_URL}>
          Shop
        </FooterLink>
        <FooterLink newTab href={DISCORD_URL}>
          Discord
        </FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/imprint">Imprint</FooterLink>
      </div>
      <div className="flex flex-col justify-center items-center text-white pb-16">
        <p>FreeYourStream UG</p>
        <p>Gutsmuthsstr. 14</p>
        <p>12163 Berlin</p>
        <p>GERMANY</p>
      </div>
    </footer>
  );
};
