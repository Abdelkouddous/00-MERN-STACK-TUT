// // Login.jsx
// import React from "react";
// import {
//   Form,
//   Link,
//   redirect,
//   useNavigation,
//   useActionData,
// } from "react-router-dom";
// import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
// import Logo from "./components/Logo";
// import FormRow from "./components/FormRow";
// import { toast } from "react-toastify";
// import customFetch from "../utils/customFetch";

// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   // Check if the email and password fields are empty
//   const errors = { msg: "" };
//   if (data.password.length < 8) {
//     errors.msg = "Password must be at least 8 characters long.";
//     // toast.error("Password must be at least 8 characters long.");
//     return errors;
//   }
//   if (!data.email || !data.password) {
//     errors.msg = "Please provide all values.";
//   }
//   if (errors.msg) {
//     toast.error(errors.msg);
//     return errors;
//   }
//   //Incorrect email or password

//   // Check if the user is already logged in
//   const token = localStorage.getItem("token");
//   if (token) {
//     toast.error("You are already logged in.");
//     return token;
//   }
//   // If not logged in, proceed with the login process

//   try {
//     const response = await customFetch.post("/auth/login", data);
//     toast.success("Login successful!", response);
//     return redirect("/dashboard");
//   } catch (error) {
//     console.error("Login error:", error);
//     errors.msg = error?.response?.data?.msg;
//     // const errorMessage = errors.msg || "An error occurred during login.";
//     // toast.error(errorMessage);
//     return errors;
//   }
// };

// const Login = () => {
//   const errors = useActionData();
//   const navigation = useNavigation();
//   const isSubmitting = navigation.state === "submitting";

//   return (
//     <Wrapper>
//       <Form
//         method="post"
//         className="form max-w-md w-full mx-auto px-8 py-10 rounded-lg shadow-lg"
//       >
//         <div className="flex justify-center mb-6">
//           <div className="h-14 w-auto">
//             <Logo />
//           </div>
//         </div>
//         <h1 className="text-2xl font-bold text-center mb-8 text-primary-600">
//           Login to Your Account
//         </h1>
//         <p className="text-sm text-center text-gray-600 mb-6">
//           {errors?.msg && (
//             <div className="text-red-500 text-sm text-center mb-4">
//               {errors.msg}
//             </div>
//           )}
//         </p>

//         <div className="space-y-5">
//           <FormRow
//             type="email"
//             name="email"
//             defaultValue=""
//             placeholder="your_email@gmail.com"
//             labelText="Email Address"
//             required
//           />

//           <FormRow
//             type="password"
//             name="password"
//             defaultValue=""
//             placeholder="Enter your password"
//             labelText="Password"
//             required
//           />

//           <button
//             type="submit"
//             className="btn btn-block py-3 mt-6 text-base font-medium rounded-md shadow-md transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? (
//               <span className="flex items-center justify-center">
//                 <svg
//                   className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 Logging in...
//               </span>
//             ) : (
//               "Login"
//             )}
//           </button>

//           <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">or</span>
//             </div>
//           </div>

//           <button
//             type="button"
//             className="btn btn-block bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300"
//           >
//             Explore as Guest
//           </button>

//           <div className="text-center mt-8 border-t pt-6">
//             <p className="text-sm text-gray-600 mb-3">
//               Don&apos;t have an account?
//             </p>
//             <Link
//               to="/register"
//               className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-primary-600 bg-white border border-primary-500 rounded-md hover:bg-primary-50 transition-all duration-300"
//             >
//               Create Account
//             </Link>
//           </div>
//         </div>
//       </Form>
//     </Wrapper>
//   );
// };

// export default Login;

// Login.jsx
import React from "react";
import {
  Form,
  Link,
  redirect,
  useNavigation,
  useActionData,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "./components/Logo";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { FiArrowLeft, FiEye, FiEyeOff } from "react-icons/fi";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Validation
  const errors = { msg: "" };
  if (!data.email || !data.password) {
    errors.msg = "Please provide all values.";
  } else if (data.password.length < 8) {
    errors.msg = "Password must be at least 8 characters long.";
  }

  if (errors.msg) {
    toast.error(errors.msg);
    return errors;
  }

  // Check if already logged in
  const token = localStorage.getItem("token");
  if (token) {
    toast.error("You are already logged in.");
    return token;
  }

  // Login request
  try {
    const response = await customFetch.post("/auth/login", data);
    toast.success("Login successful!");
    return redirect("/dashboard");
  } catch (error) {
    console.error("Login error:", error);
    const errorMsg =
      error?.response?.data?.msg || "An error occurred during login.";
    toast.error(errorMsg);
    return { msg: errorMsg };
  }
};

const Login = () => {
  const errors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Wrapper>
      {/* <div className="absolute top-6 left-6">
        <Link to="/" className="flex items-center  transition-colors">
          <FiArrowLeft className="fixed mr-2 hover:scale-125 " />
        </Link>
      </div> */}

      <Form
        method="post"
        className="form max-w-md w-full mx-auto px-8 py-10 rounded-xl"
      >
        {/* <div className="flex justify-center mb-6">
          <div className="h-16 w-auto">
            <Logo />
          </div>
        </div> */}
        <div className="flex justify-between items-center mb-6">
          <button className="inline-flex items-center gap-2 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300">
            <Link to="/" className="flex items-center  transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </button>
          <div className="h-14 w-auto">
            <Logo />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>

        <p className="text-center  mb-8">Sign in to continue to your account</p>

        {errors?.msg && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
            {errors.msg}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                defaultValue=""
                placeholder="your_email@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium  mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                defaultValue=""
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all pr-12"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end mt-1">
            <Link
              to="/forgot-password"
              className="text-sm text-primary-600 hover:text-primary-800 transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600  font-medium py-3 px-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Logging in...
              </span>
            ) : (
              "Sign In"
            )}
          </button>

          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm ">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-primary-600 hover:text-primary-800 transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Login;
