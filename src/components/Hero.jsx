import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

function Hero() {
  const elemRefs = useRef([]); // ref to store references to the DOM elements.Will hold elements that GSAP needs to target.

  useEffect(() => {
    // Inside useEffect, we initiate the GSAP timeline animation once, after the component mounts. This prevents the animation from running on every render.
    elemRefs.current = gsap
      .timeline() // Create a GSAP timeline and assign it to elemRefs.current (which will store the timeline instance).
      .from(elemRefs.current, {
        opacity: 0,
        duration: 0.5,
        y: -20,
        stagger: 0.15,
        delay: 0.5,
      });
  }, []); // Empty dependency array to run only once when the component mounts.

  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/yellow-taxi-streets-new-york-city-night_23-2150820166.jpg?t=st=1727166582~exp=1727170182~hmac=9541ce0aff9a58cb5b5087dc5d4437f547946fe34fe20e9af068d893008a603d&w=1060')",
        }}
      ></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12 md:py-24">
        <div className="text-center">
          {/* Main Heading */}
          <h1
            className="text-4xl font-bold md:text-6xl"
            // This assigns the DOM element to the first position (index 0) of the elemRefs array when it renders. 'el' is the current DOM element, and it is stored in elemRefs.current[0], allowing GSAP to access this element for animation.
            ref={(el) => (elemRefs.current[0] = el)}
          >
            Premium Car Taxi Services
          </h1>

          {/* Subheading */}
          <p
            className="mt-4 text-lg md:text-2xl italic"
            ref={(el) => (elemRefs.current[1] = el)}
          >
            Affordable, Reliable & Available 24/7
          </p>

          {/* Call to Action Buttons */}
          <div
            className="mt-8 space-x-4"
            ref={(el) => (elemRefs.current[2] = el)}
          >
            <Link
              to="/cars"
              className="px-8 py-3 font-semibold text-lg bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600 transition duration-300 ease-in-out"
            >
              View Cars
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
