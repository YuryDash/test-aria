import s from './user-posts.module.scss'
import {UserPost} from "../user-post/user-post.tsx";
import user3 from "../../assets/user_4.png";
import user2 from "../../assets/user_3.png";
import user1 from "../../assets/user_2.png";
import user4 from "../../assets/user_1.png";
import {Bitcoin, Ethereum, Litecoin} from "../../assets";

export const UserPosts = () => {
  return (
    <div className={s.wrapper}>
      <UserPost
        userName={'lorenzo'}
        userEmail={'@lorenzoo'}
        image={user3}
        message={'Amazing Telegram bot! Provides real-time crypto prices and news'}
      />
      <div style={{marginLeft: '-112px'}}>
        <UserPost
          userName={'Adalina'}
          userEmail={'@ada'}
          image={user2}
          message={'Must-have bot for crypto traders. Accurate signals and analysis'}
        />
      </div>
      <UserPost
        userName={'Alexander'}
        userEmail={'@alex_x'}
        image={user1}
        message={'Superb cryptocurrency bot! Quick updates and reliable data'}
      />

      <div style={{marginLeft: '-112px'}}>

        <UserPost
          userName={'Rushana'}
          userEmail={'@Hana'}
          image={user4}
          message={'Efficient and user-friendly bot. Simplifies crypto trading tasks'}
        />
      </div>

      <div className={s.pseudoElements}>
        <Bitcoin/>
        <div style={{height:'180px'}}><Litecoin/></div>
        <Ethereum/>
      </div>

    </div>
  )
}
