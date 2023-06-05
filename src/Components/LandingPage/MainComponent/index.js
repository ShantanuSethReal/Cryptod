import React from "react";
import Button from "../../Common/Button/index";
import iphone from "../../../Assets/iphone.png";
import gradient from "../../../Assets/gradient.png";
import { motion } from "framer-motion";
import "./styles.css";

function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1 className="track-crypto-heading" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Track Crypto
        </motion.h1>

        <motion.h1 className="real-time-heading" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Real Time
        </motion.h1>
        <p className="info-text" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }}>
          {" "}
          Track crypto through a public api in real time. Visit the dashboard to do so!
        </p>
        <motion.div className="btn-flex" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.5 }}>
          <Button text={"Dashboard"} link={"dashboard"} />
          <Button text={"Share"} outlined={true} />
        </motion.div>
      </div>
      <div className="phone-container">
        <motion.img
          src={require("../../../Assets/iphone.png")}
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          alt="Iphone...."
        ></motion.img>
        <img src={gradient} className="gradient" alt="gradient"></img>
      </div>
    </div>
  );
}

export default MainComponent;
