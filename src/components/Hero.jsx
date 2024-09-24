import { Link } from "react-router-dom";

function Hero() {
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
          <h1 className="text-4xl font-bold md:text-6xl">
            Premium Car Taxi Services
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-lg md:text-2xl italic">
            Affordable, Reliable & Available 24/7
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 space-x-4">
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
