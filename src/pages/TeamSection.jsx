import React from "react";
import { People, MeetOurLeadership } from "../components/team-section";

const TeamSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <MeetOurLeadership />
        <People />
      </div>
    </div>
  );
};

export default TeamSection;
