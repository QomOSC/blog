import Image from "next/image";
import { cdnJS } from "./cdn";

type eventCardInfo = {
  image: string;
  title: string;
  date: string;
  icon: string;
//   tag for future updates
  tag?: boolean; 
};




export default function EventCard(props: eventCardInfo) {

  return (

      <div className="event-card" >
  
            <Image   className="event-image" alt="event-image" width={480} height={270} src={cdnJS(props.image)}/>
        <div className='event-card-details-container'>
          {/* <Image src={props.icon} alt="icon"/> */}
              <span className='event-card-title'>
           {props.title}
              </span>
          <div className="event-card-footer">
            <span className="event-date">{props.date}</span>
            <button className="event-details-btn">جزییات...</button>
          </div>
        </div>
  
   
      </div>
  
  )
}

