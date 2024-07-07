import s from './user-post.module.scss';

type Props = {
  userName: string;
  userEmail: string;
  image: string; // URL изображения
  message: string
}

export const UserPost: React.FC<Props> = ({userName, userEmail, image, message}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapperInfo}>
        <div className={s.imageWrapper}><img src={image} alt="user"/></div>
        <div className={s.info}>
          <div className={s.name}>{userName.toUpperCase()}</div>
          <div className={s.email}>{userEmail}</div>
        </div>
      </div>
      <div className={s.message}>
        {message}
      </div>
    </div>
  )
}
