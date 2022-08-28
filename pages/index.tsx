import type { NextPage } from "next";

import { Anchor } from "../components/Anchor";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Title } from "../components/Title";
import {
  CONFIGURATOR_URL,
  DISCORD_URL,
  GITHUB_URL,
  SHOP_URL,
  WIKI_URL,
} from "../consts";
import ConfiguratorIcon from "../icons/configurator.svg";
import DiscordIcon from "../icons/discord.svg";
import GitHubIcon from "../icons/github.svg";
import ShopIcon from "../icons/shopping_cart.svg";
import WikiIcon from "../icons/wiki.svg";

const Home: NextPage = () => {
  return (
    <div className="">
      <Header />
      <Main color="#ffff">
        <div className="h-16" />
        <div
          style={{
            backgroundImage: "url(freedeck-hero.jpeg)",
            backgroundSize: "cover",
          }}
          className="fixed h-[600px] md:h-[420px] w-full left-0 -z-10 opacity-30 bg-black"
        ></div>
        <div className="flex flex-col md:flex-row md:items-start align-middle justify-center text-white mb-16">
          <div className="flex justify-center">
            <div className="w-[362px] h-[275px] relative -mx-7 md:mx-0">
              <a
                href={SHOP_URL}
                target="_blank"
                className="bg-white rounded-md flex justify-center items-center cursor-pointer absolute top-0 w-[108px] h-[74px] text-black font-bold flex-col"
              >
                <ShopIcon className="fill-black w-10"></ShopIcon>
                Shop
              </a>
              <a
                href={CONFIGURATOR_URL}
                target="_blank"
                className="bg-white rounded-md flex justify-center items-center cursor-pointer absolute top-[100px] w-[108px] h-[74px] text-black font-bold flex-col"
              >
                <ConfiguratorIcon className="fill-black w-10"></ConfiguratorIcon>
                Configurator
              </a>
              <div
                style={{ lineHeight: "66px", fontSize: "100px" }}
                className="font-fd font-thin absolute left-[117px] text-white"
              >
                FREE
              </div>
              <div
                style={{ lineHeight: "66px", fontSize: "100px" }}
                className="font-fd font-normal absolute top-[100px] left-[122px] text-white tracking-tighter"
              >
                DECK
              </div>{" "}
              <a
                href={WIKI_URL}
                target="_blank"
                className="bg-white rounded-md flex justify-center items-center cursor-pointer absolute top-[200px] w-[108px] h-[74px] text-black font-bold flex-col"
              >
                <WikiIcon className="fill-black w-10"></WikiIcon>
                Wiki
              </a>{" "}
              <a
                href={GITHUB_URL}
                target="_blank"
                className="bg-white rounded-md flex justify-center items-center cursor-pointer absolute top-[200px] left-[127px] w-[108px] h-[74px] text-black font-bold flex-col"
              >
                <GitHubIcon className="fill-black w-10"></GitHubIcon>
                GitHub
              </a>{" "}
              <a
                href={DISCORD_URL}
                target="_blank"
                className="bg-white rounded-md flex justify-center items-center cursor-pointer absolute top-[200px] left-[254px] w-[108px] h-[74px] text-black font-bold flex-col"
              >
                <DiscordIcon className="fill-black w-10"></DiscordIcon>
                Discord
              </a>
            </div>
          </div>
          <div
            style={{ color: "#fff0" }}
            className="flex flex-col bg-clip-text bg-gradient-to-tr from-primary-100 to-primary-300 gap-5 mt-24 md:mt-0 text-center md:text-left"
          >
            <div className="md:ml-8 flex flex-col text-4xl">
              <p>Everything</p>
              <p>at your fingertips</p>
            </div>
            <div className="md:ml-8 flex flex-col text-4xl">
              <p>No</p>
              <p>Bullshit</p>
            </div>
            <div className="md:ml-8 flex flex-col text-4xl">
              <p>DIY</p>
              <p>Open Source</p>
            </div>
          </div>
        </div>
      </Main>
      <Main color="bg-primary-800">
        <Title text="What is the FreeDeck?" />
        <p className="text-white max-w-[700px]">
          The FreeDeck is a macro pad. But instead of buttons it has screens
          which you can press and provide a nice tactical feedback. The heart of
          the FreeDeck is either a Raspberry Pi Pico or an Arduino Pro Micro.
          You can configure exactly what you want it to do with the
          FreeDecK-Configurator which is available for every OS as a WebApp and
          App which enables additional functionality. You can search and share
          preconfigured pages in the FreeDeck-Hub (soon) and let the ideas of
          others inspire you! It’s firmware, configurator and hardware is
          completely open source. The FreeDeck itself has a serial api which
          enables you to do whatever you want and we also provide a python
          library for that.
        </p>
      </Main>
      <Main>
        <div className="text-right">
          <Title text="Frequently Asked Question – FAQ" />
          <div className="max-w-[400px] ml-auto">
            <Title small text="Is it Open Source?" />
            <p className="text-white">
              Yes! Hardware, software, firmware, configurator, PCBs, cases and
              all drawings are open source
            </p>
            <Title small text="Where can I find a demo?" />
            <p className="text-white">
              You can find multiple videos on{" "}
              <Anchor
                text="YouTube"
                newTab
                href="https://www.youtube.com/watch?v=-3Zw8hbpVq4"
              />
              .
            </p>
            <p className="text-white">
              Here is a{" "}
              <Anchor
                href="https://www.hackster.io/news/the-freedeck-brings-faster-shortcuts-to-your-fingertips-470e26acf202"
                newTab
                text="hackster.io"
              />{" "}
              article
            </p>
            <Title small text="What do I need to use a FreeDeck?" />
            <p className="text-white">
              Nothing special. Any modern OS will do as the FreeDeck simulates a
              USB-Keyboard. The App is available for Windows, Linux and Mac. A{" "}
              <Anchor text="WebApp" href={CONFIGURATOR_URL} newTab /> is also
              available.
            </p>
            <Title small text="How do I get started?" />
            <p className="text-white">
              Check out the <Anchor text="Wiki" href={WIKI_URL} newTab /> first.
              Maybe check out Adams Video on{" "}
              <Anchor
                text="YouTube"
                newTab
                href="https://www.youtube.com/watch?v=-3Zw8hbpVq4"
              />
              , too.
            </p>
            <p className="text-white">
              If you have any other questions check out our{" "}
              <Anchor text="Discord" newTab href={DISCORD_URL} />!
            </p>
          </div>
        </div>
      </Main>
      {/* <Main color="bg-primary-800">
        <div className="flex justify-center mt-16">
          <div className="w-[384px] h-[282px] relative">
            <div className="absolute top-0 w-[114px] h-[79px] grid- bg-white rounded-md"></div>
            <div className="absolute top-[102px] w-[114px] h-[79px] bg-white rounded-md"></div>
            <div
              style={{ lineHeight: "65px", fontSize: "110px" }}
              className="font-fd font-thin absolute left-[125px] text-white"
            >
              FREE
            </div>
            <div
              style={{ lineHeight: "65px", fontSize: "110px" }}
              className="font-fd absolute top-[102px] left-[130px] text-white tracking-tighter"
            >
              DECK
            </div>
            <div className="absolute top-[204px] w-[114px] h-[79px] bg-white rounded-md"></div>
            <div className="absolute top-[204px] left-[135px] w-[114px] h-[79px] bg-white rounded-md"></div>
            <div className="absolute top-[204px] left-[270px] w-[114px] h-[79px] bg-white rounded-md"></div>
          </div>
        </div>
      </Main> */}
      <Footer />
    </div>
  );
};

export default Home;
