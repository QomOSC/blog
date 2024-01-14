import Image from 'next/image'
import LandingTemplate from './landing-template'
import EventListPage from './events-list'
import { cdnJS } from '../components/cdn'


function FirstImpression() {
  return (
  <div className='landing-pages'>
      <div className='landing-page-content'>
      <div className='landing-pages-text-container fade-in-y delay-1'>
          <span className='landing-page-text'>
          محیطی برای اشتراک گذاری <span className='green-text'>دانش</span> و <span className='green-text'>تجربه</span>
          </span>
          <br/>
          <p className='landing-subtext '>انجمن متن باز قم جامعه ای با هدف افزایش مهارت و اطلاعات برنامه نویسان و ایجاد محیطی برای آشنایی دولاپر ها</p>
          <div className='landing-buttons-container'>
              <button className='join-us-btn'>به ما بپیوندید</button>
              <button className='events-btn '>رویدادها</button>
          </div> 
      </div>

        <div className='landing-page-image-container'>
            <Image className='landing-image' priority alt="landing" width={0} height={0} src={cdnJS("conference.svg")}/>
        </div>
      </div>

    </div>
  )
}

export default function Landing() {
  return (
    <div className="main">
      <FirstImpression></FirstImpression>
      <LandingTemplate text='با دولاپر ها و دیزاینر ها ارتباط بگیر' subtext='با برنامه نویسا و اعضای مورد نظری که برای پروژت میخوای آشنا شو.' image='job-offer.svg' reverse={true}></LandingTemplate>
      <LandingTemplate text='توی رویداد های کامپیوتری شرکت کن' subtext='توی رویدادهای که در مورد موضوعات متنوع کامپیوتری برگزار میشه شرکت کن و کلی مطلب جدید یاد بگیر' image='seminar.svg'></LandingTemplate>
      <LandingTemplate text='سوالاتو از حرفه ای ها بپرس' subtext='سوالاتو بپرس، نظراتو بگو، به بقیه کمک کن و هر بشین با هر کی حال کردی در مورد موضوعات کامپیوتری حرف بزن' image='chat.svg' reverse={true}></LandingTemplate>
      <EventListPage></EventListPage>

    </div>
  )
}
