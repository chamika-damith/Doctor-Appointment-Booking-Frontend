import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  const doctors = useSelector((state) => state.doctors);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const specialties = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  return (
    <div>
      <p className="text-gray-700 text-lg font-semibold text-center ">
        Browse through the doctors specilist.
      </p>
      <div className="flex bg flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Sidebar */}
        <div className="w-full sm:w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Specialties
          </h3>
          <div className="flex flex-col gap-3">
            {specialties.map((spec) => (
              <p
                key={spec}
                onClick={() =>
                  speciality === spec
                    ? navigate("/doctors")
                    : navigate(`/doctors/${spec}`)
                }
                className={`cursor-pointer p-3 rounded-lg transition-all text-gray-700 hover:bg-green-400 hover:text-white ${
                  speciality === spec
                    ? "bg-green-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {spec}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appoinments/${item._id}`)}
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <img className="bg-green-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
