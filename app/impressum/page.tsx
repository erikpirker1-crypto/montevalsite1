import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import LegalSection from "@/components/LegalSection";

export const metadata: Metadata = {
  title: "Impressum · Monteval",
  description: "Impressum von Monteval – Möbel & Holzkunst.",
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <LegalSection>
        <p>
          <strong>Impressum – Monteval</strong>
        </p>

        <p>
          <strong>Monteval</strong>
          <br />
          Inhaber: Erik Pirker
          <br />
          Rübezahlstraße 1<br />
          92670 Windischeschenbach
          <br />
          Deutschland
        </p>

        <p>
          Telefon: +491716496291
          <br />
          E-Mail: <a href="mailto:kontakt@monteval.de">kontakt@monteval.de</a>
        </p>

        <p>
          Zuständiges Finanzamt: Weiden i.d.OPf.
          <br />
          Steuernummer: DE457662757
        </p>

        <p>Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.</p>

        <p>
          <strong>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
          </strong>
        </p>

        <p>
          Erik Pirker
          <br />
          Rübezahlstraße 1<br />
          92670 Windischeschenbach
        </p>

        <p>
          <strong>Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO:</strong>
        </p>

        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit, die unter{" "}
          <a href="https://consumer-redress.ec.europa.eu/index_de">
            https://consumer-redress.ec.europa.eu/index_de
          </a>{" "}
          abrufbar ist.
          <br />
          Ich bin nicht verpflichtet und grundsätzlich nicht bereit, an einem
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
