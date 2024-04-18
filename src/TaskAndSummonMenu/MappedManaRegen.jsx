import { motion } from "framer-motion";

export default function MappedManaRegen({
  manaActions,
  handleClickerIconSelect,
  menuSelection,
}) {
  return (
    <motion.div className={`actions--container`}>
      {menuSelection === 1 &&
        Object.values(manaActions).map((item) => {
          return (
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: [0, 0, 0.3, 1] }}
              whileHover={{
                boxShadow: "0px 0px 5px 1px black",
                backgroundColor: "rgb(133, 22, 22)",
              }}
              className={`item--container`}
              key={item.name}
              onClick={() => handleClickerIconSelect(item.fileName)}
            >
              <img
                src={`/${item.fileName}.png`}
                alt="error"
                className="item--img"
                draggable={false}
              />
              <div>
                <p>{item.name}</p>
                <p>Action: {item.action}</p>
                <p>Mana Generations: {item.power}</p>
              </div>
            </motion.div>
          );
        })}
    </motion.div>
  );
}
