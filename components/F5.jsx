"use client";
import { motion } from "framer-motion";

const F5 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, left: "-200px" }}
      whileInView={{ opacity: 1, left: "0px" }}
      transition={{ duration: 0.5 }}
      className="bg-[#1A1A1A] text-white pl-6 pt-6 text-left rounded-xl shadow-lg max-w-xs flex flex-col h-96"
    >
      <h2 className="text-xl font-semibold mb-1">Gamified UI elements</h2>
      <p className="text-gray-400 mr-4">
        Info about earning badges and respect from players and machines.
        Gamified features
      </p>
      <div className="bg-[#2D2B2B] h-48 ml-8 rounded-br-xl rounded-tl-xl mt-auto"></div>
    </motion.div>
  );
};

export default F5;
