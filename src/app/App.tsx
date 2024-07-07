import s from './app.module.scss'
import {Footer, RatingItem} from "../components";
import {UserPosts} from "../components/user-posts/user-posts.tsx";

function App() {

  return (
    <div className={s.wrapper}>

      <main className={s.main}>
        <div className={s.mainLeftSide}>
          <div className={s.title}>
            Do you want to Learn more About cryptocurrencies
            <span className={s.titleGradient}> quickly and easily ?</span>
          </div>
          <div className={s.subscribe}>Subscribe to our channel to learn more</div>
          <div className={s.rating}>
            <RatingItem title={'20K+'} description={'subscribers'}/>
            <RatingItem title={'19,5k'} description={'successful cases'}/>
            <RatingItem title={'4.8/5'} description={'rating'}/>
          </div>
          <button className={s.button}>JOIN WHATSAPP</button>
        </div>
        <div className={s.mainRightSide}>
          <UserPosts/>
        </div>
      </main>
      <Footer/>

    </div>
  )
}

export default App