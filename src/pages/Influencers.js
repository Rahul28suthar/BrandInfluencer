import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  getCampaigns,
  getCurrentUser,
  getRequests,
  saveRequests,
} from "../utils/storage";

function Influencers() {
  const user = getCurrentUser();
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    setCampaigns(getCampaigns());
  }, []);

  // Request Collaboration
  const sendRequest = (campaignId) => {
    let requests = getRequests();

    const newRequest = {
      id: Date.now(),
      campaignId,
      influencerId: user.id,
      status: "Pending",
    };

    requests.push(newRequest);
    saveRequests(requests);

    alert("Collaboration Request Sent 🚀");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-teal-50 p-10">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold text-teal-700">
          Welcome, {user.name} 🌟
        </h1>
        <p className="text-gray-500 mt-2">
          Explore campaigns and collaborate with brands.
        </p>
      </motion.div>

      {/* CAMPAIGNS */}
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Available Campaigns 💼
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((c, index) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-teal-700">{c.title}</h3>

            <p className="text-gray-500 mt-2">
              Budget: <span className="font-semibold">{c.budget}</span>
            </p>

            <button
              onClick={() => sendRequest(c.id)}
              className="mt-4 w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-xl transition"
            >
              Request Collaboration
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Influencers;
