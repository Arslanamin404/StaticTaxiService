import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function WorkingHours() {
  const elementRef = useRef(null);
  useGSAP(() => {
    gsap.from(elementRef.current, {
      x: -500,
      duration: 0.3,
      scrollTrigger: {
        trigger: elementRef.current,
        // markers: true,
        start: "top 85%",
        end: "top 50%",
        scrub: true,
      },
    });
  });

  return (
    <>
      <div
        ref={elementRef}
        className="card mx-2 md:mx-auto text-gray-300 md:w-[clamp(600px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative my-12"
      >
        <div className="px-6 md:px-8 py-10">
          <div className="uppercase font-bold text-xl md:text-4xl text-center">
            Working Hours
          </div>
          <div className="text-gray-400 mt-8">
            <p className="mb-4">
              <span className="text-md md:text-xl uppercase mr-3">
                Monday to Friday:
              </span>
              <span className="font-extrabold text-yellow-500 text-lg md:text-2xl">
                9 AM - 10 PM
              </span>
            </p>

            <p>
              <span className="text-base md:text-2xl uppercase mr-3">
                Saturday and Sunday:
              </span>
              <span className="font-extrabold text-yellow-500 text-sm md:text-2xl">
                10 AM - 8 PM
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkingHours;
