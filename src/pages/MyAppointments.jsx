import { useSelector } from "react-redux";

const MyAppointments = () => {
  const doctors = useSelector((state) => state.doctors);

  return (
    <div className="min-h-screen  p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-800 to-emerald-500 bg-clip-text text-transparent mb-6">My Appointments</h2>
      <div className="w-full max-w-7xl space-y-6">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 border shadow-lg rounded-lg p-5 flex items-center gap-6"
          >
            {/* Doctor Image */}
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 rounded-lg bg-green-50 object-cover border border-gray-300"
              />
            </div>
            
            {/* Doctor Info */}
            <div className="flex-1">
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
              <p className="text-gray-500 text-xs mt-2">Address:</p>
              <p className="text-gray-700 text-sm">{item.address.line1}</p>
              <p className="text-gray-700 text-sm">{item.address.line2}</p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-semibold">Date & Time:</span> 10, Feb, 2025 | 8.30 PM
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button className="bg-green-500 opacity-90 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                Pay Online
              </button>
              <button className="bg-red-500 opacity-90 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;