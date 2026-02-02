import React from "react";

function InfluencerCard({ influencer, onClick }) {
  return (
    <div
      onClick={() => onClick(influencer)}
      className="min-w-[260px] cursor-pointer bg-white rounded-xl shadow-md p-4 mx-3 hover:scale-105 transition"
    >
      <img
        src={influencer.image}
        alt={influencer.name}
        className="w-full h-40 object-cover rounded-lg"
      />

      <h3 className="font-bold mt-3">{influencer.name}</h3>
      <p className="text-sm text-gray-500">{influencer.niche}</p>

      <div className="flex justify-between text-sm mt-2">
        <span>{influencer.platform}</span>
        <span>{influencer.followers}</span>
      </div>
    </div>
  );
}
export default InfluencerCard;
