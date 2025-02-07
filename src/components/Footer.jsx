import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate("");
  return (
    <div className=" md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*left section */}
        <div>
          <h3
            onClick={() => navigate("/")}
            className="font-bold mb-3 text-2xl cursor-pointer bg-gradient-to-r from-teal-800 to-emerald-500 bg-clip-text text-transparent"
          >
            DocBooking
          </h3>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            consequatur quas quaerat exercitationem velit fugit deserunt
            nesciunt totam ipsa iure? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Fugiat, totam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempore, consectetur?
          </p>
        </div>

        {/*center section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-gray-700 hover:cursor-pointer">Home</li>
            <li className="hover:text-gray-700 hover:cursor-pointer">
              About us
            </li>
            <li className="hover:text-gray-700 hover:cursor-pointer">
              Contact us
            </li>
            <li className="hover:text-gray-700 hover:cursor-pointer">
              Privacy policy
            </li>
          </ul>
        </div>

        {/*right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-gray-700 hover:cursor-pointer">
              +94-78-576-5111
            </li>
            <li className="hover:text-gray-700 hover:cursor-pointer">
              chamikadamith9@gmail.com
            </li>
          </ul>
        </div>
      </div>
      {/*copyright text */}
      <div>
        <hr className="h-1 bg-gray-300" />
        <p className="py-5 text-sm text-center">
          Copyright2025@ Docbooking - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
