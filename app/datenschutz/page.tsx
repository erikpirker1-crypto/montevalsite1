import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import LegalSection from "@/components/LegalSection";

export const metadata: Metadata = {
  title: "Datenschutzerklärung · Monteval",
  description: "Datenschutzerklärung von Monteval – Möbel & Holzkunst.",
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <LegalSection title="1. Verantwortlicher">
        <p>
          Monteval – Erik Pirker
          <br />
          Rübezahlstraße 1<br />
          92670 Windischeschenbach
          <br />
          Deutschland
        </p>
        <p>
          E-Mail: <a href="mailto:kontakt@monteval.de">kontakt@monteval.de</a>
        </p>
      </LegalSection>

      <LegalSection title="2. Allgemeine Hinweise">
        <p>
          Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese
          Website dient ausschließlich der Information über die Marke Monteval.
          Es werden keine personenbezogenen Daten aktiv erhoben oder zu
          Analysezwecken verarbeitet.
        </p>
      </LegalSection>

      <LegalSection title="3. Zugriffsdaten (Server-Logfiles)">
        <p>
          Beim Aufruf dieser Website erfasst der Hosting-Anbieter Vercel Inc.,
          <br />
          440 N. Barranca Ave #4133, Covina, CA 91723, USA, automatisch
          sogenannte Server-Logfiles.
        </p>
        <p>Diese können folgende Daten enthalten:</p>
        <ul>
          <li>Besuchte Seite(n)</li>
          <li>Datum und Uhrzeit des Abrufs</li>
          <li>Übertragene Datenmenge</li>
          <li>Quelle/Verweis (Referrer-URL)</li>
          <li>Verwendeter Browser und Betriebssystem</li>
          <li>IP-Adresse (ggf. anonymisiert)</li>
        </ul>
        <p>
          <strong>Zweck der Verarbeitung:</strong> technische Bereitstellung,
          Sicherheit und Stabilität der Website.
          <br />
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse am sicheren Betrieb).
          <br />
          <strong>Speicherdauer:</strong> Logdaten werden von Vercel in der
          Regel kurzfristig gespeichert und anschließend gelöscht oder
          anonymisiert.
        </p>
        <p>
          Da Vercel ein US-Unternehmen ist, kann eine Datenübermittlung in die
          USA stattfinden.
          <br />
          Diese erfolgt auf Grundlage der EU-Standardvertragsklauseln gemäß
          Art. 46 DSGVO, um ein angemessenes Datenschutzniveau sicherzustellen.
        </p>
        <p>
          Die Domainverwaltung erfolgt über IONOS SE, Elgendorfer Str. 57,
          56410 Montabaur, Deutschland (nur Domain-/DNS-Dienstleister).
        </p>
      </LegalSection>

      <LegalSection title="4. Kontaktaufnahme per E-Mail">
        <p>
          Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben
          (E-Mail-Adresse, Inhalt, ggf. Signaturdaten) verarbeitet, um Ihre
          Anfrage zu beantworten.
          <br />
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
          (vorvertragliche Kommunikation) bzw. Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an Kommunikation).
          <br />
          <strong>Speicherdauer:</strong> bis zur abschließenden Bearbeitung
          Ihrer Anfrage; darüber hinaus nur, soweit gesetzliche
          Aufbewahrungspflichten bestehen.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies und Analyse">
        <p>
          Auf dieser Website werden keine Cookies gesetzt und keine Tracking-
          oder Analysetools verwendet.
        </p>
      </LegalSection>

      <LegalSection title="6. Externe Links">
        <p>
          Diese Website enthält Links zu externen Plattformen (z. B. Instagram,
          TikTok, YouTube). Beim Anklicken solcher Links werden Sie auf die
          jeweilige externe Seite weitergeleitet. Dort gelten die
          Datenschutzbestimmungen des jeweiligen Anbieters.
          <br />
          Es erfolgt auf dieser Seite keine automatische Datenübertragung an
          diese Dienste.
        </p>
      </LegalSection>

      <LegalSection title="7. Ihre Rechte">
        <p>Sie haben gemäß DSGVO folgende Rechte:</p>
        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Sie haben außerdem das Recht auf Beschwerde bei einer
          Datenschutzaufsichtsbehörde, insbesondere beim Bayerischen Landesamt
          für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach,
          Deutschland.
        </p>
      </LegalSection>

      <LegalSection title="8. Änderungen dieser Datenschutzerklärung">
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, sobald
          Änderungen an der Website oder an rechtlichen Vorgaben dies
          erforderlich machen.
        </p>
      </LegalSection>

      <p className="uppercase tracking-[0.16em] text-[0.76rem] text-[rgba(248,247,242,0.6)]">
        Stand: 02. November 2025
      </p>
    </LegalLayout>
  );
}
