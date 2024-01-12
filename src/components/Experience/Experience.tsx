import { Container } from "@/components";
import styles from "./Experience.module.scss";

export const Experience = () => {
  return (
    <Container component="section" className={styles.experience}>
      <h2>Relevant experience</h2>

      <div className={styles.container}>
        <article
          className={styles["timeline-item"]}
          date-is="NOV 2021 - TODAY"
          letter-is="G"
        >
          <h3>Web User Interface Developer PROJECT – Globant</h3>
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
        >
          <h3>Frontend Developer – UPAX</h3>
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
        >
          <h3>Web Developer – Instituto Mexicano de Tecnología del Agua</h3>
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
