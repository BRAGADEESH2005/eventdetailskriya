export default function detailsPage() {
  return (
    <div className="max-w-6xl mx-auto p-8 font-sans">
      <header className="flex justify-between items-center font-bold text-lg">
        <span>KRIYA 2025</span>
        <button className="bg-black text-white py-2 px-6">REGISTER</button>
      </header>

      <div className="mt-10 flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-baseline space-x-4">
            <h1 className="text-7xl font-bold">25</h1>
            <div>
              <span className="block font-bold text-lg">FEBRUARY</span>
              <span className="block font-bold text-gray-500">(2025)</span>
            </div>
          </div>
          <p className="font-bold text-lg mt-2">(01) GOLD EVENT</p>
          <h2 className="text-5xl font-bold mt-4">Nextech</h2>
          <p className="text-xl text-gray-600 mt-2">Global Clash of Techno Talents</p>
          <button className="mt-6 bg-black text-white py-2 px-6">LEARN MORE</button>
        </div>

        {/* Right Section */}
        <div className="flex-1 text-right">
          <img src="/vr-event.jpg" alt="VR Event" className="w-full rounded-lg shadow-lg" />
          <div className="mt-6 text-left">
            <h3 className="text-xl font-bold">LIVE* FREE*</h3>
            <p className="text-gray-600 mt-1">🕘 9:30 AM - 10:30 PM</p>
            <p className="mt-2 font-bold">
              Programming Lab <br />
              <span className="text-gray-500">(E - Block)</span>
            </p>
            <p className="mt-2 font-bold">2 - 4 Members</p>
          </div>

          <div className="mt-6 text-left">
            <h3 className="text-xl font-bold">Convenors</h3>
            <p className="mt-2">Arul Kumara BR <br /> 99999 99999</p>
            <p className="mt-2">Arul Kumara BR <br /> 99999 99999</p>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            * Event availability is subject to change
          </p>
        </div>
      </div>
    </div>
  );
}
