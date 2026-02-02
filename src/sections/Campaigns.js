import CampaignCard from "../components/CampaignCard";

const campaigns = [
  {
    brand: "TechFlow",
    category: "Technology",
    title: "Launch our new productivity app",
    desc: "We’re launching a revolutionary productivity app and need tech-savvy influencers.",
    platform: "YouTube",
  },
  {
    brand: "GreenLife",
    category: "Lifestyle",
    title: "Sustainable living campaign",
    desc: "Promote eco-friendly products and sustainable lifestyle choices.",
    platform: "Instagram",
  },
  {
    brand: "StyleHub",
    category: "Fashion",
    title: "Spring collection showcase",
    desc: "Looking for fashion-forward creators for our spring launch.",
    platform: "TikTok",
  },
];

function Campaigns() {
  return (
    <section className="px-10 py-12">
      <div className="flex justify-between items-center mb-6">
        <button className="border px-4 py-2 rounded-lg">Filters</button>
        <p className="text-gray-600">{campaigns.length} campaigns found</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {campaigns.map((c, i) => (
          <CampaignCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}
export default Campaigns;
