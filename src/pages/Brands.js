import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getCurrentUser, getCampaigns, saveCampaigns } from "../utils/storage";

function Brands() {
  const user = getCurrentUser();

  const [campaigns, setCampaigns] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setCampaigns(getCampaigns());
  }, []);

  // Add Campaign
  const addCampaign = () => {
    if (!title.trim()) return;

    const newCampaign = {
      id: Date.now(),
      brandId: user.id,
      title,
      budget: "₹5000",
      createdAt: new Date().toLocaleDateString(),
    };

    const updated = [...campaigns, newCampaign];
    setCampaigns(updated);
    saveCampaigns(updated);

    setTitle("");
  };

  // Delete Campaign
  const deleteCampaign = (id) => {
    const updated = campaigns.filter((c) => c.id !== id);
    setCampaigns(updated);
    saveCampaigns(updated);
  };

  const myCampaigns = campaigns.filter((c) => c.brandId === user.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white p-10">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-4xl font-bold text-teal-700">
            Welcome, {user.name} 👋
          </h1>
          <p className="text-gray-500 mt-2">
            Manage your campaigns & collaborations easily.
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-4">
          <div className="bg-white shadow-lg px-6 py-4 rounded-xl">
            <h2 className="text-gray-400 text-sm">Campaigns</h2>
            <p className="text-2xl font-bold text-teal-700">
              {myCampaigns.length}
            </p>
          </div>

          <div className="bg-white shadow-lg px-6 py-4 rounded-xl">
            <h2 className="text-gray-400 text-sm">Active Requests</h2>
            <p className="text-2xl font-bold text-teal-700">0</p>
          </div>
        </div>
      </motion.div>

      {/* ADD CAMPAIGN */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-10 bg-white shadow-xl rounded-2xl p-6"
      >
        <h2 className="text-xl font-semibold text-gray-700">
          Create New Campaign 🚀
        </h2>

        <div className="flex gap-3 mt-4">
          <input
            value={title}
            placeholder="Enter Campaign Title..."
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none"
          />

          <button
            onClick={addCampaign}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Add
          </button>
        </div>
      </motion.div>

      {/* CAMPAIGN LIST */}
      <h2 className="mt-12 text-2xl font-bold text-gray-700">
        Your Campaigns 📢
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {myCampaigns.map((c, index) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-2xl p-6 relative"
          >
            <h3 className="text-lg font-bold text-teal-700">{c.title}</h3>

            <p className="text-gray-500 mt-2">
              Budget: <span className="font-semibold">{c.budget}</span>
            </p>

            <p className="text-sm text-gray-400 mt-1">Created: {c.createdAt}</p>

            <button
              onClick={() => deleteCampaign(c.id)}
              className="absolute top-4 right-4 text-red-500 hover:text-red-700"
            >
              ✖
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Brands;
