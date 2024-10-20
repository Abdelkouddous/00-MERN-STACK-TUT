import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "./components/Logo";

import FormRow from "./components/FormRow";

const Login = () => {
  //   return (
  //     <div>
  //       <h1>Login</h1>
  // <p>Don't have an account ? </p>
  // <Link to="/register">
  //   {" "}
  //   <button className="text-center justify-center ">
  //     <span className="inline-flex items-center rounded-md hover:bg-blue-950 hover:text-blue-50 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
  //       Register
  //     </span>
  //   </button>
  // </Link>
  //     </div>
  //   );
  // };
  return (
    <Wrapper>
      <form className="form">
        <div className="h-5 w-[30%]">
          <Logo></Logo>
        </div>
        <h1 className="my-2 text-center "> Login</h1>

        <FormRow
          type="email"
          name="email"
          defaultValue={""}
          placeholder={"your.email@gmail.com"}
        ></FormRow>

        <FormRow
          type="password"
          name="password"
          defaultValue={"secret123"}
          placeholder={"Enter your password"}
        ></FormRow>
        <button type="submit" className="btn btn-block">
          Login
        </button>

        <div className="flex flex-col items-center justify-center ">
          <p>A visitor ? </p>{" "}
          <button type="button" className="btn btn-block">
            Explore the app
          </button>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <p>Don't have an account ? </p>
          <Link to="/register">
            {" "}
            <button className="text-center justify-center ">
              <span className="inline-flex items-center rounded-md hover:bg-blue-950 hover:text-blue-50 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                Register
              </span>
            </button>
          </Link>
        </div>
      </form>
    </Wrapper>
  );
};

export default Login;
