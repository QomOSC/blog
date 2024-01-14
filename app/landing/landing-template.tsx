import Image from "next/image";
import { cdnJS } from "../components/cdn";

type landingProp = {
  image: string;
  text: string;
  subtext?: string;
  reverse?: boolean;
};



export default function LandingTemplate(props: landingProp) {

  return (
    <div className='landing-pages'>
      <div className={props.reverse ? "landing-page-content reverse-image" : "landing-page-content " }>
  
      <div className='landing-pages-text-container'>
          <span className='landing-page-text'>
       {props.text}
          </span>
          <br/>
          <p className='landing-subtext'>{props.subtext}</p>
      </div>
  
      <div className='landing-page-image-container'>
          <Image className='landing-image' alt="landing" width={0} height={0} src={cdnJS(props.image) }/>
      </div>
      </div>
  
      </div>
  )
}

