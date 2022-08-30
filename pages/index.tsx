import type { NextPage } from "next";
import Image from "next/image";
import { FC, ReactNode } from "react";

import { Anchor } from "../components/Anchor";
import { Body } from "../components/Body";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { Section } from "../components/Section";
import {
  CONFIGURATOR_URL,
  DISCORD_URL,
  DOWNLOAD_URL,
  GITHUB_URL,
  SHOP_URL,
  WIKI_URL,
} from "../consts";
import ConfiguratorIcon from "../icons/configurator.svg";
import DeckIcon from "../icons/deck.svg";
import DiscordIcon from "../icons/discord.svg";
import FreeIcon from "../icons/free.svg";
import GitHubIcon from "../icons/github.svg";
import ShopIcon from "../icons/shopping_cart.svg";
import WikiIcon from "../icons/wiki.svg";

const DisplayCard: FC<{
  className?: string;
  href: string;
  children: ReactNode;
  x: number;
  y: number;
}> = ({ className = "", href, children, x, y }) => {
  return (
    <a
      rel="noreferrer"
      href={href}
      target="_blank"
      style={{ fontSize: "12px" }}
      className={`bg-white hover:bg-primary-300 rounded-md flex justify-center items-center cursor-pointer text-black font-bold flex-col ${className}`}
    >
      {children}
    </a>
  );
};

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Anchor
        href="https://www.paypal.com/donate/?hosted_button_id=AE87G9FC5DG8C"
        newTab
      >
        <div className="fixed bottom-4 right-4 z-50 text-primary-700 rounded bg-white p-4 md:px-8">
          Donate
        </div>
      </Anchor>
      <Header />
      <Body noBG>
        <Section transparent>
          <div className="fixed h-[600px] md:h-[420px] w-full left-0 -z-10 opacity-30 bg-black">
            <Image
              quality={30}
              alt={"Hero"}
              sizes="100vh"
              objectFit="cover"
              layout="fill"
              src="/freedeck-hero.jpeg"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start align-middle justify-center text-white mb-16">
            <div className="grid grid-rows-3 gap-y-4 max-w-[25rem] -mx-5 md:mx-0">
              <div className="grid grid-cols-3 gap-x-4">
                <DisplayCard x={0} y={0} href={SHOP_URL}>
                  <ShopIcon className="fill-black w-1/3"></ShopIcon>
                  Shop
                </DisplayCard>
                <div className="flex justify-between font-fd font-thin text-white align-text-top col-start-2 col-end-4">
                  <FreeIcon className="fill-white" />
                </div>
              </div>
              <div className="grid grid-cols-3  gap-x-4">
                <DisplayCard x={0} y={1} href={CONFIGURATOR_URL}>
                  <ConfiguratorIcon className="fill-black w-1/3"></ConfiguratorIcon>
                  Configurator
                </DisplayCard>
                <div className="flex justify-between font-fd font-normal text-white col-start-2 col-end-4">
                  <DeckIcon className="fill-white" />
                </div>
              </div>
              <div className=" gap-x-4 grid grid-cols-3">
                <DisplayCard x={0} y={2} href={WIKI_URL}>
                  <WikiIcon className="fill-black w-1/3"></WikiIcon>
                  Wiki
                </DisplayCard>{" "}
                <DisplayCard x={1} y={2} href={GITHUB_URL}>
                  <GitHubIcon className="fill-black w-1/3"></GitHubIcon>
                  GitHub
                </DisplayCard>{" "}
                <DisplayCard x={2} y={2} href={DISCORD_URL}>
                  <DiscordIcon className="fill-black w-1/3"></DiscordIcon>
                  Discord
                </DisplayCard>
              </div>
            </div>
            <div
              style={{ color: "#fff0" }}
              className="flex flex-col bg-clip-text bg-gradient-to-tr from-primary-100 to-primary-300 gap-6 mt-24 md:mt-0 text-center md:text-left"
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
        </Section>
        <Section color title="What is the FreeDeck?">
          <p className="text-white max-w-[700px]">
            The FreeDeck is a macro pad. But instead of buttons it has screens
            which you can press and provide a nice tactical feedback. The heart
            of the FreeDeck is either a Raspberry Pi Pico or an Arduino Pro
            Micro. You can configure exactly what you want it to do with the
            FreeDecK-Configurator which is available for every OS as a WebApp
            and App which enables additional functionality. You can search and
            share preconfigured pages in the FreeDeck-Hub (soon) and let the
            ideas of others inspire you! It’s firmware, configurator and
            hardware is completely open source. The FreeDeck itself has a serial
            api which enables you to do whatever you want and we also provide a
            python library for that.
          </p>
        </Section>
        <Section title="Frequently Asked Questions – FAQ">
          <div className="flex flex-wrap justify-center gap-8">
            <Card title="Is it Open Source?">
              <p className="text-white">
                Yes! Hardware, software, firmware, configurator, PCBs, cases and
                all drawings are open source.
              </p>
            </Card>
            <Card title="Where can I find a demo?">
              <p className="text-white">
                You can find multiple videos on{" "}
                <Anchor
                  newTab
                  href="https://www.youtube.com/watch?v=-3Zw8hbpVq4"
                >
                  YouTube
                </Anchor>
                .
              </p>
              <p className="text-white">
                Here is a{" "}
                <Anchor
                  href="https://www.hackster.io/news/the-freedeck-brings-faster-shortcuts-to-your-fingertips-470e26acf202"
                  newTab
                >
                  hackster.io
                </Anchor>{" "}
                article
              </p>
            </Card>
            <Card title="What do I need to use a FreeDeck?">
              <p className="text-white">
                Nothing special. Any modern OS will do as the FreeDeck simulates
                a USB-Keyboard. The{" "}
                <Anchor href={DOWNLOAD_URL} newTab>
                  App
                </Anchor>{" "}
                is available for Windows, Linux and Mac. A{" "}
                <Anchor href={CONFIGURATOR_URL} newTab>
                  WebApp
                </Anchor>{" "}
                is also available.
              </p>
            </Card>
            <Card title="How do I get started?">
              <p className="text-white">
                Check out the{" "}
                <Anchor href={WIKI_URL} newTab>
                  Wiki
                </Anchor>{" "}
                first. Maybe check out Adams Video on{" "}
                <Anchor
                  newTab
                  href="https://www.youtube.com/watch?v=-3Zw8hbpVq4"
                >
                  YouTube
                </Anchor>
                , too.
              </p>
              <p className="text-white">
                If you have any other questions check out our{" "}
                <Anchor newTab href={DISCORD_URL}>
                  Discord
                </Anchor>
                !
              </p>
            </Card>
          </div>
        </Section>
        <Section title="Gallery" color>
          <Gallery />
        </Section>
      </Body>
      <Footer />
    </div>
  );
};

export default Home;
