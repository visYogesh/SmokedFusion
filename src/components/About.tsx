// import { Card, CardContent } from "@/components/ui/card";
// import { Award, Users, Clock, Shield } from "lucide-react";

// const About = () => {
//   const stats = [
//     { icon: Award, number: "10+", label: "Years Experience" },
//     { icon: Users, number: "500+", label: "Happy Customers" },
//     { icon: Clock, number: "24hr", label: "Quick Turnaround" },
//     { icon: Shield, number: "100%", label: "Satisfaction Guaranteed" }
//   ];

//   const team = [
//     {
//       name: "Mike Rodriguez",
//       title: "Master Technician & Owner",
//       experience: "15+ years",
//       specialty: "Luxury European vehicles"
//     },
//     {
//       name: "Sarah Chen",
//       title: "Lead Diagnostic Specialist",
//       experience: "12+ years",
//       specialty: "Engine diagnostics & electrical"
//     },
//     {
//       name: "David Thompson",
//       title: "Transmission Expert",
//       experience: "10+ years",
//       specialty: "Manual & automatic transmissions"
//     }
//   ];

//   return (
//     <section id="about" className="py-20 bg-gradient-to-br from-slate-800  to-blue-900">
//       <div className="container mx-auto px-4 my-8">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-4xl font-bold text-purple-600 mb-6">
//                 Why Choose CarNation Elite?
//               </h2>
//               <p className="text-lg text-purple-600 leading-relaxed mb-6">
//                 Founded on the principles of honesty, quality, and speed, CarNation Elite has become
//                 Dallas's premier destination for automotive excellence. We understand that your vehicle
//                 is more than transportation—it's your freedom, your investment, and your peace of mind.
//               </p>
//               <p className="text-lg text-purple-600 leading-relaxed">
//                 Our state-of-the-art facility combines cutting-edge diagnostic technology with
//                 old-school customer service values. Every repair comes with our guarantee of quality
//                 and transparency.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-6 ">
//               {stats.map((stat, index) => (
//                 // <div key={index} className="text-center p-4 bg-red-50 rounded-lg">
//                 <div key={index} className="text-center p-4 bg-gray-500 rounded-lg">
//                   <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//                   <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
//                   <div className="text-sm text-">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="space-y-8">
//             <img
//               src="images/elite.png"
//               alt="Modern auto repair facility"
//               className="w-full h-80 object-cover rounded-2xl shadow-lg"
//             />
//           </div>
//         </div>

//         <div className="mt-20">
//           <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
//             Meet Our Expert Team
//           </h3>

//           <div className="grid md:grid-cols-3 gap-8">
//             {team.map((member, index) => (
//               <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
//                 <CardContent className="p-8">
//                   <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center">
//                     <span className="text-2xl font-bold text-white">
//                       {member.name.split(' ').map(n => n[0]).join('')}
//                     </span>
//                   </div>
//                   <h4 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h4>
//                   <p className="text-blue-600 font-semibold mb-2">{member.title}</p>
//                   <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
//                   <p className="text-sm text-gray-700">Specializes in {member.specialty}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

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

const About = () => (
  <section
    id="about"
    className="py-24 bg-gradient-to-br bg-slate-900 text-white"
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
          <h2 className="text-5xl font-extrabold text-purple-400 py-8">
            Why Choose CarNation Elite?
          </h2>
          <p className="text-lg leading-relaxed">
            We blend honesty, top-tier skill, and speed: Dallas's go-to for
            automotive excellence. Your vehicle is freedom, an investment, and
            peace of mind.
          </p>
          <p className="text-lg leading-relaxed">
            Driven by quality, powered by trust, and built on speed. European
            car specialists providing dealership-level service without the cost.
            We get you back on the road fast—with zero compromises.
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
                <stat.icon className="w-10 h-10 text-purple-300 mb-3" />
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
          className="text-4xl font-bold text-center mb-12 text-purple-400"
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
              <p className="text-purple-300 font-medium mb-2">{member.title}</p>
              <p className="text-sm text-gray-300"></p>
              <a
                href="https://wa.me/12145974922"
                target="_blank"
                title="Contact us on WhatsApp"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
              >
                <FaWhatsapp className="text-green-500" size={20} />
                <span className="font-medium text-cyan-200">
                  Contact : {member.specialty}
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
