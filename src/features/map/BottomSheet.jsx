import "./BottomSheet.css";
import { motion } from "framer-motion";

function BottomSheet({ data }) {
  return (
    <motion.div
      className="bottom-sheet"
      drag="y"
      dragConstraints={{
        top: -320,
        bottom: 0,
      }}
      dragElastic={0.12}
      initial={{ y: 250 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className="drag-bar"></div>

      <h2>AI Route Analysis</h2>

      <div className="row">
        <span>Nearest Incident</span>
        <strong>{data.nearest}</strong>
      </div>

      <div className="row">
        <span>Area Risk</span>
        <strong>{data.risk}</strong>
      </div>

      <div className="row">
        <span>Recommended</span>
        <strong>{data.recommendation}</strong>
      </div>

      <div className="row">
        <span>Confidence</span>
        <strong>{data.confidence}%</strong>
      </div>

      <div className="row">
        <span>AI Prediction</span>
        <strong>
          {data.score > 80 ? "Very Safe" : "Proceed Carefully"}
        </strong>
      </div>

    </motion.div>
  );
}

export default BottomSheet;