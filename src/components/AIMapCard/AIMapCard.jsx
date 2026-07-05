import "./AIMapCard.css";
import { MapPinned, ShieldCheck, Car } from "lucide-react";
import { motion } from "framer-motion";

function AIMapCard() {

  return (

    <div className="map-card">

      <div className="map-header">

        <div>

          <h3>AI Navigation</h3>

          <span>Safest route detected</span>

        </div>

        <MapPinned size={22}/>
      </div>

      <div className="map-area">

        <svg
          viewBox="0 0 320 220"
          className="map-svg"
        >

          <defs>

            <linearGradient
              id="route"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >

              <stop offset="0%" stopColor="#00E5FF"/>

              <stop offset="100%" stopColor="#FF4FD8"/>

            </linearGradient>

          </defs>

          <path

          d="M30 180
             C80 110
             140 140
             180 70
             S270 60
             295 30"

          className="route"

          />

      </svg>

      <motion.div

      className="car"

      animate={{

        offsetDistance:["0%","100%"]

      }}

      transition={{

        repeat:Infinity,

        duration:7,

        ease:"linear"

      }}

      >

      <Car size={20}/>

      </motion.div>

      <div className="pin pin1"/>

      <div className="pin pin2"/>

      <div className="danger"/>

      </div>

      <div className="status-row">

        <div className="status safe">

          <ShieldCheck size={16}/>

          Low Risk

        </div>

        <div className="status">

          💡 Well Lit

        </div>

      </div>

    </div>

  );

}

export default AIMapCard;