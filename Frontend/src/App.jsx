// // Common pages
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Homepage from "./components/Home/homepage";
// import Login from "./components/Login";
// import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
// const VITE_CLERK_PUBLISHABLE_KEY = import.meta.env;

// const Home = () => <div>Home Page</div>;
// const PastEvents = () => <div>Past Events Page</div>;
// const ContactUs = () => <div>Contact Us Page</div>;
// const AboutUs = () => <div>About Us Page</div>;
// const SignIn = () => <div>Sign In Page</div>;
// const SignUp = () => <div>Sign Up Page</div>;

// const App = () => {
//   return (
// <Router>
//   <Navbar />
//   <Homepage />
//   <Routes>
//     <Route exact path="./components/Home/homepage" component={Home} />
//     <Route path="/past-events" component={PastEvents} />
//     <Route path="/contact-us" component={ContactUs} />
//     <Route path="/about-us" component={AboutUs} />
//     <Route path="/sign-in" component={Login} />
//     <Route path="/sign-up" component={SignUp} />
//   </Routes>
// </Router>
//   );
// };

// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Header from './components/Profiles/Header'
// // import Homepage from './components/Home/homepage';
// // import OrgProfile from './pages/OrgProfilePage';
// // import Logo from './assets/Rated.png';
// // import SeminarNav from './components/navbar/SeminarNav';

// // // const OrgProfilePage = () => <Homepage />;
// // // const PastEvents = () => <div>PastEvents</div>;
// // // const RecievedSeminarsReq = () => <div>RecievedSeminarsReq</div>;
// // // const RecievedVolunteerReq = () => <div>RecievedVolunteerReq</div>;
// // // const Seminars = () => <div>Seminars</div>;
// // // const Statistics = () => <div>Statistics</div>;

// // const App =() => {
// //   let Array = [
// //     {id: "home"},
// //     {id: "orgProfile"},
// //     {id: "pastEvents"},
// //     {id: "recievedSeminarsReq"},
// //     {id: "recievedVolunteerReq"},
// //     {id: "seminars"}]

// //   return (
// //     <SeminarNav
// //     NavBarArray={Array}
// //     />
// //   );
// // };

//  export default App;

// // {/*<Router>
// //         <Header OLogo={Logo}/>
// //         <OrgProfile />
// //         <Routes>
// //             <Route exact path="./pages/OrgProfilePage" component={OrgProfilePage} />
// //             <Route path="./components/Home/homepage" component={PastEvents} />
// //             <Route path="/" component={RecievedSeminarsReq} />
// //             <Route path="/" component={RecievedVolunteerReq} />
// //             <Route path="/" component={Seminars} />
// //             <Route path="/" component={Statistics} />
// //         </Routes>
// //     </Router>   */}

// // import React from "react";
// // import TableComponent from "./components/TableComponent";

// // const App = () => {
// //   return (
// //     <TableComponent />
// //   );
// // };

// // export default App;
//
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import Home from "./components/Home/homepage";
// import Login from "./components/Login";
// import Next from './components/SignUP';
// import SignUp from "./components/Profiles/ProfSelect";
//
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route index element={<Home />} />
//
//       <Route path="/past-events" element={<div>Past Events</div>} />
//
//       <Route path="/contact-us" element={<div>Contact Us</div>} />
//
//       <Route path="/about-us" element={<div>About Us</div>} />
//
//       <Route path="/sign-in" element={<Login />} />
//
//       <Route path="/sign-up" element={<SignUp />} />
//
//       <Route path="/next" element={<Next />} />
//     </>
//   )
// );
//
// function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }
//
// export default App;

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
<<<<<<< Updated upstream
import { ClerkProvider, SignedIn } from "@clerk/clerk-react";

import Home from "./pages/CommanPages/Homepage";
import Login from "./components/Login";
import Next from "./components/SignUP";
=======
import Homepage from "./pages/CommanPages/Homepage";
import AboutUs from "./pages/CommanPages/AboutUs";
import Login from "./components/Login";
>>>>>>> Stashed changes
import PastEvents from "./pages/CommanPages/PastEvents";
import ContactUs from "./pages/CommanPages/ContactUs";
import OrgOwnerCreate from "./components/OrgOwner-Create";
import VolSignUP from "./components/VolSignUP";
import SclSignUP from "./components/SclSignUP";
import OrgSignUP from "./components/OrgSignUP";
import PrevSem from "./pages/OrganizationPges/PrevSeminar";
import PrevSeminar from "./pages/OrganizationPges/PrevSeminar";
import UpSeminar from "./pages/OrganizationPges/UpSeminar";
import OrgSeminar from "./components/Organization/section/OrgSeminar";
import Seminar from "./components/Profiles/SeminarBtns";
import OrgOverviewPg from "./pages/OrganizationPges/OrgOverviewPg";
import OrgReceivedSeminarRequests from "./pages/OrganizationPges/ReceivedSeminarRequests";
import OrgReceivedVolunteerRequests from "./pages/OrganizationPges/ReceivedVolunteerRequests";
import Statistics from "./pages/OrganizationPges/Statistics";

import Loading from "./components/Loading";
<<<<<<< Updated upstream
import SignUp from "./components/Profiles/ProfSelectSignUp";
=======
import SignUp from "./components/Profiles/ProfSelect";
import VolUPCSeminar from "./components/VolUpComingSeminar";


import UpSeminar from "./pages/OrganizationPges/UpSeminar";
import OrgSeminar from "./components/Organization/section/OrgSeminar";
import Seminar from "./components/Profiles/SeminarBtns";
import OrgOverviewPg from "./pages/OrganizationPges/OrgOverviewPg";
import OrgReceivedSeminarRequests from "./pages/OrganizationPges/ReceivedSeminarRequests";
import OrgReceivedVolunteerRequests from "./pages/OrganizationPges/ReceivedVolunteerRequests";
>>>>>>> Stashed changes
import UserHeader from "./components/Header/OrgHeader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />

      <Route path="/past-events" element={<PastEvents />} />

      <Route path="/contact-us" element={<ContactUs />} />

      <Route path="/about-us" element={<div>About Us</div>} />

      {/* <Route path="/Sign-In" element={<Login />} /> */}
      <Route path="/Sign-In" element={<UserHeader />} />

      <Route path="/Sign-Up" element={<SignUp />} />

      <Route path="/School/Sign-up" element={<SclSignUP />} />
      <Route path="/Volunteer/Sign-up" element={<VolSignUP />} />
      <Route path="/Organization/Sign-up" element={<OrgSignUP />} />
      <Route path="/Organization/Create-Owner" element={<OrgOwnerCreate />} />

      <Route path="/Volunteer/Sign-In" element={<Login />} />
      <Route path="/Organization/Sign-In" element={<Login />} />
      <Route path="/School/Sign-In" element={<Login />} />
      {/* <Route path="Organization/:id" element={<Organization />} /> */}

      <Route path="/next" element={<Loading />} />

<<<<<<< Updated upstream
      {/* organization */}
=======
>>>>>>> Stashed changes
      <Route path="/SeminarBtns" element={<Seminar />} />
      <Route path="/OrgSeminar" element={<OrgSeminar />} />
      <Route path="/PrevSeminar" element={<PrevSeminar />} />
      <Route path="/UpSeminar" element={<UpSeminar />} />
      <Route path="/OrgOverview" element={<OrgOverviewPg />} />
      <Route path="/OrgRecSeminar" element={<OrgReceivedSeminarRequests />} />
<<<<<<< Updated upstream
      <Route
        path="/OrgRecVolunteer"
        element={<OrgReceivedVolunteerRequests />}
      />
      <Route path="/OrgStatistics" element={<Statistics />} />
=======
      <Route path="/Sign-In" element={<UserHeader />} />
      <Route path="/OrgRecVolunteer" element={<OrgReceivedVolunteerRequests />} />
      <Route path="/OrgStatistics" element={<Statistics />} />

      <Route path="/test" element={<Loading />} />
>>>>>>> Stashed changes
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
