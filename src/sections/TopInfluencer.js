import { useState } from "react";
import influencers from "../data/influencer";
import InfluencerCard from "../components/InfluencerCard";
import InfluencerModal from "../components/InfluencerModal";

export default function TopInfluencers() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10">
        🌟 Top Influencers
      </h2>

      {/* Scrolling Wrapper */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
          {[...influencers, ...influencers].map((inf, index) => (
            <InfluencerCard
              key={index}
              influencer={inf}
              onClick={setSelected}
            />
          ))}
        </div>
      </div>

      <InfluencerModal
        influencer={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
