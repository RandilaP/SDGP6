/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"; // Import Link from React Router
import logo from "/src/assets/fullLogo.svg";
import { useState, useEffect } from "react";
import person from "/src/assets/person.png";

// Reusable button component
function RoleButton({ roleName, to, imageSrc }) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center border border-[#F8F9FB] rounded-lg mt-8 p-4 w-32 h-32 text-sm text-[#002358]"
    >
      <img
        src={imageSrc}
        alt={roleName}
        className="w-8 h-10 rounded-full mt-4 mb-2" // Adjust image size if needed
      />
      <span>{roleName}</span>
    </Link>
  );
}

function ProfSelect() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showShadow = windowWidth >= 640; // Adjust the breakpoint as needed

  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <div className="absolute top-0 left-0 m-4">
        <img
          src={logo}
          alt="Logo"
          className={`h-8 w-auto sm:h-15 sm:w-auto ml-6 ${
            showShadow ? "" : "block"
          }`}
        />
      </div>
      <div
        className={`w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] h-[90%] sm:h-[80%] md:h-[70%] lg:h-[50%] rounded-lg ${
          showShadow ? "shadow-lg" : ""
        } flex flex-col justify-center items-center relative bg-white`}
      >
        <button
          className="absolute top-0 left-0 m-4 flex items-center text-[#111827] px-4 py-2 rounded text-sm mt-14"
          onClick={() => window.history.back()}
        >
          <svg
            className="w-4 h-4 mr-2 "
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          Back
        </button>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-l mt-4 flex justify-center items-center font-bold text-center">
            Join as Organization, School or Volunteer
          </h1>

          <div className="flex flex-wrap justify-center mt-2 gap-4">
            <RoleButton
              roleName="Organization"
              to="/Organization/Owner-Create"
              imageSrc={person}
            />
            <RoleButton
              roleName="Volunteer"
              to="/Volunteer/Sign-up"
              imageSrc={person}
            />
            <RoleButton
              roleName="School"
              to="/School/Sign-up"
              imageSrc={person}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfSelect;

/* eslint-enable react/prop-types */
