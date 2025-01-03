import React from 'react';
import FinStreet_logo from "../assets/Finstreet-logo.png";
import group_photo from "../assets/stage.jpg";

const about = () => {
    return (
        <div id="about" className="relative bg-transparent overflow-hidden mt-40">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                    <div className="pt-1"></div>
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        {/* Flex container for text and image */}
                        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
                            {/* Text Content */}
                            <div className="lg:w-2/3 sm:text-center lg:text-left">
                                <h2 className="my-6 text-3xl tracking-tight font-extrabold text-white sm:text-3xl md:text-4xl">
                                    <span>
                                        <img src={FinStreet_logo} alt="Finstreet Logo" className="inline h-10 w-10" />
                                    </span>
                                    <span className="text-[#FFD700] hover:text-[#DAA520]">
                                        About Finstreet
                                    </span>
                                </h2>
                                <p className="text-white font-semibold shadow-md">
                                    Ready to discover the ultimate keys to financial triumph through fun and exciting events? 
                                    Get set for a groundbreaking event presented by the Finance Club. Are you prepared to test 
                                    your financial knowledge and skills and venture into the realms of money management, 
                                    investment strategies, and wealth creation? Brace yourself for an exhilarating experience 
                                    that will have you eagerly anticipating the days until this event unfolds. Stay tuned for an 
                                    encounter that will spark your financial ambitions and leave you craving for more. 
                                    Finstreet'25... coming soon!
                                </p>
                            </div>
                            {/* Image */}
                            <div className="lg:w-1/3 border-4 border-yellow-500 rounded-lg">
                                <img
                                    className="h-40 w-full object-cover object-top sm:h-52 md:h-64 lg:h-72 rounded-lg -z-40 hover:scale-95 transition-all"
                                    src={group_photo}
                                    alt="Stage"
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default about;
