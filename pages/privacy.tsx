import type { NextPage } from "next";

import { Body } from "../components/Body";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Section } from "../components/Section";

const Imprint: NextPage = () => {
  return (
    <div className="">
      <Header title="Privacy Policy" />
      <Body>
        <Section title="Privacy Policy">
          <div className="flex flex-col gap-y-4 text-white text-xl">
            <p>
              We only do the standard webserver IP/useragent logging to prevent
              botting, spamming and DDoS. We don&apos;t use cookies or other
              tracking technologies.
            </p>

            <p>
              The same applies for our configurator. We don&apos;t use cookies
              or other tracking technologies. We only store your current
              configuration in your browser which is in no way ever send to one
              of our servers or leaves your device.
            </p>

            <p>
              If you have any questions or concerns, please contact us
              preferably via e-mail.
            </p>
          </div>
        </Section>
      </Body>
      <Footer />
    </div>
  );
};

export default Imprint;
