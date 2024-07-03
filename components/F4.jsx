"use client";
import { motion } from "framer-motion";

const F4 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, left: "-200px" }}
      whileInView={{ opacity: 1, left: "0px" }}
      transition={{ duration: 0.5 }}
      className="bg-[#1A1A1A] text-white text-left rounded-xl shadow-lg max-w-xs flex flex-col h-96"
    >
      <div className="bg-[#2D2B2B] h-52 m-6 rounded-br-xl rounded-tl-xl"></div>
      <h2 className="text-xl font-semibold mt-8 ml-6">Community</h2>
      <p className="text-gray-400 mr-4 ml-6">
        We fostered a nurturing community ...some more 1 line about community
      </p>
    </motion.div>
  );
};

export default F4;
