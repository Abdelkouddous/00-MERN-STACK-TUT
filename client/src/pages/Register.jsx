// Register.jsx
import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "./components/Logo";
import FormRow from "./components/FormRow";

const Register = () => {
  return (
    <Wrapper>
      <form className="form max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="h-12 w-auto sm:h-16">
            <Logo />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mb-8">
          Create Your Account
        </h1>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormRow
              type="text"
              name="name"
              labelText="First Name"
              defaultValue=""
              placeholder="John"
              required
            />
            <FormRow
              type="text"
              name="lastName"
              labelText="Last Name"
              defaultValue=""
              placeholder="Doe"
              required
            />
          </div>

          <FormRow
            type="text"
            name="location"
            defaultValue=""
            placeholder="Your Location"
            required
          />

          <FormRow
            type="email"
            name="email"
            labelText="Email Address"
            defaultValue=""
            placeholder="your.email@gmail.com"
            required
          />

          <FormRow
            type="password"
            name="password"
            defaultValue=""
            placeholder="Choose a strong password"
            required
          />

          <button
            type="submit"
            className="btn btn-block transition-all duration-300 hover:opacity-90"
          >
            Create Account
          </button>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-2">
              Already have an account?
            </p>
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-500 bg-white border border-primary-500 rounded-md hover:bg-primary-50 transition-all duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default Register;
