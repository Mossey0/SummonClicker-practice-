import { useEffect, useRef, useState } from "react";
import "./clickerIcon.css";
import { manaActions } from "../TaskAndSummonMenu/taskAndSummonsData.js";
import {
  easeIn,
  motion,
} from "framer-motion";

const iconVariants = {
  initial: {
    y: 0,
    scale: 1,
  },
  animate: {
    y: [-25, 0, -25],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easeIn,
    },
  },
  hover: {
    scale: 1.1,
  },
  whiletap: {
    scale: 1.3,
  },
};

const handleOnClick = (taskSelected, manaActions, currentMana) => {
  currentMana.current += manaActions[`${taskSelected}`].power;
};

export default function ClickerIcon({ taskSelected, currentMana }) {
  const [clickerFloaterArray, setClickerFloater] = useState([]);
  const counter = useRef(0);
  const timerId = useRef(null);

  const addFloaty = (taskSelected, manaActions, setClickerFloater) => {
    counter.current++;
    const currentFloater = {
      id: counter.current,
      path: `./${taskSelected}.png`,
      power: manaActions[`${taskSelected}`].power,
    };
    setClickerFloater((prevArray) => {
      const updatedArray = [...prevArray, currentFloater];
      return updatedArray;
    });
  };

  const removeElement = () => {
    setClickerFloater([]);
  };

  useEffect(() => {
    if (clickerFloaterArray.length > 0) {
      timerId.current = setTimeout(() => {
        removeElement();
        counter.current = 0;
      }, 1000);
    }
    return () => clearTimeout(timerId.current);
  }, [clickerFloaterArray]);

  return (
    <div className="container clicker-icon">
      {taskSelected !== "" && (
        <div>
          <motion.img
            className={`clicker-interactive`}
            src={`./${taskSelected}.png`}
            alt="picture"
            onClick={() => {
              handleOnClick(taskSelected, manaActions, currentMana);
              addFloaty(taskSelected, manaActions, setClickerFloater);
            }}
            variants={iconVariants}
            initial="initial"
            animate="animate"
            whileTap="whiletap"
            whileHover="hover"
            draggable={false}
          />
          <div className="clicker-floater-container relative-container">
            {clickerFloaterArray.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  className={`absolute-container`}
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: 0,
                    scale: [1.2, 1.3, 1.2, 1],
                    y: [-25, -50, -75, -100],
                  }}
                  transition={{ duration: .7 }}
                >
                  <img className="clicker-floater-icon" src={item.path} />
                  <span className="clicker-floater-number">+{item.power}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
