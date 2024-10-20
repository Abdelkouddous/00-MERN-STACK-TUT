import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="m-auto flex flex-col items-center">
      <h1 className="">Error</h1>
      <p>Something went wrong, please try again later.</p>
      <Link to="/">
        <button className="text-center justify-center">
          <span className="inline-flex items-center rounded-md hover:bg-blue-950 hover:text-blue-50 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-500/10">
            Go to Dashboard
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Error;
