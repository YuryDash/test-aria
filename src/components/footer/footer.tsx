import {Apple, Google} from "../../assets";
import s from './footer.module.scss'
import {InstallBadge} from "../install-badge/install-badge.tsx";

export const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <InstallBadge
        name={'Google play'}
        description={'get it on'}
        children={<Google/>}
      />
      <InstallBadge
        name={'App Store'}
        description={'Available on the'}
        children={<Apple/>}
      />
    </footer>
  )
}