import s from './rating-item.module.scss'

type Props = {
  title: string
  description: string
}

export const RatingItem = ({description, title}: Props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>{title}</div>
      <div className={s.description}>{description}</div>
    </div>
  )
}