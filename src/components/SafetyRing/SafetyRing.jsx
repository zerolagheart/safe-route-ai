import "./SafetyRing.css";
import { motion } from "framer-motion";

function SafetyRing() {

  const score = 92;

  const circumference = 2 * Math.PI * 90;

  const offset =
    circumference - (score / 100) * circumference;

  return (

    <div className="safety-ring-container">

      <svg
        width="220"
        height="220"
        className="ring-svg"
      >

        <defs>

          <linearGradient
            id="ringGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >

            <stop offset="0%" stopColor="#00E5FF"/>

            <stop offset="50%" stopColor="#8B5CF6"/>

            <stop offset="100%" stopColor="#FF4FD8"/>

          </linearGradient>

        </defs>

        <circle

          cx="110"

          cy="110"

          r="90"

          className="ring-bg"

        />

        <motion.circle

          cx="110"

          cy="110"

          r="90"

          className="ring-progress"

          strokeDasharray={circumference}

          initial={{

            strokeDashoffset:circumference

          }}

          animate={{

            strokeDashoffset:offset

          }}

          transition={{

            duration:2,

            ease:"easeOut"

          }}

        />

      </svg>

      <div className="ring-content">

        <h1>{score}</h1>

        <span>SAFE</span>

      </div>

    </div>

  );

}

export default SafetyRing;