import EventCard from "../components/EventCard";

type Event = {
    title:string,
    date: string,
    image: string
  };







export default function EventListPage() {

  return (
    <div className='event-pages'>
      <div className="event-title-container">
        <span className="event-title">رویدادها</span>
      </div>

      <div className="event-list">
        <EventCard image="event.jpg" title="آشنایی با WebAssembly" date="۳۰ شهریور ۱۳۹۹" icon="event"></EventCard>
        <EventCard image="event.jpg" title="آشنایی با WebAssembly" date="۳۰ شهریور ۱۳۹۹" icon="event"></EventCard>
        <EventCard image="event.jpg" title="آشنایی با WebAssembly" date="۳۰ شهریور ۱۳۹۹" icon="event"></EventCard>
      </div>
  
      </div>
  )
}

