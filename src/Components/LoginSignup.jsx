import { FaGoogle, FaLinkedin, FaEnvelope, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../Utils/loginSlice";

const LoginSignup = () => {
  const isLoginForm = useSelector((store) => store.login.isLogin);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleForm(!isLoginForm));
  };
  return (
    <div className="max-w-lg mx-auto   rounded-lg p-8 ">
      <h2 className="text-2xl  font-bold mb-6 text-center">
        {isLoginForm ? "Login" : "SignUp"} for MockSkills
      </h2>

      {/* Google Sign-up */}
      <button className="w-full flex items-center justify-center bg-gradient text-white rounded-md py-2 mb-3">
        <FaGoogle className="mr-2" />
        {isLoginForm ? "Login" : "SignUp"} with Google
      </button>

      {/* LinkedIn Sign-up */}
      <button className="w-full flex items-center justify-center bg-gradient text-white rounded-md py-2 mb-3">
        <FaLinkedin className="mr-2" />
        {isLoginForm ? "Login" : "SignUp"} with LinkedIn
      </button>

      {/* OR divider */}
      <div className="text-center text-gray-400 mb-6">or</div>

      {/* Email Input */}
      <div className="mb-4">
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            placeholder="Your email address"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="mb-6">
        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      <button className="w-full bg-gradient text-white rounded-md py-2">
        {isLoginForm ? "Login" : "SignUp"}
      </button>

      <p className="text-center text-gray-500 mt-4">
        {isLoginForm ? "Not" : ""} have an account?{" "}
        <a
          href="#"
          className="text-gradient hover:underline"
          onClick={() => handleClick()}
        >
          {isLoginForm ? "SignUp" : "Login"} here.
        </a>
      </p>
    </div>
  );
};

export default LoginSignup;
