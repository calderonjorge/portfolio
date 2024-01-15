import { FC } from 'react'
import Link from 'next/link'
import styles from './TimelineItem.module.scss'

export interface Props {
  title: string;
  date: string;
  titleColor: string;
  dotTextColor: string;
  company: string;
  companyLink: string;
  activities: string[];
}

export const TimelineItem: FC<Props> = props => {
  return (
    <article
      className={styles['timeline-item']}
      date-is={props.date}
      letter-is={props.company.charAt(0)}
      // @ts-ignore
      style={{ '--bg-color-is': props.titleColor, '--text-color-is': props.dotTextColor }}
    >
      <h3 style={{ color: props.titleColor }}>
        {props.title} –{' '}
        <Link target="_blank" rel="noreferrer" href={props.companyLink}>
          {props.company}
        </Link>
      </h3>
      <ul>
        {props.activities.map((activity, i) => (
          <li key={i}>{activity}</li>
        ))}
      </ul>
    </article>
  )
}
