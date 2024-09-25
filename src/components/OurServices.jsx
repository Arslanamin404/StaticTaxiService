import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function OurServices() {
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const secondaryHeadingRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: -30,
      },
      {
        duration: 0.3,
        ease: "power4.inOut",
        opacity: 1,
        y: 0,
        scrollTrigger: {
          // markers: true,
          trigger: headingRef.current,
          scrub: true,
          start: "top 95%",
          end: "top 15%",
        },
      }
    );
  });

  useGSAP(() => {
    gsap.fromTo(
      secondaryHeadingRef.current,
      {
        opacity: 0,
        x: -300,
      },
      {
        duration: 0.3,
        ease: "power4.inOut",
        opacity: 1,
        x: 0,
        scrollTrigger: {
          // markers: true,
          trigger: secondaryHeadingRef.current,
          scrub: true,
          start: "top 95%",
          end: "top 15%",
        },
      }
    );
  });

  useEffect(() => {
    // Creating a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current[0], // Trigger the animation based on the first card
        start: "top 90%",
        end: "top 10%",
        // markers: true,
        scrub: true,
      },
    });

    // Animating each card with a stagger effect
    cardsRef.current.forEach((card, index) => {
      tl.fromTo(
        card,
        { scale: 0, rotate: -90 },
        {
          scale: 1,
          rotate: 0,
          duration:0.3,
          stagger: 0.15,
        }
      );
    });

    return () => {
      tl.kill(); // Cleanup animation on unmount
    };
  }, []);

  return (
    <div
      id="services"
      className="section relative pt-10 pb-8 md:pt-16 md:pb-0 bg-gray-800"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2
            ref={headingRef}
            className="text-4xl md:text-6xl leading-normal mb-2 uppercase tracking-wide font-extrabold text-yellow-400 font-serif"
          >
            Our Services
          </h2>
          <p ref={secondaryHeadingRef} className="text-gray-200 leading-relaxed font-light text-sm md:text-xl mx-auto pb-2 italic">
            Your Journey, Our Priority – Reliable Rides, Anytime, Anywhere.
          </p>
        </header>
        <div className="flex flex-wrap flex-row -mx-4 ">
          <div
            ref={(elem) => (cardsRef.current[0] = elem)}
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="py-8 rounded-md px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4"></div>
              <h3 className="text-xl leading-normal mb-2 font-bold text-gray-700">
                Local Rides
              </h3>
              <p className="text-gray-500">
                Need to get across town? Whether it’s commuting to work, running
                errands, or visiting friends, we offer reliable, quick, and
                comfortable local rides to get you where you need to go.
              </p>
            </div>
          </div>

          <div
            ref={(elem) => (cardsRef.current[1] = elem)}
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".1s"
          >
            <div className="py-8 rounded-md px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4"></div>
              <h3 className="text-xl leading-normal mb-2 font-bold text-gray-700">
                Airport Transfers
              </h3>
              <p className="text-gray-500">
                Traveling can be stressful, but getting to the airport shouldn’t
                be. Our timely airport transfer service ensures you arrive at
                the airport with plenty of time to spare. We offer pickup and
                drop-off services to all major airports.
              </p>
            </div>
          </div>

          <div
            ref={(elem) => (cardsRef.current[2] = elem)}
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
          >
            <div className="py-8 rounded-md px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4"></div>
              <h3 className="text-xl leading-normal mb-2 font-bold text-gray-700">
                Outstation Rides
              </h3>
              <p className="text-gray-500">
                Planning a trip out of town? We provide long-distance,
                outstation taxi services for business trips, family vacations,
                or any occasion where you need to travel beyond city limits.
                Enjoy a comfortable journey with competitive rates.
              </p>
            </div>
          </div>

          <div
            ref={(elem) => (cardsRef.current[3] = elem)}
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="py-8 rounded-md px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4"></div>
              <h3 className="text-xl leading-normal mb-2 font-bold text-gray-700">
                Corporate Services
              </h3>
              <p className="text-gray-500">
                We cater to businesses and organizations by offering
                professional corporate travel solutions. From daily commuting to
                special events, our service is designed to meet the needs of
                professionals with reliable, punctual, and comfortable rides.
              </p>
            </div>
          </div>

          <div
            ref={(elem) => (cardsRef.current[4] = elem)}
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".1s"
          >
            <div className="py-8 rounded-md px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4"></div>
              <h3 className="text-xl leading-normal mb-2 font-bold text-gray-700">
                Special Event Rides
              </h3>
              <p className="text-gray-500">
                Whether it’s a wedding, party, or other special occasions, our
                taxi service offers personalized transport solutions to ensure
                you and your guests arrive in style and comfort. We cater to
                events of all sizes, providing a seamless experience.
              </p>
            </div>
          </div>

          <div
            ref={(elem) => (cardsRef.current[5] = elem)}
            className="flex-shrink  px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
          >
            <div className="py-8 rounded-md px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4"></div>
              <h3 className="text-xl leading-normal mb-2 font-bold text-gray-700">
                24/7 Availability
              </h3>
              <p className="text-gray-500">
                We are here whenever you need us. Our taxi services operate 24
                hours a day, 7 days a week, so no matter the time of day or
                night, you can count on us for a ride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
