import Head from "next/head";
import { FC } from "react";

import { DISCORD_URL, GITHUB_URL, SHOP_URL } from "../consts";
import Discord from "../icons/discord.svg";
import Github from "../icons/github.svg";
import ShoppingCart from "../icons/shopping_cart.svg";

export const Header: FC<{ title?: string }> = ({ title }) => {
  return (
    <>
      <div className="fixed w-full z-20">
        <Head>
          <title>{title ? `FYS - ${title}` : "FreeYourStream"}</title>
          <meta name="description" content="Home of FreeYourStream" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="flex items-center justify-center h-16 px-8 bg-gray-700 border-b-2 border-gray-600 text-white">
          <div className="flex justify-between items-center max-w-page flex-grow">
            <a href="/">
              <h1 className="font-fd font-thin text-3xl select-none">
                FreeYourStream
              </h1>
            </a>
            <div className="flex justify-between gap-4">
              <a target="_blank" href={SHOP_URL} className="flex w-6 h-6">
                <ShoppingCart className="fill-white" />
              </a>
              <a target="_blank" href={DISCORD_URL} className="flex w-6 h-6">
                <Discord className="h-6 fill-white" />
              </a>
              <a target="_blank" href={GITHUB_URL} className="flex w-6 h-6">
                <Github className="fill-white" />
              </a>
            </div>
          </div>
        </header>
      </div>
      <div className="h-24" />
    </>
  );
};
