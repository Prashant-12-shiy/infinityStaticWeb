import React from "react";
import Header from "../components/Header";

const Tournament = ({ handleRegisterClick }) => {
  const tournaments = [
    {
      name: "Infinity Efootball Cup Season 1",
      description:
        "An epic eFootball tournament with top-tier teams and intense matches.",
      entryFee: "100 NRP",
      prizePool: "4,000 NPR",
      availableSlots: "40",
    },
    {
      name: "Infinty Free Fire CS Cup Season 1",
      description:
        "The Infinity Free Fire CS Cup Season 1 is a thrilling tournament with a 5,000 NPR prize pool. Join now and show off your Free Fire skills!",
      entryFee: "250",
      prizePool: "5,000 NPR",
      availableSlots: "20",
    },
    // ,
    // {
    //   name: "FreeFire BR Cup Season 1",
    //   description:
    //     "An epic eFootball tournament with top-tier teams and intense matches.",
    //   entryFee: "Free",
    //   prizePool: "100,000 USD",
    //   availableSlots: "32",
    // },
  ];

  return (
    <div className="relative pt-8 h-full ">
      {/* <Header /> */}

      <h1 className="text-center text-[64px] font-semibold text-white mb-12 max-md:text-[42px]">
        Tournaments
      </h1>

      <div className="flex justify-center items-center flex-wrap gap-12 min-h-[72vh]">
        {tournaments.map((tournament, index) => (
          <div
            key={index}
            className="w-[300px] h-[450px] bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden animate-slide-bg "
          >
            {/* Card Header */}
            <div className="bg-transparent h-[30%] p-4 flex items-center justify-center relative">
              <h2 className="text-white text-2xl font-extrabold tracking-wide text-center">
                {tournament.name}
              </h2>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
            </div>

            {/* Card Content */}
            <div className="flex flex-col justify-between p-6 h-[70%] text-white">
              <p className="text-sm font-light mb-4">
                {tournament.description}
              </p>

              <div className="flex justify-between text-lg font-semibold">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-200">Entry Fee</span>
                  <span>{tournament.entryFee}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-200">Available Slots</span>
                  <span>{tournament.availableSlots}</span>
                </div>
              </div>
              <div className="flex flex-col items-center font-semibold mt-2 *:text-lg">
                <span className="text-xs text-gray-200">Prize Pool</span>
                <span>{tournament.prizePool}</span>
              </div>

              {/* Register Button */}
              <button
                className="mt-4 bg-white text-black py-2 px-4 rounded-lg text-xl font-bold hover:bg-gray-200 transition duration-300 w-full"
                onClick={handleRegisterClick} // Call the scroll function on click
              >
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournament;
