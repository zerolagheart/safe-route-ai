import "./AILoader.css";
import { motion } from "framer-motion";

function AILoader({ loading }) {
  if (!loading) return null;

  return (
    <motion.div
      className="ai-loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        className="loader-circle"
      />

      <h2>AI Route Analysis</h2>

      <p>Scanning nearby incidents...</p>

      <div className="progress">
        <motion.div
          className="progress-bar"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3 }}
        />
      </div>
    </motion.div>
  );
}

export default AILoader;