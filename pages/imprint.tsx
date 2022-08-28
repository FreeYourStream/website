import type { NextPage } from "next";

import { Body } from "../components/Body";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Section } from "../components/Section";
import { Title } from "../components/Title";

const Imprint: NextPage = () => {
  return (
    <div className="">
      <Header />
      <Body>
        <Section title="Imprint">
          <div className="flex flex-col gap-y-4 text-white text-xl">
            <p>
              FreeYourStream UG (Haftungsbeschränkt)
              <br />
              Gutsmuthsstraße 14
              <br />
              12163 Berlin
            </p>

            <p>
              Tel: 030 629 31 844
              <br />
              E-Mail: info@freeyourstream.com
              <br />
              Webseite: https://freeyourstream.com
            </p>

            <p>
              Amtsgericht Charlottenburg
              <br />
              HRB 221 345 B
            </p>

            <p>
              Vertretungsberechtigte Geschäftsführer:
              <br />
              Tobias Kersting
              <br />
              Kilian Gosewisch
            </p>

            <p>
              Umsatzsteuer-Identifikationsnummer nach § 27a UStG: DE336076302
            </p>
          </div>
        </Section>
      </Body>
      <Footer />
    </div>
  );
};

export default Imprint;
