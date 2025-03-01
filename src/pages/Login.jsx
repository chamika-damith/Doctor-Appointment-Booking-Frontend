import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col gap-4 bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm text-gray-700">
        <h2 className="text-xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Welcome Back"}
        </h2>
        <p className="text-sm text-gray-500">
          Please {state === "Sign Up" ? "sign up" : "log in"} to book an appointment
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        )}

        <div className="w-full">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="w-full">
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition duration-300"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <p className="text-sm text-center text-gray-500">
          {state === "Sign Up" ? <p>Already have an account? <span onClick={()=>setState('Login')} className="text-green-500 font-medium ml-1 hover:underline cursor-pointer">Login</span> </p>
           : <p>Don&apos;t have an account? <span onClick={()=>setState('Sign Up')} className="text-green-500 font-medium ml-1 hover:underline cursor-pointer">Sign Up</span></p>}
          
        </p>
      </div>
    </form>
  );
};

export default Login;
