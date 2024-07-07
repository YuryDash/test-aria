import s from './install-badge.module.scss'
import {ReactNode} from "react";

type Props = {
  children: ReactNode
  description: string
  name: string
}

export const InstallBadge = ({children, name, description}: Props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.iconWrapper}>{children}</div>
      <div>
        <div className={s.description}>{description}</div>
        <div className={s.name}>{name}</div>
      </div>
    </div>
  )
}