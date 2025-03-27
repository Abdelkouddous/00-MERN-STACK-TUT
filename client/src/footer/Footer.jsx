// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-[var(--background-secondary-color)] text-[var(--text-color)] py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Company Info */}
//           <div>
//             <h3 className="text-xl font-bold mb-4 text-[var(--primary-500)]">
//               HML Software
//             </h3>
//             <p className="text-[var(--text-secondary-color)] mb-4">
//               Providing innovative software solutions for businesses worldwide.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="https://twitter.com"
//                 className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
//               >
//                 <svg
//                   className="h-6 w-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                 </svg>
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
//               >
//                 <svg
//                   className="h-6 w-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                 </svg>
//               </a>
//               <a
//                 href="https://github.com"
//                 className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
//               >
//                 <svg
//                   className="h-6 w-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-4 text-[var(--primary-500)]">
//               Quick Links
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   to="/"
//                   className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services"
//                   className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/contact"
//                   className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xl font-bold mb-4 text-[var(--primary-500)]">
//               Contact Us
//             </h3>
//             <address className="not-italic text-[var(--text-secondary-color)]">
//               <p className="mb-2">123 Business Avenue</p>
//               <p className="mb-2">Tech District, CA 94103</p>
//               <p className="mb-2">
//                 <a
//                   href="mailto:info@hmlsoftware.com"
//                   className="hover:text-[var(--primary-500)] transition-colors"
//                 >
//                   info@hmlsoftware.com
//                 </a>
//               </p>
//               <p>
//                 <a
//                   href="tel:+11234567890"
//                   className="hover:text-[var(--primary-500)] transition-colors"
//                 >
//                   +1 (123) 456-7890
//                 </a>
//               </p>
//             </address>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-[var(--grey-700)] mt-8 pt-8 text-center">
//           <p className="text-[var(--text-secondary-color)]">
//             &copy; {currentYear} HML Software. All rights reserved.
//           </p>
//           <div className="mt-2 space-x-4">
//             <Link
//               to="/privacy"
//               className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors text-sm"
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               to="/terms"
//               className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors text-sm"
//             >
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--background-secondary-color)] text-[var(--text-color)] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--primary-500)]">
              MedCareer Connect
            </h3>
            <p className="text-[var(--text-secondary-color)] mb-4">
              Connecting healthcare professionals with their dream careers since
              2020.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--primary-500)]">
              For Job Seekers
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/jobs"
                  className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/career-resources"
                  className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
                >
                  Career Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/resume-tips"
                  className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
                >
                  Resume Tips
                </Link>
              </li>
              <li>
                <Link
                  to="/salary-guide"
                  className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
                >
                  Salary Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--primary-500)]">
              For Employers
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/post-job"
                  className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
                >
                  Post a Job
                </Link>
              </li>
              <li>
                <Link
                  to="/talent-search"
                  className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
                >
                  Search Talent
                </Link>
              </li>
              <li>
                <Link
                  to="/recruitment-solutions"
                  className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
                >
                  Recruitment Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--primary-500)]">
              Contact Us
            </h3>
            <address className="not-italic text-[var(--text-secondary-color)]">
              <p className="mb-2">123 Medical Plaza</p>
              <p className="mb-2">Healthcare District, CA 94103</p>
              <p className="mb-2">
                <a
                  href="mailto:info@medcareerconnect.com"
                  className="hover:text-[var(--primary-500)] transition-colors"
                >
                  info@medcareerconnect.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+11234567890"
                  className="hover:text-[var(--primary-500)] transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright and HML Software credit */}
        <div className="border-t border-[var(--grey-700)] mt-8 pt-8 text-center">
          <p className="text-[var(--text-secondary-color)]">
            &copy; {currentYear} MedCareer Connect. All rights reserved.
          </p>
          <div className="mt-2 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex space-x-4">
              <Link
                to="/privacy"
                className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-[var(--text-secondary-color)] hover:text-[var(--primary-500)] transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
            <div className="text-[var(--text-secondary-color)] text-sm">
              Designed & Developed by{" "}
              <a
                href="https://hmlsoftware.com"
                className="text-[var(--primary-500)] hover:underline"
              >
                HML Software
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
