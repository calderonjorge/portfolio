import { Container } from "@/components";
import styles from "./Experience.module.scss";
import Link from 'next/link';

export const Experience = () => {
  return (
    <Container component="section" className={styles.experience}>
      <h2>Relevant experience</h2>

      <div className={styles.container}>
        <article
          className={styles["timeline-item"]}
          date-is="NOV 2021 - TODAY"
          letter-is="G"
          style={{ "--bg-color-is": "#C1D838", "--text-color-is": "#000" }}
        >
          <h3 style={{ color: '#C1D838' }}>Web User Interface Developer PROJECT – <Link target="_blank"  rel="noreferrer" href="https://www.globant.com/about">Globant</Link></h3>
          <ul>
            <li>
              • Created a frontend project with Next JS, Typescript, Docker,
              React Hook Form and SASS that manages a complex form (wizard) that
              captures the information of a resume.
            </li>
            <li>
              • Managed onboardings, releases, syncs, provided continuous and
              proactive technical support to all developers in the front end and
              back end teams.
            </li>
            <li>
              • Defined tasks to be completed taking into account delivery times
              and complexity.
            </li>
          </ul>
        </article>

        <article
          className={styles["timeline-item"]}
          date-is="MAY 2021 - NOV 2021"
          letter-is="U"
          style={{ "--bg-color-is": "#DF692E", "--text-color-is":"#fff" }}
        >
          <h3 style={{ color: "#DF692E" }}>Frontend Developer – <Link target="_blank"   rel="noreferrer" href="https://upax.com.mx/quienes-somos">UPAX</Link></h3>
          <ul>
            <li>
              • Developed multiple websites implemented throughout Mexico using
              modern technologies as NextJS, Redux, Material UI, and Typescript,
              exceeding the access of new users with respect to the old ones by
              23%
            </li>
            <li>
              • Participated in the design and fulfillment of functional
              requirements.
            </li>
            <li>
              • Used geospatial technology with the Google Maps API (geolocation
              and visualization of coordinates).
            </li>
          </ul>
        </article>

        <article
          className={styles["timeline-item"]}
          date-is="MAY 2019 - AUG 2021"
          letter-is="I"
          style={{ "--bg-color-is": "#1478BF", "--text-color-is": "#fff" }}
        >
          <h3 style={{ color: "#1478BF" }}>Web Developer – <Link target="_blank" rel="noreferrer" href="https://www.gob.mx/imta/que-hacemos">Instituto Mexicano de Tecnología del Agua</Link></h3>
          <ul>
            <li>
              • Full-stack developer, under SISUAR project. SISUAR is a
              geospatial query system about the uses of irrigation water in
              agriculture in Mexico.
            </li>
            <li>• Designed and implemented and managed a MySQL database.</li>
            <li>• API creation and consumption.</li>
            <li>• Apache HTTP server configuration.</li>
          </ul>
        </article>
      </div>
    </Container>
  );
};
