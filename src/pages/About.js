import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="bg-[#020617] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent"
        >
          We Don’t Connect Brands.
          <br /> We Create Movements.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 max-w-3xl text-lg text-gray-300"
        >
          Collabo is where brands meet influence, creativity meets strategy, and
          collaborations turn into impact.
        </motion.p>
      </section>

      {/* STORY SECTION */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Collabo Exists</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Traditional influencer marketing is broken. Endless emails,
              unclear pricing, fake engagement, and zero transparency.
              <br />
              <br />
              We built Collabo to flip the system — a clean, creator-first
              platform where brands and influencers collaborate with clarity,
              trust, and real results.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl h-80 shadow-2xl"
          />
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 bg-[#020617]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { value: "10K+", label: "Influencers" },
            { value: "2K+", label: "Brands" },
            { value: "50K+", label: "Collaborations" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <h3 className="text-5xl font-extrabold text-teal-400 group-hover:scale-110 transition">
                {item.value}
              </h3>
              <p className="mt-3 text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
            We envision a future where creators are valued as partners, not
            placements. Where brands don’t chase reach, but build communities.
            Collabo is not a marketplace — it’s an ecosystem.
          </p>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-8"
        >
          Ready to Collaborate?
        </motion.h2>
        <Link to="/signup">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-500 text-black px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-teal-400 transition"
          >
            Join Collabo
          </motion.button>
        </Link>
      </section>
    </div>
  );
}
