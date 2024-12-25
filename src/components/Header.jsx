import { assets } from "../assets/assets";

const Header = () => {
  return (
    <section className="flex flex-col md:flex-row flex-wrap bg-blue-500 rounded-lg px-6 md:px-10 lg:px-20">
      {/*-------- Left Side --------*/}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </h1>
        <div className="mt-1 flex items-center gap-4">
          <img
            src={assets.group_profiles}
            alt="Group of trusted doctors"
            className="w-24 h-11 rounded-full"
          />
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            temporibus quisquam rem cum voluptas 
          </p>
        </div>
        <a
          href="#book-appointment"
          className="mt-4 flex items-center gap-2 text-blue-900 font-medium bg-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-100 transition duration-300 "
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="Arrow icon" />
        </a>
      </div>

      {/*-------- Right Side --------*/}
      <div className="md:w-1/2 relative">
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
