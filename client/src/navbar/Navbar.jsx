// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.svg";
// import Wrapper from "../assets/wrappers/Navbar";
// import { FaAlignLeft, FaHome } from "react-icons/fa";
// import { useDashboardContext } from "../pages/DashboardLayout";
// import LogoutContainer from "../pages/components/LogoutContainer";
// import ThemeToggle from "../pages/components/ThemeToggle";

// const Navbar = () => {
//   const { toggleSidebar } = useDashboardContext();

//   return (
//     <Wrapper>
//       <button type="button" className="toggle-btn " onClick={toggleSidebar}>
//         <FaAlignLeft className="text-2xl ml-3 hover:text-gray-900" />
//       </button>
//       <Link to="/" className=" flex flex-row justify-center items-center">
//         <button className=" toggle-btn ">
//           <FaHome className="text-2xl ml-3 hover:text-gray-900 mx-2"></FaHome>
//         </button>
//         <img
//           src={logo}
//           // height={"50px"}
//           // width={"50px"}
//           alt="logo"
//           className="hover:cursor-pointer h-4 w-full "
//         />
//       </Link>

//       <Link to="/dashboard">
//         <button className="btn">
//           <span className="inline-flex items-center rounded-md  hover:text-blue-50  px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-500/10">
//             Go to Dashboard
//           </span>
//         </button>
//       </Link>
//       <LogoutContainer></LogoutContainer>
//       <ThemeToggle />
//     </Wrapper>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaHome } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashboardLayout";
import LogoutContainer from "../pages/components/LogoutContainer";
import ThemeToggle from "../pages/components/ThemeToggle";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <Wrapper className="flex justify-between items-center py-4">
      <button
        type="button"
        className="toggle-btn bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        onClick={toggleSidebar}
      >
        <FaAlignLeft className="text-2xl text-gray-600" />
      </button>
      <Link to="/" className="flex flex-row justify-center items-center">
        <button className="toggle-btn bg-gray-200 hover:bg-gray-300 rounded-full p-2 mx-2">
          <FaHome className="text-2xl text-gray-600" />
        </button>
        <img src={logo} alt="logo" className="h-6 w-6 hover:cursor-pointer" />
      </Link>

      <Link to="/dashboard">
        <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Dashboard
        </button>
      </Link>
      <div className="flex items-center">
        <LogoutContainer />
        <ThemeToggle />
      </div>
    </Wrapper>
  );
};

export default Navbar;
