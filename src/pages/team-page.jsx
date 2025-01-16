import React from "react";
import TeamPageContent from "../components/team-page-content";
import Navbar from "../components/navbar";

const TeamPage = () => {
  return (
    <>
      <div className="z-[999] sm:fixed absolute w-full">
        <Navbar />
      </div>
      <TeamPageContent />
    </>
  );
};

export default TeamPage;
