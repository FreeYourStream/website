import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Logo from "../public/freedeck-logo-mono.svg";
import { Main } from "../components/Main";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="">
      <Header />
      <Main>
        <div className="h-16" />
        <div
          style={{ backgroundImage: "url(freedeck-hero.jpeg)" }}
          className="fixed h-[400px] w-full left-0 -z-10 opacity-30 bg-black"
        ></div>
        <div className="flex align-middle text-white">
          <Logo className="fill-white w-96" />
          <div className="flex flex-col gap-6">
            <div className="ml-8 flex flex-col text-4xl">
              <p>Everything</p>
              <p>at your fingertips</p>
            </div>
            <div className="ml-8 flex flex-col text-4xl">
              <p>No</p>
              <p>Bullshit</p>
            </div>
            <div className="ml-8 flex flex-col text-4xl">
              <p>DIY</p>
              <p>Open Source</p>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
