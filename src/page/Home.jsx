import React, { useRef } from "react";
import Header from "../components/Header";
import { motion } from "motion/react";
import Tournament from "./Tournament";

const Home = () => {
  const steps = [
    {
      number: 1,
      title: "Choose Tournament",
      description:
        "Browse available tournaments and select the one you want to join.",
      details:
        "Details about tournaments, how to choose the right one, and tips for winning.",
    },
    {
      number: 2,
      title: "Register",
      description:
        "Fill out the registration form and secure your spot in the tournament.",
      details:
        "Registration form details, required information, and important dates.",
    },
    {
      number: 3,
      title: "Pay",
      description:
        "Complete the payment process to confirm your participation.",
      details: "Payment methods, fees, and confirmation process.",
    },
    {
      number: 4,
      title: "Enjoy",
      description:
        "Now that you're registered and paid, enjoy the competition and good luck!",
      details:
        "The competition schedule, how to join live events, and other resources.",
    },
  ];

  const registerSectionRef = useRef(null);

  const handleRegisterClick = () => {
    // Scroll to the register section when the button is clicked
    if (registerSectionRef.current) {
      registerSectionRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scroll effect
        block: "start", // Align at the start of the div
      });
    }
  };

  return (
    <div>
      <div className="bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat h-[100vh] pt-8 ">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100"></div>

        <div className="relative z-10">
          <Header />
        </div>
        <motion.p
          className="tracking-widest max-md:leading-tight  mt-32 text-[84px] font-extrabold m-auto z-10 max-md:text-[52px] text-center sm:ml-auto sm:mr-8 sm:mt-20"
          style={{
            backgroundImage: 'url("/image.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Compete. Win. Conquer.
        </motion.p>
      </div>

      <Tournament handleRegisterClick={handleRegisterClick} />

      <div className=" flex flex-col xl:h-[100vh] justify-center items-center max-md:my-20">
        <h2 className="text-[70px] font-bold max-md:text-center max-md:text-[40px] bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-flow">
          How it Works
        </h2>
        <div className="py-8 flex flex-wrap justify-center gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
            >
              {/* Card Header */}
              <div className="bg-purple-600 text-white text-center py-4">
                <div className="text-3xl font-bold">{step.number}</div>
                <h3 className="text-xl font-semibold mt-2">{step.title}</h3>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <p className="text-gray-700">{step.description}</p>
                <div className="mt-4 text-gray-600">
                  <p className="text-sm">{step.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={registerSectionRef}
        className="max-w-[90vw] mx-auto mb-24 bg-purple-600 *:text-white p-8 rounded-lg shadow-lg mt-12"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          For Registration
        </h2>

        <p className="text-lg text-center text-gray-600 mb-8">
          For registration or inquiries, you can reach us through the following
          platforms:
        </p>

        <div className="flex justify-center md:space-x-8 max-md:flex-col max-md:gap-4 max-md:items-center *:max-md:w-[200px]">
          {" "}
          {/* <!-- WhatsApp --> */}
          <a
            href="https://wa.me/+9779763497876"
            target="_blank"
            className="flex items-center space-x-3 bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            <i className="bi bi-whatsapp"></i>
            <span className="text-lg font-semibold">WhatsApp</span>
          </a>
          {/* <!-- Facebook --> */}
          <a
            href="https://www.facebook.com/profile.php?id=61570406934706"
            target="_blank"
            className="flex items-center space-x-3 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            <i className="bi bi-facebook"></i>
            <span className="text-lg font-semibold">Facebook</span>
          </a>
          {/* <!-- Instagram --> */}
          <a
            href="https://www.instagram.com/infesporthub/"
            target="_blank"
            className="flex items-center space-x-3 bg-pink-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-300"
          >
            <i className="bi bi-instagram"></i>
            <span className="text-lg font-semibold">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
