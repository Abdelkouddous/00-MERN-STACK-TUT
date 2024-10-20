import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import logo from "../assets/images/logo.svg";
import FormRow from "./components/FormRow";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <h1 className="my-2 text-center "> Register</h1>

        <FormRow type="text" name="name" defaultValue={"Aymen"}></FormRow>
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue={"Hamel"}
        ></FormRow>
        <FormRow type="text" name="location" defaultValue={"Algeria"}></FormRow>
        <FormRow
          type="email"
          name="email"
          defaultValue={"your-email@gmail.com"}
        ></FormRow>

        <FormRow
          type="password"
          name="password"
          defaultValue={"secret1234"}
        ></FormRow>
        <button type="submit" className="btn btn-block">
          Register
        </button>
        <div className="flex flex-col items-center justify-center my-5">
          <span className="text-blue-950 text-center">
            Already have an account?
          </span>
          <Link to="/login">
            <button className="btn btn-block">Login</button>
          </Link>
        </div>
      </form>
    </Wrapper>
  );
};

export default Register;
