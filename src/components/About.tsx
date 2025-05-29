import { Award, Users, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

// we can add more stats here
const stats = [
  { icon: Award, number: "3+", label: "Years Experience" },
  { icon: Users, number: "500+", label: "Happy Customers" },
  { icon: Clock, number: "24hr", label: "Quick Turnaround" },
  { icon: Shield, number: "100%", label: "Satisfaction Guaranteed" },
];

// we can add more team members here
const team = [
  {
    name: "Sam",
    title: "Founder",
    specialty: "+1 (214) 597-4922",
    image: "/images/car1.jpg",
  },
];

const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
  navigator.userAgent
);

const TARGET_NUMBER = "12145974922";
const DEFAULT_MESSAGE =
  "Hi Sam, I have some questions about your car repair and maintenance services.";

// Dynamic WhatsApp URL
const waBase = isMobile ? "whatsapp://send" : "https://web.whatsapp.com/send";
const waLink = `${waBase}?phone=${TARGET_NUMBER}&text=${encodeURIComponent(
  DEFAULT_MESSAGE
)}`;

const About = () => (
  <section
    id="about"
    className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white"
  >
    <div className="container mx-auto px-6">
      {/* Header & Stats */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-extrabold text-pink-600 py-8">
            Why Choose CarNation Elite?
          </h2>
          <p className="text-lg leading-relaxed">
            At our premier car service center, we combine honesty, exceptional skill, and unmatched speed making us the trusted choice for people across Dallas. Your vehicle
            represents freedom, value, and peace of mind, and we treat it that way.
          </p>
          <p className="text-lg leading-relaxed">
            Driven by quality, powered by trust, and built for efficiency, our expert technicians deliver dealership-level service without the high cost. 
            As European car specialists, we get you back on the road quickly—with zero compromises on performance or reliability.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center"
              >
                <stat.icon className="w-10 h-10 text-purple-500 mb-3" />
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image with purple bordered frame & hover */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.03, rotateZ: 3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-600/50 ring-4 ring-purple-500/30"
        >
          <img
            src="/images/elite.png"
            alt="Modern auto repair facility"
            className="w-full h-96 object-cover"
          />
          
        </motion.div>
      </div>

      {/* Team Section (Styled Like Stats) */}

      {/* for more team members, we can add more objects to the team array */}
      <div className="mt-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-pink-600"
        >
          Meet Our Expert Team
        </motion.h3>

        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid gap-8 md:grid-cols-3"
        > */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className={`
    grid gap-8
    ${team.length === 1 ? "grid-cols-1 justify-items-center" : "md:grid-cols-3"}
  `}
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <span className="text-2xl font-bold text-white">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                  )}
                </span>
              </div>
              <h4 className="text-xl font-semibold mb-1 text-white">
                {member.name}
              </h4>
              <p className="text-purple-500 font-medium mb-2">{member.title}</p>
              <p className="text-sm text-gray-300"></p>

              <a
                href={waLink}
                target="_blank"
                title="Contact us on WhatsApp"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
              >
                <FaWhatsapp className="text-green-500" size={20} />
                <span className="font-medium text-cyan-200 py-4">
                  Contact : Chat with me!
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;