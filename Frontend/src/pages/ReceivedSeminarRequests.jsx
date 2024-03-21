import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import isToday from "date-fns/isToday";
import axios from "axios";
import ProfNav from "../components/navbar/ProfNav";
import OrgHeader from "../components/Header/OrgHeader";
import Footer from "../components/Footer/Footer";

import FilterSeminars from "../components/ReceivedSeminarRequests/FilterSeminars";

const ReceivedSeminarRequests = () => {
  const [groupedSeminars, setGroupedSeminars] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Initial loading state
  const [combinedArray, setCombinedArray] = useState([]); // Initial combined array state
  const [seminars, setSeminars] = useState([]);
  const [schools, setSchools] = useState([]);
  const [rotatedSeminarIds, setRotatedSeminarIds] = useState([]);
  const [seminarStatuses, setSeminarStatuses] = useState({});

  const handleUpdateStatus = async (id, newStatus) => {
    console.log(id, newStatus);
    setSeminarStatuses((prevStatus) => {
      return {
        ...prevStatus, //'...' spread operator to copy the previous state
        [id]: newStatus,
      };
    });

    try {
      const apiUrl = `http://localhost:4000/api/seminars/${id}`;

      const response = await axios.patch(apiUrl, {
        status: newStatus, // Update only the "status" property
      });

      if (response.status !== 200) {
        throw new Error(
          `Failed to update seminar: ${
            response.data.error || response.statusText
          }`
        );
      }

      console.log("Seminar updated successfully!");
    } catch (error) {
      console.error("Error updating seminar:", error);
    }
  };

  const handleToggle = (seminarId) => {
    setRotatedSeminarIds((prevIds) => {
      if (prevIds.includes(seminarId)) {
        return prevIds.filter((id) => id !== seminarId);
      } else {
        return [...prevIds, seminarId];
      }
    });
  };

  useEffect(() => {
    const fetchData = async (apiUrl) => {
      // setIsLoading(true); // Set loading to true before fetching
      try {
        const response = await axios.get(apiUrl);
        switch (apiUrl) {
          case "http://localhost:4000/api/schools":
            setSchools(response.data);
            console.log(response.data);
            break;
          case "http://localhost:4000/api/seminars":
            setSeminars(response.data);
            break;
          default:
            console.warn("Unexpected API URL:", apiUrl);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchData("http://localhost:4000/api/schools");
    fetchData("http://localhost:4000/api/seminars");
  }, []);

  // New useEffect for fetchCombinedArray
  useEffect(() => {
    const fetchCombinedArray = async () => {
      try {
        if (!schools.length || !seminars.length) {
          // Handle the case where schools or seminars haven't been fetched yet
          return; // Exit early if data is not available
        }

        const findSchoolForSeminar = (seminarId) => {
          return schools.find((school) => school._id === seminarId);
        };
        const filteredSeminars = seminars.filter(
          (seminar) => seminar.status === "pending"
        );

        const combinedArray = filteredSeminars.map((seminar) => {
          const school = findSchoolForSeminar(seminar.schoolId);
          return {
            ...seminar,
            schoolId: school?._id,
            schoolName: school?.name,
            schoolAddress: school?.address,
            schoolProfileColor: school?.profileColor,
            schoolProfileImageAvailable: school?.profileImageAvailable,
          };
        });

        setCombinedArray(combinedArray);
      } catch (error) {
        console.error("Error combining seminars and schools:", error);
      }
    };

    if (schools.length && seminars.length) {
      // Call fetchCombinedArray only after schools and seminars are available
      fetchCombinedArray();
    }
  }, [schools, seminars]);

  useEffect(() => {
    if (!combinedArray.length) return; // Exit early if combinedArray is not available

    const newGroupedSeminars = {};
    combinedArray.forEach((seminar) => {
      const formatedDate = isToday(new Date(seminar.createdAt))
        ? "Today"
        : format(new Date(seminar.createdAt), "yyyy-MM-dd");
      if (!newGroupedSeminars[formatedDate]) {
        newGroupedSeminars[formatedDate] = [];
      }
      newGroupedSeminars[formatedDate].push(seminar);
    });
    setGroupedSeminars(newGroupedSeminars);
  }, [combinedArray]);

  console.log(combinedArray);

  return (
    <>
      <OrgHeader />
      <div className="pt-[7%]">
        <ProfNav />
        <div className="container mx-auto p-4">
          {Object.entries(groupedSeminars).map(([date, filterSeminars]) => (
            <div key={date}>
              <h2 className="text-md font-light mt-8 mb-4 text-left">{date}</h2>
              <FilterSeminars
                filterSeminars={filterSeminars}
                rotatedSeminarIds={rotatedSeminarIds}
                seminarStatuses={seminarStatuses}
                handleToggle={handleToggle}
                handleUpdateStatus={handleUpdateStatus}
                isLoading={isLoading}
              />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ReceivedSeminarRequests;
