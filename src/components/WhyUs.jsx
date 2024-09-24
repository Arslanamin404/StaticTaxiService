import React from "react";

function WhyUs() {
  return (
    <div className="bg-gray-800 my-12 py-5 px-10">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-yellow-400 uppercase font-serif mt-5 mb-6">
        Why Chose Us?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 text-justify">
        <div className="my-5 border border-gray-500 p-5 rounded-md hover:scale-105 duration-500">
          <h3 className="text-yellow-400 font-bold text-lg md:text-xl">
            Reliable Service, Every Time
          </h3>
          <p className="text-gray-300 text-sm md:text-lg italic mt-1">
            We understand the importance of time, whether it's getting to work
            or catching a flight. That's why our drivers are trained to be
            punctual and efficient. With real-time tracking and seamless
            communication, we ensure you’ll never be left waiting. Trust us to
            get you where you need to be, on time and stress-free.
          </p>
        </div>
        <div className="my-5 border border-gray-500 p-5 rounded-md hover:scale-105 duration-500">
          <h3 className="text-yellow-400 font-bold text-lg md:text-xl">
            Comfortable, Safe Rides
          </h3>
          <p className="text-gray-300 text-sm md:text-lg italic mt-1">
            Your comfort and safety are our top priorities. Our fleet of
            well-maintained vehicles undergoes regular inspections to meet the
            highest safety standards. Whether you're traveling solo or with
            family, our cars offer a smooth, secure, and relaxing journey.
          </p>
        </div>
        <div className="my-5 border border-gray-500 p-5 rounded-md hover:scale-105 duration-500">
          <h3 className="text-yellow-400 font-bold text-lg md:text-xl">
            Transparent & Affordable Pricing
          </h3>
          <p className="text-gray-300 text-sm md:text-lg italic mt-1">
            We believe in transparent, fair pricing. With us, there are no
            hidden fees or surprises. You'll always know the cost of your ride
            upfront, making budgeting simple. Whether you're taking a short trip
            across town or embarking on a longer journey, we offer competitive
            rates that fit your needs.
          </p>
        </div>
        <div className="my-5 border border-gray-500 p-5 rounded-md hover:scale-105 duration-500">
          <h3 className="text-yellow-400 font-bold text-lg md:text-xl">
            Experienced Drivers Who Care
          </h3>
          <p className="text-gray-300 text-sm md:text-lg italic mt-1">
            Our drivers are not just professionals—they are local experts. With
            years of driving experience and a commitment to excellent service,
            they prioritize your safety and satisfaction. Friendly, courteous,
            and knowledgeable, they ensure a smooth and enjoyable ride every
            time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
