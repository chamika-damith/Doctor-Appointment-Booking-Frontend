import { assets } from "../assets/assets";

const Header = () => {
  return (
    <section className="flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-teal-500 to-emerald-400 rounded-3xl px-6 md:px-10 lg:px-20">
      {/*-------- Left Side --------*/}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-white font-semibold leading-tight">
          No Compromise <br />
          When It Comes to
          <br /> Your Well-being
        </h1>
        <div className="mt-1 flex items-center gap-4">
          <img
            src={assets.group_profiles}
            alt="Group of trusted doctors"
            className="w-24 h-11 rounded-full"
          />
          <p className="text-white">
            Join thousands of satisfied patients who trust our network of expert
            healthcare professionals.
          </p>
        </div>
        <a
          href="#speciality"
          className="mt-4 flex items-center gap-2 text-green-900 font-medium bg-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-100 transition duration-300"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="Arrow icon" />
        </a>
      </div>

      {/*-------- Right Side --------*/}
      <div className="md:w-1/2 relative">
        {/* Appointment Card */}
        <div className="absolute left-0 top-16 md:top-24 z-20 w-2/5 bg-white bg-opacity-95 p-4 backdrop-blur rounded-lg shadow-lg animate-float">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Dr. Haley Lawrence"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Dr. Haley Lawrence</p>
              <p className="text-sm text-gray-500">Cardiologist</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
            <span>Sun, May 21, 08:00pm - 10:00pm</span>
          </div>
        </div>

        {/* Chat Card */}
        <div className="absolute right-1 md:right-1 top-36 md:top-44 z-0 w-64 bg-white bg-opacity-95 p-3 backdrop-blur rounded-lg shadow-lg animate-float-delayed">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <img
              src="https://randomuser.me/api/portraits/men/46.jpg"
              alt="Skyler Ruby"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1">
              <p className="text-sm font-medium">Skyler Ruby</p>
              <p className="text-xs text-gray-500">
                Hello! I need your help...
              </p>
            </div>
          </div>
        </div>

        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt="Header illustration of doctors"
        />
      </div>
    </section>
  );
};

export default Header;
