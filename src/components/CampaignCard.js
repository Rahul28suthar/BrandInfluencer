import React from "react";

function CampaignCard({ brand, category, title, desc, platform }) {
  return (
    <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold">{brand}</h3>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
        <span className="text-sm px-3 py-1 rounded-full bg-gray-100">
          {platform}
        </span>
      </div>

      <h2 className="font-semibold text-lg mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{desc}</p>

      <div className="flex gap-2">
        <span className="text-xs px-3 py-1 rounded-full bg-teal-100 text-teal-700">
          {category}
        </span>
        <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
          active
        </span>
      </div>
    </div>
  );
}
export default CampaignCard;
