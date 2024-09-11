import React from "react";
import CountUp from "react-countup";
 
const Overview = () => {
    return <section className="container h-10 md:h-7 dark:bg-gray-900">
        <div className=" grid grid-cols-4 divide-x  divide-slate-700 mx-auto w-full md:max-w-[900px] shadow-lg 
        bg-white -translate-y-20 md:-translate-y-16 my-4 md:p-8 dark:bg-gray-800 dark:text-white">
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={500} suffix="+" duration={2.75}/></h1>
            <h1 className="sm:text-md text-xs md:text-lg">Clients</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={8} suffix="+" duration={2.75}/></h1>
            <h1 className="sm:text-md text-xs md:text-lg">Years Of Experience</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={50} suffix="+" duration={2.75}/></h1>
            <h1 className="sm:text-md text-xs md:text-lg">Team Experts</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={234} suffix="+" duration={2.75}/></h1>
            <h1 className="sm:text-md text-xs md:text-lg">Clients</h1>
        </div>
        </div>
    </section>
 

};

export default Overview;