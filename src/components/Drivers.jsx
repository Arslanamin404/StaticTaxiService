import { drivers } from "../utils/drivers";

function Drivers() {
  return (
    <>
      <h2 className="bg-yellow-500 text-white my-5 uppercase font-extrabold text-center py-3 text-2xl md:text-4xl">
        Our Drivers
      </h2>
      <ul className="my-4 grid md:grid-cols-4 gap-y-10  place-items-center w-full h-full">
        {drivers.map((driver) => (
          <li key={driver.id}>
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center w-80 py-5">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={driver.url}
                  alt={driver.name}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                 {driver.name}
                </h5>
                <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
                  Experience <span className="font-bold text-yellow-400">{driver.experience}</span>
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Availability <span className="font-bold text-green-500">{driver.availability}</span>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Drivers;
