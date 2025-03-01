import Marquee from "react-fast-marquee";

const InfiniteMarquee = () => {
  return (
    <div className="w-full my-16 bg-green-200 rounded-xl">
      <Marquee speed={50} gradient={false} className="overflow-hidden">
        {[
          "General Physician",
          "Gynecologist",
          "Dermatologist",
          "Pediatrician",
          "Neurologist",
          "Gastroenterologist",
        ].map((specialty, index) => (
          <span
            key={index}
            className="mx-10 text-3xl font-semibold text-gray-700 opacity-80 uppercase tracking-wider"
          >
            {specialty}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default InfiniteMarquee;
