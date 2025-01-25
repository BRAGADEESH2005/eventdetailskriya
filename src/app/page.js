"use client";
import NextechEvent from "./detailspage.js";
import { useState } from "react";
export default function Home() {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <>
      <div className="flex min-height-screen">
        {/* Sidebar */}
        <aside className="w-1/5 bg-black text-white p-6 hidden md:block">
          <h1 className="text-2xl font-bold mb-8">Yutira 2025</h1>
          <button className="w-full text-black py-2 rounded-md mb-6">
            Register/Login
          </button>

          <nav>
            <ul className="space-y-4">
              <li className="font-bold">Home</li>
              <li>Events</li>
              <li>Workshops</li>
              <li>Paper Presentations</li>
            </ul>
          </nav>

          <div className="mt-8">
            <h3 className="font-bold text-lg">Workshops</h3>
            <p className="text-gray-400">BIM Workshop</p>
          </div>

          <div className="mt-4">
            <h3 className="font-bold text-lg">Events</h3>
            <p className="text-gray-400">Build Bound Challenge - Elevate Expectations</p>
            <p className="text-gray-400">Cipher Craft: Unlocking Is 456:2000</p>
          </div>

          <div className="mt-4">
            <h3 className="font-bold text-lg">Paper Presentations</h3>
            <p className="text-gray-400">Paper Presentation</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1  p-6 md:p-12 h-full min-h-screen flex flex-col">
          <header className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold">KRIYA 2025</h2>
            <button className="bg-black text-white py-2 px-6 rounded-md">REGISTER</button>
          </header>

          <div className="flex flex-col  lg:flex-row gap-16 flex-grow">
            {/* Left Section */}
            <div className="flex-5 lg:w-4/6">
              <div className="flex justify-end">
                <img
                  src="../../image.png"
                  alt="VR Event"
                  className="w-full lg:w-3/4 rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-6 flex items-center">
                <h1 className="text-7xl font-bold">25</h1>
                <div className="ml-4">
                  <p className="text-lg font-bold">FEBRUARY</p>
                  <p className="text-lg font-bold">(2025)</p>
                </div>
              </div>
              <p className="mt-2 text-lg font-bold">(01) GOLD EVENT</p>
              <h2 className="text-7xl font-bold mt-2">Nextech</h2>
              <p className="text-3xl text-gray-600 mt-2">Global Clash of Techno Talents</p>
              <button
                className="mt-6 bg-black text-white py-2 px-6 rounded-md"
                onClick={toggleDetails}
              >
                {showDetails ? "LEARN LESS" : "LEARN MORE"}
              </button>
            </div>

            {/* Right Section */}
            <div className="flex-1 lg:w-2/6 flex flex-col">
              {/* Top: LIVE | FREE */}
              <div className="rounded-lg mb-auto">
                <h3 className="text-xl font-bold flex items-center justify-between">
                  LIVE* <span className="mx-2">|</span> FREE*
                </h3>
                <p className="text-gray-600 mt-1">🕘 9:30 AM - 10:30 PM</p>
                <p className="text-black mt-2 font-semibold">Programming Lab (E - Block)</p>
                <p className="text-gray-700 mt-1">2 - 4 Members</p>
              </div>

              {/* Bottom: Convenors */}
              <div className="mt-auto 
">
                <h3 className="text-xl font-bold">Convenors</h3>
                <p className="mt-2 font-semibold">Arul Kumara BR <br /> 99999 99999</p>
                <p className="mt-2 font-semibold">Arul Kumara BR <br /> 99999 99999</p>
              </div>
            </div>
          </div>
        </main>
        </div>
       {/* Render NextechEvent Component */}
          {showDetails && <NextechEvent id="next1"/>}
    </>
  );
}