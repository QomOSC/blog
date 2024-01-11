import Image from 'next/image'
import Header from '../components/Header'


function FirstImpression() {
  return (
  <div className='landing-pages'>
    <div className='landing-page-content'>

    <div className='landing-pages-text-container'>
        <span className='landing-page-text'>
        محیطی برای اشتراک گذاری <span className='green-text'>دانش</span> و <span className='green-text'>تجربه</span>
        </span>
        <br/>
        <p className='landing-subtext'>انجمن متن باز قم جامعه ای با هدف افزایش مهارت و اطلاعات برنامه نویسان و ایجاد محیطی برای آشنایی دولاپر ها</p>
        <div className='landing-buttons-container'>
            <button className='join-us-btn'>به ما بپیوندید</button>
            <button className='events-btn'>رویدادها</button>

        </div>
        
    </div>

    <div className='landing-page-image-container'>
        <Image className='landing-image' alt="landing" width={0} height={0} src="Conference-amico.svg"/>
    </div>
    </div>

    </div>
  )
}

export default function Landing() {

  return (
    <div className="main">
      <Header></Header>
      <FirstImpression></FirstImpression>
      
    </div>
  )
}
