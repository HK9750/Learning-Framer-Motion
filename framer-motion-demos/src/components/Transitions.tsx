import { motion } from "framer-motion";

const Transitions = () => {
  return (
    <div className="flex gap-36">
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: 60 }} // rotateX: 60, rotateY: 60
        transition={{ duration: 1 }}
      />
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1.5 }} // scaleX: 1.5, scaleY: 1.5
        transition={{ delay: 1, duration: 1 }}
      />
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, skew: 60 }} // skewX: 60, skewY: 60
        transition={{ duration: 1 }}
      />
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 100 }}
        transition={{
          duration: 1,
          ease: "linear", // ease: "easeIn", "easeOut", "easeInOut", "linear"
        }}
      />
    </div>
  );
};
export default Transitions;
