import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {events} from '../constants/eventsData';




const EventAlbum = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
  },[]);

  const [filteredEvents, setFilteredEvents] = useState(events);

  const filterEvents = (day) => {
    if (day === 'all') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.day === Number(day)));
    }
  };

  const EventCard = ({image,title,description}) => {
  
    return(
      <div className="max-w-xs bg-blue-800 bg-opacity-70 border border-yellow-500 rounded-lg text-center shadow-lg hover:shadow-2xl m-5 hover:scale-105 transition-all duration-300 p-4">
        <img src={image} alt={title} className="object-cover rounded-lg mx-auto border-4 border-yellow-500" />
        <h3 className="text-lg font-semibold mt-4 text-white">{ title}</h3>
      </div>
    )
  };

  return (
    <div className="flex justify-center items-start mt-32">
      <section id="album" className="py-12 px-4">
        <div className="flex justify-center mb-10">
          <button className="px-4 py-2 bg-yellow-500 text-black rounded-l-lg hover:bg-yellow-400 transition" onClick={() => filterEvents('all')}>All</button>
          <button className="px-4 py-2 bg-yellow-500 text-black  hover:bg-yellow-400 transition" onClick={() => filterEvents(1)}>Day 1</button>
          <button className="px-4 py-2 bg-yellow-500 text-black  hover:bg-yellow-400 transition" onClick={() => filterEvents(2)}>Day 2</button>
          <button className="px-4 py-2 bg-yellow-500 text-black rounded-r-lg hover:bg-yellow-400 transition" onClick={() => filterEvents(3)}>Day 3</button>
        </div>
        <h2 className="text-4xl font-bold text-center mb-8 uppercase text-yellow-400">Event Album</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
          {filteredEvents.map((event) => (
            <Link to={"/events/" + event.id} key={event.id}> <EventCard  image={event.image} title={event.title} description={event.description} /> </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventAlbum;
