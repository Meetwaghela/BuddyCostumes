import React, { useState } from "react";
import { motion } from "framer-motion";
import img5 from "/assets/5.webp";
import ProgressBar from './ProgressBar';

const slideAnimation = (direction, delay) => {
  const xValue = direction === "right" ? 50 : -50;
  return {
    initial: {
      opacity: 0,
      x: xValue,
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
  const [isAnimationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <section className="bg-slate-100 dark:bg-slate-900 dark:text-white overflow-hidden">
      <main className="container flex flex-col h-auto md:h-[500px] justify-center items-center py-12">
        <div className="grid grid-cols-1 items-center gap-4 dark:text-white md:grid-cols-2">
          <motion.div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            variants={slideAnimation("left", 0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            onAnimationComplete={handleAnimationComplete} 
            className={`flex flex-col items-center gap-4 text-center md:items-start md:text-left ${reverse ? "md:order-last" : ""}`}
          >
            <h1 className="text-2xl md:text-4xl font-bold dark:text-white overflow-hidden">
              Your Trusted Electrical Contracting Partner
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Delivering quality electrical solutions for all your needs.
            </p>
            <div className="mt-4 w-full">
              {isAnimationComplete && (
                <>
                  <ProgressBar label="Exceptional Quality" percentage={95} delay={0.2} />
                  <ProgressBar label="Reliable Services" percentage={90} delay={0.4} />
                  <ProgressBar label="Expertise in Industrial Wiring" percentage={85} delay={0.6} />
                  <ProgressBar label="Comprehensive Solutions" percentage={90} delay={0.8} />
                </>
              )}
            </div>
          </motion.div>

          <motion.div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            variants={slideAnimation("right", 0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={`flex ${reverse ? "order-1" : ""} justify-center`}
          >
            <img 
              src={img5}
              alt="Electrical contracting work"
              className="overflow-hidden mx-auto w-full p-4 md:max-w-[400px]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default BannerDetails;
