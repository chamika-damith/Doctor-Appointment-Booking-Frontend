import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Chamika Damith",
    image: assets.profile_pic,
    email: "chamika@gmail.com",
    phone: "+94 78 576 5111",
    address: {
      line1: "57th Main Street",
      line2: "Panadura, Colombo",
    },
    gender: "Male",
    dob: "2002-07-03",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserData((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-gradient-to-r from-teal-400 to-emerald-300 p-6 rounded-xl shadow-lg max-w-md w-full text-gray-700">
        {/* Profile Image */}
        <div className="flex flex-col items-center gap-4 relative">
          <label className="relative cursor-pointer">
            <img
              src={userData.image}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-green-500 object-cover"
            />
            {isEdit && (
              <>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-full text-white text-xs">
                  Change
                </div>
              </>
            )}
          </label>

          {isEdit ? (
            <input
              type="text"
              className="w-full text-center text-lg font-semibold border-b focus:outline-none"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <p className="text-xl font-semibold">{userData.name}</p>
          )}
        </div>

        <hr className="my-4 border-gray-300" />

        {/* Contact Information */}
        <div className="space-y-3">
          <p className="text-lg font-medium text-gray-600">
            Contact Information
          </p>

          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Email</label>
            {isEdit ? (
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
                value={userData.email}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            ) : (
              <p className="text-gray-700">{userData.email}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Phone</label>
            {isEdit ? (
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-gray-700">{userData.phone}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Address</label>
            {isEdit ? (
              <>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                />
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 mt-2"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                />
              </>
            ) : (
              <p className="text-gray-700">
                {userData.address.line1}, {userData.address.line2}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Gender</label>
            <p className="text-gray-700">{userData.gender}</p>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Date of Birth</label>
            <p className="text-gray-700">{userData.dob}</p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition duration-300"
            onClick={() => setIsEdit(!isEdit)}
          >
            {isEdit ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
