// Login.jsx
import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "./components/Logo";
import FormRow from "./components/FormRow";

const Login = () => {
  return (
    <Wrapper>
      <form className="form max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="h-12 w-auto sm:h-16">
            <Logo />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mb-8">
          Login to Your Account
        </h1>

        <div className="space-y-6">
          <FormRow
            type="email"
            name="email"
            defaultValue=""
            placeholder="your.email@gmail.com"
            labelText="Email Address"
            required
          />

          <FormRow
            type="password"
            name="password"
            defaultValue=""
            placeholder="Enter your password"
            labelText="Password"
            required
          />

          <button
            type="submit"
            className="btn btn-block transition-all duration-300 hover:opacity-90"
          >
            Sign In
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-block bg-gray-100 text-gray-700 hover:bg-gray-700 transition-all duration-300"
          >
            Explore as Guest
          </button>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-2">Don't have an account?</p>
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-500 bg-white border border-primary-500 rounded-md hover:bg-primary-500 hover:scale-x-105 transition-all duration-300"
            >
              Create Account
            </Link>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default Login;
