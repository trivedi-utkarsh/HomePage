"use client"
import {
  motion
} from "framer-motion";

const F1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, left: '-200px' }}
      whileInView={{ opacity: 1, left: '0px' }}
      transition={{duration:0.5}}
      className="bg-[#1A1A1A] text-white pl-6 pt-6 text-left rounded-xl flex flex-col h-96 max-w-xl">
      <h2 className="text-xl font-semibold mb-whitespace-nowrap">
        Users appreciate X-ACK's intuitive interface
      </h2>

      <p className="text-gray-400 mr">
        An intuitive interface means that users can quickly understand how to
        use the platform without the need for extensive training or guidance.
      </p>
      <div className="bg-[#2D2B2B] h-52 ml-14 rounded-br-xl rounded-tl-xl mt-auto"></div>
    </motion.div>
  );
};

export default F1;
