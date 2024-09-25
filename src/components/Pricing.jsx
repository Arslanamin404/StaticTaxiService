import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Pricing() {
  const elementsRef = useRef([]);
  useEffect(() => {
    gsap.fromTo(
      elementsRef.current,
      {
        scale: 0,
        y: 200,
      },
      {
        y: 0,
        duration: 1,
        stagger: 0.5,
        scale: 1,
        scrollTrigger: {
          trigger: elementsRef.current,
          markers: true,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      {/* <!-- component --> */}
      <section className="bg-gray-800 py-12 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className=" uppercase text-4xl font-extrabold text-white ">
              Pricing Plans
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* <!-- Free Plan --> */}
            <div
              ref={(elem) => (elementsRef.current[0] = elem)}
              className="bg-yellow-500 rounded-lg  h-fit shadow-lg p-6 transform hover:scale-105 transition duration-300"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white uppercase">
                  Basic Package
                </h3>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">
                  $2.00
                </span>
                <span className="text-xl font-medium text-gray-200">/mile</span>
              </div>
              <ul className="mb-8 space-y-4 text-gray-400">
                <li>
                  <span className="text-slate-900 font-semibold text-base">
                    Ideal for short trips.
                  </span>
                </li>
                <li>
                  <span className="text-slate-900 font-semibold text-base">
                    Comfortable seating for up to 4 passengers.
                  </span>
                </li>
                <li>
                  <span className="text-slate-900 font-semibold text-base">
                    24/7 availability.
                  </span>
                </li>
              </ul>
            </div>

            {/* <!-- Starter Plan --> */}
            <div
              ref={(elem) => (elementsRef.current[1] = elem)}
              className="bg-yellow-500 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 h-fit"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white">
                  Standard Package
                </h3>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">
                  $1.50
                </span>
                <span className="text-xl font-medium text-gray-300">/mile</span>
              </div>
              <ul className="mb-8 space-y-4 text-gray-400">
                <li>
                  <span className="text-slate-900 font-semibold text-base">
                    Perfect for medium-distance rides.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-slate-900 font-semibold text-base">
                    Includes complimentary bottled water.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-slate-900 font-semibold text-base">
                    Standard support
                  </span>
                </li>
              </ul>
            </div>

            {/* <!-- Pro Plan --> */}
            <div
              ref={(elem) => (elementsRef.current[2] = elem)}
              className="bg-yellow-500 h-fit rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white">
                  Premium Package
                </h3>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">
                  $3.00
                </span>
                <span className="text-xl font-medium text-gray-300">/mile</span>
              </div>
              <ul className="mb-8 space-y-4 text-gray-400">
                <li className="flex items-center">
                  <span className="text-slate-900 font-semibold text-base">
                    Luxury rides for special occasions.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-slate-900 font-semibold text-base">
                    Spacious seating for up to 4 passengers.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-slate-900 font-semibold text-base">
                    Complimentary snacks and drinks.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
