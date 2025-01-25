"use client";
import React, { useState } from 'react';

export default function NextechEvent({ref}) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="flex min-height-100vh " ref={ref}>
            {/* Sidebar */}
            <aside className="w-[19.18rem] bg-black text-xs text-white p-6 hidden md:block">
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
    <div className="w-full p-8 bg-gradient-to-r from-[#E3FEFE] to-[#ffffff] shadow-md text-black">
      
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div>
          <h1 className="text-sm font-bold">KRIYA 2025</h1>
          <h2 className="text-lg font-bold mt-2">(01) GOLD EVENT ' </h2>
          <h3 className="text-5xl font-bold mt-1">Nextech</h3>
        </div>

        <div className="text-3xl font-bold lg:text-right sm:text-left flex flex-col items-end lg:mt-[-1rem]">
        <div className="justify-start lg:justify-center">
        <button className="bg-black text-white mb-2 mr-40 py-1 px-4 text-sm rounded-md " onClick={() => setShowVideo(true)}>
          DEMO VIDEO
        </button>
        </div>
          <div className="flex items-center sm:mr-8=10 xl:text-right sm:text-left sm:mt-0 mt-2 mr-20">
            
            <span className="text-6xl sm:text-left font-bold mr-6">24</span>
            <div className="sm:text-left leading-tight sm:mr-35">
              <p className="text-xl sm: font-bold">FEBRUARY</p>
              <p className="text-lg font-bold">(2025)</p>
            </div>
          </div>
          <div className="mt-1 lg:flex items-center text-sm font-bold">
          <p className="sm:mt-2 mt-2 mr-10 sm:mr-0 sm:mt-0 sm:text-left block">PROGRAMMING LAB ( E - BLOCK )</p>
<p className="  mt-2 sm:ml-3 sm:mr-3 block">2 - 4 MEMBERS</p>
<p className=" sm:mt-2 mt-2 sm:mt-0 block">9:30am - 10:30pm</p>

          </div>
          </div>
    
      </div>

      <p className="text-sm mt-1 text-gray-700 border-t pt-4">
        "NexTech invites students to a one-day hackathon focusing on Smart Campus Solutions. Participants engage in challenges spanning Smart Parking, Enhanced Campus Resources, Sustainable Operations, and more."
        NexTech invites students to a one-day hackathon focusing on Smart Campus Solutions. Participants engage in challenges spanning Smart Parking, Enhanced Campus Resources, Sustainable Operations, and more.
      </p>

      {/* Flex container for Rounds and Convenors */}
      <div className="mt-4 flex flex-col lg:flex-row gap-12">
        {/* Rounds Section */}
        <div className="w-full lg:w-4/5">
          <div className="flex items-center mb-6">
            <h4 className="text-6xl font-bold mr-4">1</h4>
            <div>
              <h5 className="text-sm font-bold">ROUND 1</h5>
              <p className="italic">("Brain Storm Blitz")</p>
            </div>
          </div>
          <p className="text-sm mt-[-1rem] text-justify text-gray-700">
            NexTech Hackathon starts with a 1.5-hour ideation sprint, generating innovative solutions Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ce in challenges spanning Smart Parking, Enhanced Campus Resources, Sustainable Operations, and more.
          </p>

          <div className="flex items-center mt-8">
            <h4 className="text-6xl font-bold mr-4">2</h4>
            <div>
              <h5 className="text-lg font-bold">ROUND 2</h5>
              <p className="italic">("Brain Storm Blitz")</p>
            </div>
          </div>
          <p className="text-sm mt-2 text-justify text-gray-700">
          During the final round, participants will present their well-prepared prototypes Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the induLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting iNexTech invites students to a one-day hackathon focusing on Smar            During the final round, participants will present their well-prepared prototypes Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the induLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting iNexTech invites students to a one-day hackathon focusing on Smar            During the final round, participants will present their well-prepared prototypes Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the induLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting iNexTech invites students to a one-day hackathon focusing on Smar            During the final round, participants will present their well-prepared prototypes Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the induLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting iNexTech invites students to a one-day hackathon focusing on Smar            During the final round, participants will present their well-prepared prototypes Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the induLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting iNexTech invites students to a one-day hackathon focusing on Smart Campus Solutions. Participants engage in challenges spanning Smart Parking, Enhanced Campus Resourc
          </p>
        </div>

        {/* Convenors Section (takes 20% width on larger screens) */}
        <div className="w-full lg:w-2/5 xl:border-l sm:border:0 xl:pl-8 sm:pl-1 xl:mt-1 sm:mt-[-2rem]">
          <p className="font-bold sm:text-left ">■ Note ■</p>
          <p className="text-gray-700  text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stanNexTech invites students to a one-day hackathon focusing on Smart Campus           Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stanNexTech invites students to a one-day hackathon focusing on Smart Campus           Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stanNexTech invites students to a one-day hackathon focusing on Smart Campus Solutions. Participants engage in challenges spanning Smart Parking, En
          </p>
          <div className="sm:text-left mt-4">
            <h6 className="font-bold">■ Convenors</h6>
            <p>Arul Kumara BR</p>
            <p>99999 99999</p>
            <p>Arul Kumara BR</p>
            <p>99999 99999</p>
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative w-full max-w-2xl">
          <iframe
    className="w-full h-[400px] rounded-lg"
    src="https://www.youtube.com/embed/hq3yfQnllfQ"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>            <button
              className="absolute top-2 right-2 bg-black text-white px-2 py-0.5 rounded-full"
              onClick={() => setShowVideo(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      <div className="flex mt-2 ml-[-0.2rem]">
        <button className="bg-black text-white py-1 px-3 text-sm rounded-md">
          REGISTER
        </button>
      </div>
      
    </div>
    </div>
  );
}


