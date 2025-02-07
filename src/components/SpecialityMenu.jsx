import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="flex flex-col items-center gap-6 py-16 text-gray-900">
      <h1 className="text-4xl font-semibold bg-gradient-to-r from-teal-800 to-emerald-500 bg-clip-text text-transparent">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-gray-600 text-lg">
        Discover top doctors from various specialities to cater to your needs.
      </p>

      <div className="flex sm:justify-center gap-6 w-full overflow-x-auto no-scrollbar px-4 py-4">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center text-sm font-medium cursor-pointer flex-shrink-0 
                      hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="w-16 sm:w-24 h-16 sm:h-24 rounded-full flex items-center justify-center p-2 
                          bg-green-50 shadow-lg relative overflow-hidden transition-all duration-500">
              <img className="w-12 sm:w-20 relative z-10 transition-transform duration-300 ease-in-out hover:scale-110" src={item.image} alt={item.speciality} />
            </div>
            <p className="mt-3 text-gray-700">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;