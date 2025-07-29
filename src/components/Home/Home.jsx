import React from "react";
import img from "../../components/assets/home1.png";

const Home = () => {
  return (  
    <div className="bg-gradient-to-r from-blue-700 via-violet-700 via-20% via-purple-700 to-red-700 pt-20">
      <section className="container flex h-[800px] md:h-[500px] flex-col items-center justify-center">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className="text-5xl">
              Expert Costume Making Services
            </h1>
            <p className="text-xl">
              <b>Buddys Costume</b>We are dedicated to delivering top-quality costume creations. We cater to a wide range of needs, from elaborate stage costumes to detailed character replicas, serving industries like entertainment, performance, and personal events. 
              Our focus on excellence keeps us at the apex of the costume-making industry
            </p>
            <div className=" Button space-x-4">
              <button className="btn-primary"><a href="/ContactUs">
                Get Started
                </a>
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xl p-4"
          >
            <img
              src={img}
              className="md:max-w-2xl h-auto rounded-md shadow-lg hover:drop-shadow-xl transition duration-300"
              alt="no image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
