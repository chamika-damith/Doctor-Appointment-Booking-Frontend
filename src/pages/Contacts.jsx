import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      <p
        className="bg-gradient-to-r
         from-teal-900 to-emerald-400 bg-clip-text text-transparent text-2xl font-semibold text-center "
      >
        Contact Us
      </p>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-[#2A4B52]"
            />
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-[#2A4B52]"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-[#2A4B52] min-h-[150px]"
            />
            <button
              className="bg-gradient-to-r
         from-teal-800 to-emerald-400  hover:scale-105 transition-all text-white w-full py-3 rounded-md font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Newsletter Section */}
        <div
          className="p-8 bg-gradient-to-l
         from-teal-500 to-emerald-400 text-white rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-5">Our Newsletter</h3>
          <p className="text-white/90 text-sm mt-2 gap-3 flex flex-col">
            <span className="font-semibold text-base">Professional & Trustworthy: </span>Stay informed with our latest healthcare
            updates. Join a growing community of patients who rely on our expert
            network for trusted medical care.<br/> <span className="font-semibold text-base">Warm & Inviting:</span> Be the first to
            receive our latest health insights and updates! Join thousands of
            happy patients who trust our dedicated healthcare professionals for
            expert care.
          </p>
          <div className="mt-10 space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-gray-300 text-gray-900 focus:ring focus:ring-[#2A4B52]"
            />
            <button className="w-full bg-[#2A4B52] hover:bg-[#1e373d] text-white py-3 rounded-md font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: <Phone className="w-6 h-6 text-[#2A4B52]" />,
            title: "(+94) 78 576 5111",
            text: "Feel free to call us anytime.",
          },
          {
            icon: <Mail className="w-6 h-6 text-[#2A4B52]" />,
            title: "docbooking@gmail.com",
            text: "Drop us an email for inquiries.",
          },
          {
            icon: <MapPin className="w-6 h-6 text-[#2A4B52]" />,
            title: "Colombo,Sri Lanka",
            text: "Visit us at our hospital.",
          },
        ].map((info, index) => (
          <div
            key={index}
            className="p-6 bg-[#F0F4F5] rounded-lg shadow-lg flex items-start space-x-4 hover:bg-emerald-400 duration-400 transition-all"
          >
            {info.icon}
            <div>
              <div className="font-medium text-gray-800">{info.title}</div>
              <p className="text-sm text-gray-600 mt-1">{info.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.537039161018!2d-0.12030108422937106!3d51.50330017963447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c40c8d9b99%3A0x7797a8ef74e1dbc!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1625661728678!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
