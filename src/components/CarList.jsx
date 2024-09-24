import { cars } from "../utils/cars";

function CarList() {
  return (
    <>
      <h2 className="bg-yellow-500 text-white font-extrabold uppercase my-5 text-center py-3 text-2xl md:text-4xl">
        Our Cars
      </h2>
      <ul className="my-4 grid md:grid-cols-3 gap-10 place-items-center">
        {cars.map((car) => (
          <li key={car.id} className="mx-4 md:mx-0">
            <div className="max-w-sm border rounded-lg shadow-md bg-gray-200 border-gray-300 hover:shadow-md hover:shadow-black/60 hover:scale-105 duration-300">
              <img className="rounded-t-lg" src={car.url} alt={car.model} />
              <div className="py-5 px-3 md:px-5 flex items-center justify-between">
                <h5 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-800 ">
                  {car.model}
                </h5>
                <p className={`text-sm md:text-base text-center font-bold ${car.available?"text-green-700":"text-red-700"} uppercase`}>
                  {car.available ? "Available" : "Unavailable"}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CarList;
