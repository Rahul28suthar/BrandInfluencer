import React from "react";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Find Your Perfect Campaign</h1>
      <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
        Browse through hundreds of collaboration opportunities from top brands.
        Filter by category, platform, and more.
      </p>

      <div className="max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search campaigns, brands, or keywords..."
          className="w-full px-6 py-4 rounded-xl text-gray-800 focus:outline-none"
        />
      </div>
    </section>
  );
}
export default Hero;
