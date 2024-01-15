import { TimelineItem, TimelineITemProps } from '@/components'
import styles from './Timeline.module.scss'
import { FC } from 'react'

export interface Props {
  items: TimelineITemProps[];
}

export const Timeline: FC<Props> = ({ items }) => {
  return (
    <div className={styles.timeline}>
      {items.map((props, i) => (
        <TimelineItem {...props} key={`timeline-item-${i}`} />
      ))}
      {items.map((props, i) => (
        <TimelineItem {...props} key={`timesline-item-${i}`} />
      ))}
    </div>
  )
}
