// import React, { useState } from "react";
// import { Phone, MapPin, Clock, Mail } from "lucide-react";
// import { motion } from "framer-motion";

// const contactItems = [
//   {
//     Icon: Phone,
//     title: "Phone",
//     content: (
//       <>
//         <a href="tel:+12145974922" className="text-gray-300 hover:underline" title="Call now">
//           +1 (214) 597-4922
//         </a>
//         <p className="text-base py-2">Call or Text anytime</p>
//       </>
//     ),
//     color: "bg-blue-600",
//   },
//   {
//     Icon: MapPin,
//     title: "Location",
//     content: (
//       <>
//         <a
//           href="https://maps.app.goo.gl/1HGyPV5X8BBshuXCA"
//           className="text-gray-300 hover:underline"
//           title="Open in Google Maps"
//         >
//           Google Maps
//         </a>
//         <p className="py-2">
//           1234 Auto Repair Lane
//           <br />
//           Dallas, TX 75201
//         </p>
//       </>
//     ),
//     color: "bg-green-600",
//   },
//   {
//     Icon: Clock,
//     title: "Hours",
//     content: (
//       <div className="space-y-1">
//         <p>Mon - Sat: 9:00 - 5:00</p>
//         <p>Sunday: Closed</p>
//       </div>
//     ),
//     color: "bg-purple-600",
//   },
//   {
//     Icon: Mail,
//     title: "Email",
//     content: (
//       <>
//         <a
//           href="mailto:tummayogesh1433@gmail.com"
//           className="text-gray-300 hover:underline"
//           title="Send an email"
//         >
//           tummayogesh1433@gmail.com
//         </a>
//         <p className="text-sm text-gray-300 mt-2">
//           We'll respond within 24 hours
//         </p>
//       </>
//     ),
//     color: "bg-red-600",
//   },
// ];

// const cardVariants = {
//   offscreen: { y: 100, opacity: 0 },
//   onscreen: {
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", bounce: 0.3, duration: 0.8 },
//   },
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     message: "",
//     file: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const sendWhatsApp = () => {
//     const { firstName, lastName, phone, email, message } = formData;
//     let text = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
//     const url = `https://wa.me/916304544588?text=${encodeURIComponent(text)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <section id="contact" className="py-20 bg-slate-900 text-white">
//       <div className="container mx-auto px-6 lg:px-12">
//         <h2 className="text-5xl font-extrabold mb-4 text-center">
//           Get In Touch
//         </h2>

//         {/* Contact Form */}
//         <motion.div
//           className="mt-16 bg-gray-800 p-8 rounded-xl shadow-lg max-w-4xl mx-auto space-y-6"
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h4 className="text-2xl font-bold text-center mb-4">
//             Send Us a Message
//           </h4>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1" htmlFor="firstName">
//                 First Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="firstName"
//                 name="firstName"
//                 type="text"
//                 required
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="w-full bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1" htmlFor="lastName">
//                 Last Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="lastName"
//                 name="lastName"
//                 type="text"
//                 required
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="w-full bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1" htmlFor="phone">
//                 Phone <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 required
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1" htmlFor="email">
//                 E-mail <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1" htmlFor="message">
//               Message <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows={4}
//               required
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1" htmlFor="file">
//               Attach a File:
//             </label>
//             <input
//               id="file"
//               name="file"
//               type="file"
//               onChange={handleChange}
//               className="w-full text-sm text-gray-300"
//             />
//           </div>
//           <div className="flex justify-center space-x-4">
//             <a
//               href="mailto:sumanthbapatla07@gmail.com"
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
//             >
//               Send Email
//             </a>
//             <button
//               type="button"
//               onClick={sendWhatsApp}
//               className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
//             >
//               Send WhatsApp
//             </button>
//           </div>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
//           {/* Left: contact cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {contactItems.map(({ Icon, title, content, color }, idx) => (
//               <motion.div
//                 key={idx}
//                 className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 cursor-pointer"
//                 variants={cardVariants}
//                 initial="offscreen"
//                 whileInView="onscreen"
//                 viewport={{ once: true, amount: 0.3 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div
//                   className={`w-14 h-14 ${color} rounded-full flex items-center justify-center mx-auto mb-3`}
//                 >
//                   <Icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-lg font-semibold mb-1">{title}</h3>
//                 <div className="text-gray-300 text-sm">{content}</div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Right: Google Map */}
//           <motion.div
//             className="rounded-xl overflow-hidden shadow-lg"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             <iframe
//               title="CarNation Elite - Dallas"
//               src="https://www.google.com/maps?q=CarNation+Elite+Dallas+Auto+Repair+Service&output=embed"
//               width="100%"
//               height="100%"
//               className="min-h-[300px] lg:min-h-[480px]"
//               allowFullScreen={false}
//               loading="lazy"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { motion } from "framer-motion";

const contactItems = [
  {
    Icon: Phone,
    title: "Phone",
    content: (
      <>
        <a href="tel:+12145974922" className="text-gray-300 hover:underline" title="Call now">
          +1 (214) 597-4922
        </a>
        <p className="text-base py-2">Call or Text anytime</p>
      </>
    ),
    color: "bg-blue-600",
  },
  {
    Icon: MapPin,
    title: "Location",
    content: (
      <>
        <a
          href="https://maps.app.goo.gl/1HGyPV5X8BBshuXCA"
          className="text-gray-300 hover:underline"
          title="Open in Google Maps"
        >
          Google Maps
        </a>
        <p className="py-2">
          1234 Auto Repair Lane
          <br />
          Dallas, TX 75201
        </p>
      </>
    ),
    color: "bg-green-600",
  },
  {
    Icon: Clock,
    title: "Hours",
    content: (
      <div className="space-y-1">
        <p>Mon - Sat: 9:00 - 5:00</p>
        <p>Sunday: Closed</p>
      </div>
    ),
    color: "bg-purple-600",
  },
  {
    Icon: Mail,
    title: "Email",
    content: (
      <>
      {/* change with clients mail */}
        <a
          href="mailto:tummayogesh1433@gmail.com"
          className="text-gray-300 hover:underline"
          title="Send an email"
        >
          tummayogesh1433@gmail.com
        </a>
        <p className="text-sm text-gray-300 mt-2">We'll respond within 24 hours</p>
      </>
    ),
    color: "bg-red-600",
  },
];

const cardVariants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const sendWhatsApp = () => {
    const { firstName, lastName, phone, email, message } = formData;
    const text = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/916304544588?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const sendEmail = () => {
    const { firstName, lastName, phone, email, message } = formData;
    const subject = encodeURIComponent("Hello CarNation Elite");
    const body = encodeURIComponent(
      `First Name: ${firstName}\n` +
      `Last Name: ${lastName}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    );

    // Change the email address to your client's email
    const mailtoLink = `mailto:sumanthbapatla07@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-extrabold mb-4 text-center">Get In Touch</h2>

        <motion.div
          className="mt-16 bg-gray-800 p-8 rounded-xl shadow-lg max-w-4xl mx-auto space-y-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold text-center mb-4">Send Us a Message</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name <span className="text-red-500">*</span></label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name <span className="text-red-500">*</span></label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone <span className="text-red-500">*</span></label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail <span className="text-red-500">*</span></label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message <span className="text-red-500">*</span></label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="file" className="block text-sm font-medium mb-1">Attach a File:</label>
            <input
              id="file"
              name="file"
              type="file"
              onChange={handleChange}
              className="w-full text-sm text-gray-300"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={sendEmail}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Send Email
            </button>
            <button
              type="button"
              onClick={sendWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Send WhatsApp
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactItems.map(({ Icon, title, content, color }, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 cursor-pointer"
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-14 h-14 ${color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <div className="text-gray-300 text-sm">{content}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <iframe
              title="CarNation Elite - Dallas"
              src="https://www.google.com/maps?q=CarNation+Elite+Dallas+Auto+Repair+Service&output=embed"
              width="100%"
              height="100%"
              className="min-h-[300px] lg:min-h-[480px]"
              allowFullScreen={false}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
