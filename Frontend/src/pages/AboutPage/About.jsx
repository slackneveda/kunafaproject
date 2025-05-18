export default function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-neutral-900 text-gray-200 p-8 md:p-16 flex flex-col justify-center items-center text-center">
        <h2 className="text-gray-400 tracking-widest uppercase text-sm mb-6">
          About Us
        </h2>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-relaxed text-gray-100">
          Noor Ahmed
          <br />
          Kunafa House
        </h1>
        <div className="w-24 h-px bg-gray-500 mb-8"></div>
        <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
        Kunafa is a beloved Middle Eastern dessert made with layers of shredded phyllo dough or semolina, filled with sweet cheese or cream, and soaked in fragrant sugar syrup. Known for its irresistible combination of textures and flavors, it’s often garnished with pistachios for an extra touch of richness. A symbol of celebration and hospitality, Kunafa brings people together with every bite!
        </p>
        <button className="border border-gray-500 text-gray-300 px-8 py-3 tracking-widest text-sm hover:bg-gray-800 transition-colors duration-300">
          READ MORE
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-screen">
        <div className="absolute inset-0 bg-black/40"></div>
        <img
          src="/src/assets/pic16.jpg"
          alt="Chef presenting a beautifully plated dish"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

