import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import {useDispatch} from "react-redux";

const Appointments = () => {
  const { docId } = useParams();
  const doctors = useSelector((state) => state.doctors);
  const dispatch = useDispatch();

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime,setSlotTime] = useState(null);

  const fetchDocInfo = () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = () => {
    const slots = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let startTime = new Date(currentDate);
      startTime.setHours(
        today.getDate() === currentDate.getDate() && today.getHours() > 10
          ? today.getHours() + 1
          : 10
      );
      startTime.setMinutes(
        today.getDate() === currentDate.getDate() && today.getMinutes() > 30
          ? 30
          : 0
      );

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      const timeSlots = [];
      while (startTime < endTime) {
        timeSlots.push({
          datetime: new Date(startTime),
          time: startTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
        startTime.setMinutes(startTime.getMinutes() + 30);
      }
      slots.push(timeSlots);
    }
    setDocSlots(slots);
  };

  useEffect(() => {
    if (doctors.length) fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    if (docInfo) {
      dispatch({
        type: "FETCH_RELATED_DOCTORS",
        payload: { docId: docInfo._id, speciality: docInfo.speciality },
      });
    }
  }, [docInfo, dispatch]);
  

  return (
    docInfo && (
      <div>
        {/* Doctor details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-blue-300 w-full rounded-lg sm:max-w-72"
              src={docInfo.image}
              alt={docInfo.name}
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="verified" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img className="w-3" src={assets.info_icon} alt="info" />
              </p>
              <p className="text-sm text-gray-500 max-w-[950px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-600">${docInfo.fees}</span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.map((slots, index) => (
              <div
                key={index}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer  ${
                  slotIndex === index
                    ? "bg-blue-500 text-white "
                    : "border border-gray-200 hover:bg-blue-50 duration-150"
                }`}
                onClick={() => setSlotIndex(index)}
              >
                <p>{slots[0] && daysOfWeek[slots[0].datetime.getDay()]}</p>
                <p>{slots[0] && slots[0].datetime.getDate()}</p>
              </div>
            ))}
          </div>
          <div className={`flex gap-3 items-center w-full overflow-x-scroll mt-4`}>
            {docSlots.length > 0 &&
              docSlots[slotIndex]?.map((item, index) => (
                <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-blue-400 text-white' : 'text-gray-400 border border-gray-300 hover:bg-blue-50 duration-150'}`} key={index}>{item.time.toLowerCase()}</p>
              ))}
          </div>
          <button className="bg-blue-500 text-white text-sm font-medium py-3 px-14 rounded-full my-6 hover:bg-blue-600 duration-200">Book and appoinment</button>
        </div>

        <RelatedDoctors />
      </div>
    )
  );
};

export default Appointments;
