import React from "react";
import {isMobile} from 'react-device-detect';
import ProcessDateAndTime from "./ProcessDateAndTime";

const VoluneerDetails = ({
    volunteer,
    rotatedVolunteerIds,
    handleToggle,
    }) => {

        const { formattedDate, formattedTime } = ProcessDateAndTime(volunteer);

        return (
            <div
                className={`row-span-2 grid md:grid-cols-2 sm:grid-cols-1 m-5 ${
                    !rotatedVolunteerIds.includes(volunteer._id) ? 'hidden' : ''
                }`}
                onClick={isMobile ? () => handleToggle(volunteer._id) : null}
            >
                <div>
                    <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                        <p className="font-bold mr-2">Request Date:</p>
                        <p className="md:text-left">{formattedDate}</p>
                    </div>
                    <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                        <p className="font-bold mr-2">Request Time:</p>
                        <p className="md:text-left">{formattedTime}</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                        <p className="font-bold mr-2">Full Name:</p>
                        <p className="col-span-2 md:text-left">{volunteer.name}</p>
                    </div>
                    <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                        <p className="md:text-left font-bold mr-2">Volunteer ID:</p>
                        <p className="md:text-left">{volunteer.volunteerId}</p>
                    </div>
                </div>
            </div>
        );
  }

  export default VoluneerDetails;