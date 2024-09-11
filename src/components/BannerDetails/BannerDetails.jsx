import React from "react";
import { motion } from "framer-motion";
import img5 from "../../assets/5.webp";
import ProgressBar from './ProgressBar';

const SlideRight = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const BannerDetails = ({ reverse }) => {
  const progressBarDelay = 1.0;

  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white overflow-hidden">
        <section className="container flex h-[810px] md:h-[500px] flex-col items-center justify-center">
          <div className="grid grid-cols-1 items-center gap-4 dark:text-white md:grid-cols-2">
            <motion.div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              variants={SlideLeft(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className={`flex flex-col items-center gap-4 text-center text-black md:items-start md:text-left ${
                reverse ? "md:order-last" : ""
              }`}
            >
              <h1 className="text-2xl md:text-4xl dark:text-white overflow-hidden">
                Your Trusted Electrical Contracting Partner
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 dark:text-white">
              </p>
              <div className="mt-4 w-full dark:text-white">
                <ProgressBar label="Exceptional Quality" percentage={95} delay={progressBarDelay} />
                <ProgressBar label="Reliable Services" percentage={90} delay={progressBarDelay} />
                <ProgressBar label="Expertise in Industrial Wiring" percentage={85} delay={progressBarDelay} />
                <ProgressBar label="Comprehensive Solutions" percentage={90} delay={progressBarDelay} />
              </div>
            </motion.div>
            <motion.div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              variants={SlideRight(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className={`flex ${reverse ? "order-1" : ""} justify-center`}
            >
              <img 
                src={img5}
                alt="No image"
                className="overflow-hidden mx-auto w-full p-4 md:max-w-[400px]"
              />
            </motion.div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
