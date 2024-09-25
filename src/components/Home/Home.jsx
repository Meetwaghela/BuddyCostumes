import React from "react";
import img from "../../assets/home1.png";

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
              Expert Electrical Contracting Services
            </h1>
            <p className="text-xl">
              <b>Krishna Electricals </b>is dedicated to delivering top-quality electrical solutions. 
              We serve various industries like textiles, pharmaceuticals, paper mills, warehouses and more. 
              Our focus on excellence helps us stay at the top of the industry. 
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
              className="h-full w-full hover:drop-shadow-md"
              alt="no image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
