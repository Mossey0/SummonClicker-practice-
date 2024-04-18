import "./taskandsummon.css";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  summonsObj,
  manaActions,
} from "/src/TaskAndSummonMenu/taskAndSummonsData.js";
import MappedManaRegen from "./MappedManaRegen";
import MappedSummons from "./MappedSummons";

export default function TaskAndSummon({
  setTaskSelected,
  monsterDataRef,
  currentMana
}) {
  const [menuSelection, setmenuSelection] = useState(1);
  const variant = {
    hover: { backgroundColor: "rgb(133, 22, 22)", cursor: "pointer" },
  };

  const handleClickerIconSelect = (task) => {
    setTaskSelected(task);
  };

  const handleMenuSelection = (selection) => {
    setmenuSelection(selection);
  };

  return (
    <div className="taskandsummon--container">
      <div className="selection-select">
        <motion.h2
          initial={{}}
          transition={{ duration: 0.2 }}
          variants={variant}
          whileHover="hover"
          className="selection-tab"
          onClick={() => handleMenuSelection(1)}
        >
          Tasks
        </motion.h2>
        <motion.h2
          transition={{ duration: 0.2 }}
          variants={variant}
          whileHover="hover"
          className="selection-tab"
          onClick={() => handleMenuSelection(2)}
        >
          Summons
        </motion.h2>
      </div>
      <div className="mapped-wrapper">
        <MappedManaRegen
          className={"manaRegen"}
          manaActions={manaActions}
          handleClickerIconSelect={handleClickerIconSelect}
          menuSelection={menuSelection}
        />
        <MappedSummons
          className={"summons"}
          summonsObj={summonsObj}
          menuSelection={menuSelection}
          monsterDataRef={monsterDataRef}
          currentMana={currentMana}
        />
      </div>
    </div>
  );
}
