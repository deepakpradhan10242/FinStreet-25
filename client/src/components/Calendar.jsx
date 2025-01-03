import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Calendar = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    const schedule = [
        { day: "Day 1", date: "17 January, 2025" },
        { day: "Day 2", date: "18 January, 2025" },
        { day: "Day 3", date: "19 January, 2025" },
    ];

    return (
        <div className="flex justify-center items-start mb-15">
            <section id="schedule" className="py-12 px-4 mt-40">
                <h2 className="text-3xl font-bold text-center mb-32 uppercase text-yellow-400">
                    Event Schedule
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mx-auto">
                    {schedule.map((event, index) => (
                        <div
                            key={index}
                            className="bg-blue-800 bg-opacity-70 border border-yellow-500 rounded-lg text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 p-4"
                        >
                            <h3 className="text-lg font-semibold mt-4 text-white">{event.day}</h3>
                            <p className="mt-2 text-gray-300">{event.date}</p>
                            {/* <button className="mt-4 px-6 py-2 bg-yellow-500 text-sm font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-black">
                                Register
                            </button> */}
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-20 mb-20">
                    <button className="font-semibold bg-yellow-500 text-black py-3 px-6 rounded-lg hover:bg-yellow-400 transition">
                        <Link to="/events">Register for Events</Link>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Calendar;
