"use client";
import NextechEvent from "./detailspage.js";
import { useState,useRef,useEffect } from "react";
export default function Home() {
  const [showDetails, setShowDetails] = useState(false);
  const geeksForGeeksRef = useRef(null);
  useEffect(() => {
    if (showDetails && geeksForGeeksRef.current) {
      geeksForGeeksRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  })
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
        <main className="flex-1  p-4 md:p-10 h-full min-h-screen flex flex-col">
        <header className="flex justify-between items-center mb-4">
  <h2 className="text-2xl font-bold">KRIYA 2025</h2>
</header>
{/* Early Bird Scrolling Section */}
<div className="bg-black py-1 overflow-hidden w-full mb-2">
  <div className="early-bird-text text-sm">
    EARLY BIRD REGISTRATIONS OPEN NOW! REGISTER SOON!
  </div>
</div>




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
              <div className="mt-2 flex items-center">  {/* Reduced from mt-4 */}
  <h1 className="text-5xl font-bold">25</h1>
  <div className="ml-2">
    <p className="text-sm font-bold">FEBRUARY</p>
    <p className="text-sm font-bold">(2025)</p>
  </div>
</div>
<p className="mt-1 text-lg font-bold">(01) GOLD EVENT</p>  {/* Reduced from mt-2 */}
<h2 className="text-5xl font-bold mt-1">Nextech</h2>  {/* Reduced from mt-2 */}

              <p className="text-2xl text-gray-600 mt-2">Global Clash of Techno Talents</p>
              <button
                className="mt-4 bg-black text-white py-2 px-6 rounded-md"
                onClick={toggleDetails}
              >
                {showDetails ? "LEARN LESS" : "LEARN MORE"}
              </button>
            <button className="bg-black text-white ml-2 py-2 px-6 rounded-md">REGISTER</button>

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
          {showDetails && <NextechEvent  ref={geeksForGeeksRef} id="next1"/>}
    </>
  );
}