import React from "react";

function InfluencerModal({ influencer, onClose }) {
  if (!influencer) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          ✖
        </button>

        <img
          src={influencer.image}
          alt={influencer.name}
          className="w-full h-52 object-cover rounded-xl mb-4"
        />

        <h2 className="text-2xl font-bold">{influencer.name}</h2>
        <p className="text-gray-500">{influencer.niche}</p>

        <p className="mt-3 text-sm text-gray-600">{influencer.bio}</p>

        <div className="flex justify-between mt-4 text-sm">
          <span>{influencer.platform}</span>
          <span>{influencer.followers} followers</span>
        </div>
      </div>
    </div>
  );
}
export default InfluencerModal;
