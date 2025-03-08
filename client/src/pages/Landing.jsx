// import React from "react";

// import Wrapper from "../assets/wrappers/LandingPage";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// //====  ===========first page ============ ===
// const Landing = () => {
//   return (
//     <Wrapper>
//       <div className="flex flex-col items-center space-x-2 m-auto min-h-screen min-w-fit">
//         <div
//           className="p-4 m-4
//          flex flex-col"
//         >
//           <div className="flex flex-col items-left">
//             <h1>MedJobz </h1>
//             <h2 className="mb-2 text-blue-950"> A Job recruitment app</h2>
//           </div>
//           <div className="grid grid-rows-1 gap-1 grid-cols-1">
//             <span className="p-4 ">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
//               porttitor tortor. Curabitur quis aliquam turpis, quis faucibus
//               tellus. Cras luctus, magna in aliquam tincidunt, velit velit
//               semper sem, a faucibus eros nisi in ante. Mauris vulputate varius
//               purus eget aliquam. Nunc congue dolor efficitur, suscipit arcu eu,
//               commodo leo. Proin porttitor nunc at faucibus volutpat. Vivamus
//               sed tincidunt libero. Pellentesque orci sem, rhoncus in sodales a,
//               pellentesque at lectus. Integer blandit ligula at ex finibus
//               congue. Suspendisse vel ipsum quis lacus posuere egestas. Sed
//               maximus erat a pulvinar dapibus. Vivamus feugiat neque eget mauris
//               sagittis laoreet. Fusce pulvinar consectetur suscipit.
//               Pellentesque euismod diam egestas efficitur posuere. Aenean tempus
//               in nisi et iaculis. In eget risus nec felis imperdiet consectetur.
//               Fusce nec vestibulum felis. Quisque ut leo nunc. Curabitur porta
//               lacus vitae arcu tempus, at lacinia neque pretium. Cras ac est sed
//               neque sagittis viverra ut fermentum risus. Curabitur quis eros vel
//               orci sodales ultricies accumsan in eros. Sed non sem dictum,
//               finibus massa sollicitudin, porttitor quam.
//             </span>
//             <div className="m-auto" id="register">
//               <Link to="/register">
//                 <button className="text-center text-2xl justify-center hover:animate-bounce">
//                   <span className=" text-xl inline-flex items-center rounded-md hover:bg-blue-950 hover:text-blue-50 bg-gray-50 px-2 py-1  font-medium text-gray-800 ring-1 ring-inset ring-gray-500/10">
//                     Register here
//                   </span>
//                 </button>
//               </Link>
//               <span className="inline-flex items-center text-blue-950 px-2 py-1 text-xs font-medium">
//                 Or
//               </span>
//               <Link to="/login">
//                 <button className="text-center justify-center hover:animate-bounce">
//                   <span className="inline-flex items-center rounded-md bg-blue-950 text-blue-50 hover:bg-gray-50 px-2 py-1 text-xl font-medium hover:text-gray-800 ring-1 ring-inset ring-gray-500/10">
//                     Login
//                   </span>
//                 </button>
//               </Link>{" "}
//             </div>
//           </div>
//         </div>
//         <div className=" flex flex-col m-1 items-center">
//           <h1>Recent Jobs</h1>
//           <p className="-m-9"> exclusive by 58Jobz</p>
//         </div>
//         <div className=" flex flex-col m-4 items-center space-y-1">
//           <h1>Visted by</h1>
//           <div className=" m-auto space-x-2 space-y-2 items-center justify-between">
//             <span className="text-bold">Visitors</span>
//             <span className="text-bold">Users</span>
//             <span className="text-bold">Recruiters</span>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

import React from "react";

import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import styled from "styled-components";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
const StyledWrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
//====  ===========first page ============ ===
const Landing = () => {
  return (
    <StyledWrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo h-52 w-52" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Medical jobs <span>tracking</span> app
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </StyledWrapper>
  );
};

export default Landing;
{
  /* <nav className="flex items-center max-h-screen justify-between  align-middle">
        
         <img src="favicon.ico"></img> 
        <p className="font-serif  text-gray-900 self-center">Jobify</p>{" "}
        <div className="right-0">
          <Link to="/dashboard">
            <button className="text-center justify-center ">
              <span className="inline-flex items-center rounded-md hover:bg-blue-950 hover:text-blue-50 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-500/10">
                Go to Dashboard
              </span>
            </button>
          </Link>
          <Link to="/register">
            {" "}
            <button className="text-center justify-center ">
              <span className="inline-flex items-center rounded-md hover:bg-blue-950 hover:text-blue-50 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-500/10">
                Register here
              </span>
            </button>
          </Link>
          <span className="inline-flex items-center   text-blue-950  px-2 py-1 text-xs font-medium ">
            Or
          </span>
          <Link to="/login">
            <button className="text-center justify-center ">
              <span className="inline-flex items-center rounded-md bg-blue-950 text-blue-50 hover:bg-gray-50 px-2 py-1 text-xs font-medium hover:text-gray-800 ring-1 ring-inset ring-gray-500/10">
                Login
              </span>
            </button>
          </Link>
        </div>
      </nav> */
}
