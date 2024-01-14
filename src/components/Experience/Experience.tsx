import { Container, Timeline, TimelineITemProps } from "@/components";
import styles from "./Experience.module.scss";

export const Experience = () => {

  const items: TimelineITemProps[] = [
    {
      date:'NOV 2021 - TODAY', 
      company:'Globant', 
      companyLink:'https://www.globant.com/about', 
      dotTextColor:'#000', 
      title: 'Web User Interface Developer', 
      titleColor:'#C1D838', 
      activities: [
        `• Created a frontend project with Next JS, Typescript, Docker,
            React Hook Form and SASS that manages a complex form (wizard) that
            captures the information of a resume.`
        ,
        ` • Managed onboardings, releases, syncs, provided continuous and
            proactive technical support to all developers in the front end and
            back end teams.`
        ,
        `• Defined tasks to be completed taking into account delivery times
            and complexity.
            `
      ]
    }, 
    {
      date: 'MAY 2021 - NOV 2021',
      company: 'UPAX',
      companyLink: 'https://upax.com.mx/quienes-somos',
      dotTextColor: '#000',
      title: 'Frontend Developer',
      titleColor: '#DF692E',
      activities: [
        `• Developed multiple websites implemented throughout Mexico using
            modern technologies as NextJS, Redux, Material UI, and Typescript,
            exceeding the access of new users with respect to the old ones by
            23%.`
        ,
        `• Participated in the design and fulfillment of functional
            requirements.`
        ,
        `• Used geospatial technology with the Google Maps API (geolocation
            and visualization of coordinates).
          `
      ]
    },
    {
      date: 'MAY 2019 - AUG 2021',
      company: 'Instituto Mexicano de Tecnología del Agua',
      companyLink: 'https://www.gob.mx/imta/que-hacemos',
      dotTextColor: '#000',
      title: 'Fullstack Developer',
      titleColor: '#1478BF',
      activities: [
        `• Full-stack developer, under SISUAR project. SISUAR is a
            geospatial query system about the uses of irrigation water in
            agriculture in Mexico.`
        ,
        ` • Designed and implemented and managed a MySQL database.`
        ,
        `• API creation and consumption.`,
        `• Apache HTTP server configuration.`
      ]
    }
  ]
  return (
    <Container component="section" className={styles.experience}>
      <h2>Relevant experience</h2>
      <Timeline items={items}/>
    </Container>
  );
};
