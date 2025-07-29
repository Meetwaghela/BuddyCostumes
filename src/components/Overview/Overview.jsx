import React from "react";
import CountUp from "react-countup";

const Overview = () => {
    return (
        <section className="container h-10 md:h-7 dark:bg-gray-900">
            <div className="grid grid-cols-4 justify-center text-center md:grid-cols-4 divide-x divide-slate-700 mx-auto w-full md:max-w-[900px] shadow-lg bg-white -translate-y-20 md:-translate-y-16 my-4 md:p-8 dark:bg-gray-800 dark:text-white rounded-lg">
 
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-lg font-bold text-black/80 dark:text-white sm:text-xl md:text-3xl">
                        <CountUp end={2000} suffix="+" duration={2.75} />
                    </h1>
                    <p className="sm:text-md text-xs md:text-lg">Satisfied Clients</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-lg font-bold text-black/80 dark:text-white sm:text-xl md:text-3xl">
                        <CountUp end={15} suffix="+" duration={2.75} />
                    </h1>
                    <p className="sm:text-md text-xs md:text-lg">Years of Excellence</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-lg font-bold text-black/80 dark:text-white sm:text-xl md:text-3xl">
                        <CountUp end={50} suffix="+" duration={2.75} />
                    </h1>
                    <p className="sm:text-md text-xs md:text-lg">Expert Members</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-lg font-bold text-black/80 dark:text-white sm:text-xl md:text-3xl">
                        <CountUp end={5000} suffix="+" duration={2.75} />
                    </h1>
                    <p className="sm:text-md text-xs md:text-lg">Worked Projects</p>
                </div>
            </div>
        </section>
    );
};

export default Overview;
