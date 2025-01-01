import{ useState } from "react";
import { FaGoogle, FaGithub, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../Utils/modalSlice";
import { addUser } from "../Utils/userSlice";
import { auth, googleProvider, githubProvider } from "../Utils/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
    sendPasswordResetEmail
} from "firebase/auth";
import { WelcomeEmail } from "./EmailService/WelcomeEmail";
//import { WelcomeEmail } from "./EmailService/WelcomeEmail";

const LoginSignup = () => {
  const isLoginForm = useSelector((store) => store.modal.isLoginForm);
    const dispatch = useDispatch();
    


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

    const [formErrors, setFormErrors] = useState({});
    const [authError, setAuthError] = useState("");
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errors = {};

    if (!isLoginForm && !/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      errors.name = "Name should contain letters only.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      errors.email = "Enter a valid email address.";
    }

      if (!formData.password.trim()) {
          errors.password = "Password is required.";
      } else {
          if (formData.password.length < 6) {
              errors.password = "Password must be at least 6 characters long.";
          } else if (formData.password.length > 16) {
              errors.password = "Password must not exceed 16 characters.";
          } else if (!/[a-zA-Z]/.test(formData.password)) {
              errors.password = "Password must contain at least one letter (a-z or A-Z).";
          } else if (!/[0-9]/.test(formData.password)) {
              errors.password = "Password must contain at least one number (0-9).";
          } else if (!/[!@#$%^&*]/.test(formData.password)) {
              errors.password = "Password must contain at least one special character (!@#$%^&*).";
          } else if (/[^a-zA-Z0-9!@#$%^&*]/.test(formData.password)) {
              errors.password = "Password contains invalid characters.";
          }
      }


    if (!isLoginForm && formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
    };

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            if (isLoginForm) {
                // Login Logic
                try {
                    const userCredential = await signInWithEmailAndPassword(
                        auth,
                        formData.email,
                        formData.password
                    );
                    const user = userCredential.user;
                    console.log("User logged in:", user.email);
                    // Dispatch or handle successful login
                } catch (error) {
                    if (error.code === "auth/invalid-credential") {
                        setAuthError("Invalid Email Or Password.");
                    } else {
                        setAuthError("An error occurred. Please try again.");
                    }
                    console.error("Login error:", error.message);
                }
            } else {
                // Signup Logic
                try {
                    const userCredential = await createUserWithEmailAndPassword(
                        auth,
                        formData.email,
                        formData.password
                    );
                    const user = userCredential.user;
                    await updateProfile(user, {
                        displayName: formData.name,
                    });

                    console.log("User signed up:", user.email);
                    const { uid, displayName, email } = auth.currentUser;
                    //Welcome Email send
                    WelcomeEmail(email, displayName); 

                    dispatch(addUser({ uid, displayName, email }));
                    
                } catch (error) {
                    if (error.code === "auth/email-already-in-use") {
                        setAuthError("This email is already registered.");
                    } else {
                        setAuthError("An error occurred during signup. Please try again.");
                    }
                    console.error("Signup error:", error.message);
                }
            }
        }
    };


    const [isResetPassword, setIsResetPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState("");
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!resetEmail.trim()) {
            setFormErrors({ resetEmail: "Email is required." });
            return;
        }
        sendPasswordResetEmail(auth, resetEmail)
            .then(() => {
                alert("Forget Password Link Has Been Sent to Your Registered Email.");
                setIsResetPassword(false);
                setResetEmail("");
            })
            .catch((err) => {
                if (err.code === "auth/user-not-found") {
                    alert("No account found with this email.");
                } else {
                    alert(err.message);
                }
            });

        
    };

  const handleClick = () => {
    dispatch(toggleForm(!isLoginForm));
    setFormErrors({});
  };

    const handleSocialLogin = async (provider) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const isNewUser = result?._tokenResponse?.isNewUser; // Checking if user is new

                if (isNewUser) {
                    // Send Welcome Email
                    WelcomeEmail(user?.email, user?.displayName)
                }
            })
            .catch((error) => {
                console.error(error.message);
            });
    };




  return (
      <div className="w-[28rem] mx-auto shadow-md rounded-md p-6 bg-white">
          {isResetPassword ?
        <>
            <h2 className="text-xl font-bold mb-4 text-center text-gradient">
                Reset Password
            </h2>
            <form onSubmit={handleResetPassword}>
                <div className="mb-4">
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="email"
                            value={resetEmail}
                            onChange={(e) => setResetEmail(e.target.value)}
                            placeholder="Your email address"
                            className={`w-full pl-10 pr-4 py-2 border ${formErrors.resetEmail
                                    ? "border-red-500"
                                    : "border-gray-300"
                                } rounded-md focus:outline-none focus:ring ${formErrors.resetEmail
                                    ? "focus:ring-red-200"
                                    : "focus:ring-blue-200"
                                } text-sm`}
                        />
                        {formErrors.resetEmail && (
                            <p className="text-red-500 text-xs mt-1">
                                {formErrors.resetEmail}
                            </p>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md py-2 text-sm shadow hover:shadow-md transition"
                >
                    Send Reset Email
                </button>
            </form>
            <button
                className="w-full text-gray-500 hover:underline text-sm mt-4"
                onClick={() => setIsResetPassword(false)}
            >
                Back to Login
            </button>
        </>
      :
       <>  
      <h2 className="text-xl font-bold mb-4 text-center text-gradient">
        {isLoginForm ? "Login" : "SignUp"} for MockSkills
      </h2>

      {/* Social Login Buttons */}
      <div className="mb-4">
        <button
          className="w-full flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white rounded-md py-2 mb-2 text-sm shadow hover:shadow-md transition"
          onClick={() => handleSocialLogin(googleProvider)}
        >
          <FaGoogle className="mr-2" />
          {isLoginForm ? "Login with Google" : "SignUp with Google"}
        </button>
        <button
          className="w-full flex items-center justify-center bg-gradient-to-r from-gray-800 to-black text-white rounded-md py-2 text-sm shadow hover:shadow-md transition"
          onClick={() => handleSocialLogin(githubProvider)}
        >
          <FaGithub className="mr-2" />
          {isLoginForm ? "Login with GitHub" : "SignUp with GitHub"}
        </button>
      </div>

      {/* OR divider */}
      <div className="flex items-center mb-6">
        <hr className="flex-grow border-t border-gray-400" />
        <span className="px-4 text-center text-gray-400">or</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      <form onSubmit={handleSubmit}>
        {!isLoginForm && (
          <div className="mb-3">
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full pl-10 pr-4 py-2 border ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring ${
                  formErrors.name ? "focus:ring-red-200" : "focus:ring-blue-200"
                } text-sm`}
              />
              {formErrors.name && (
                <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
              )}
            </div>
          </div>
        )}

        <div className="mb-3">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className={`w-full pl-10 pr-4 py-2 border ${
                formErrors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring ${
                formErrors.email ? "focus:ring-red-200" : "focus:ring-blue-200"
              } text-sm`}
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
            )}
          </div>
        </div>

        <div className="mb-3">
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`w-full pl-10 pr-4 py-2 border ${
                formErrors.password ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring ${
                formErrors.password
                  ? "focus:ring-red-200"
                  : "focus:ring-blue-200"
              } text-sm`}
            />
            {formErrors.password && (
              <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>
            )}
          </div>
        </div>

        {isLoginForm && (
          <div className="text-right mb-4">
            <a  className="text-gray-500 hover:underline text-sm cursor-pointer"
                onClick={() => setIsResetPassword(true)}
            >
              Forgot Password?
            </a>
          </div>
        )}

        {!isLoginForm && (
          <div className="mb-4">
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={`w-full pl-10 pr-4 py-2 border ${
                  formErrors.confirmPassword
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring ${
                  formErrors.confirmPassword
                    ? "focus:ring-red-200"
                    : "focus:ring-blue-200"
                } text-sm`}
              />
              {formErrors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.confirmPassword}
                </p>
              )}
            </div>
          </div>
          )}

        <span className="text-red-500">{authError}</span>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-md py-2 text-sm shadow hover:shadow-md transition"
        >
          {isLoginForm ? "Login" : "SignUp"}
        </button>
      </form>

      <p className="text-center text-gray-500 mt-3 text-sm">
        {isLoginForm ? "Don't" : "Already"} have an account?{" "}
        <a
          
          className="text-gradient hover:underline font-semibold cursor-pointer"
          onClick={handleClick}
        >
          {isLoginForm ? "SignUp" : "Login"} here

        </a>
          </p>
          </>}
    </div>
  );
};



export default LoginSignup;
