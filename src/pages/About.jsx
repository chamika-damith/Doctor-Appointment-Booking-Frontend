import { assets } from "../assets/assets";
const About = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-10">
      {/* Title Section */}
      <div className="text-center text-2xl md:text-3xl font-semibold text-gray-700">
        <p>
          ABOUT <span className="text-blue-600">US</span>
        </p>
      </div>

      {/* About Section */}
      <div className="my-10 flex flex-col md:flex-row gap-14 items-center">
        <img
          className="w-full md:max-w-[360px] rounded-lg shadow-md"
          src={assets.about_image}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-3/5 text-base text-gray-700 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            accusantium excepturi dicta rem maxime, maiores corporis! Qui rerum
            quis perferendis in, dolorem nemo at mollitia, animi corporis velit
            dolore porro sunt repudiandae! Esse, delectus dolor? Reiciendis,
            voluptates, voluptatum nihil ea ab ipsa illo dicta voluptatibus
            pariatur alias odio molestiae accusamus assumenda, obcaecati
            repudiandae dolorum perspiciatis neque vitae saepe id modi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            accusantium excepturi dicta rem maxime, maiores corporis! Qui rerum
            quis perferendis in, dolorem nemo at mollitia, animi corporis velit
            dolore porro sunt repudiandae! Esse, delectus dolor? Reiciendis,
            voluptates, voluptatum nihil ea ab ipsa illo dicta voluptatibu
          </p>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="mt-20">
        <div className="text-center text-xl font-semibold text-gray-800">
          Our <span className="text-blue-600">Vision</span>
        </div>
        <p className="mt-6 text-center text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel autem,
          corporis officia, rem, praesentium nisi sit placeat mollitia
          aspernatur deserunt molestias asperiores natus saepe quos atque omnis
          velit vitae. Impedit natus corrupti nemo. Natus exercitationem
        </p>
      </div>

      {/* Our Story Section */}
      <div className="mt-20 flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-3/5 text-base text-gray-700 leading-relaxed">
          <h2 className="text-lg font-semibold text-gray-800">
            Our <span className="text-blue-600">Story</span>
          </h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            veniam necessitatibus nobis animi, iusto doloremque ipsum quam,
            laudantium quisquam cumque mollitia labore nisi quos provident
            praesentium ipsa molestiae natus optio sint laborum id commodi in
            atque alias? Quidem, explicabo odit?
          </p>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            error non autem qui hic repellat quam similique facilis quod vitae,
            voluptate deserunt eos! Aliquid voluptates veritatis eum! Magnam,
            sit eius?
          </p>
        </div>
        <img
          className="w-full md:max-w-[360px] rounded-lg shadow-md"
          src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Our Story"
        />
      </div>
    </div>
  );
};

export default About;
