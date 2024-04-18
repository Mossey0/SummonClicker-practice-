import { motion } from "framer-motion";

export default function MappedSummons({
  summonsObj,
  menuSelection,
  monsterDataRef,
  currentMana,
}) {
  const handleBuyingout = (monsterName, summonsObjLocation) => {
    if (currentMana.current >= summonsObjLocation.cost) {
      monsterDataRef.current[monsterName] = [
        monsterDataRef.current[monsterName][0] + 1,
        monsterDataRef.current[monsterName][1] + summonsObjLocation.power,
        monsterDataRef.current[monsterName][2],
      ];
      currentMana.current -= summonsObjLocation.cost;
    }
  };
  return (
    <div className={`actions--container`}>
      {menuSelection === 2 &&
        Object.values(summonsObj).map((item) => {
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 0.3, 1] }}
              whileHover={{
                boxShadow: "0px 0px 5px 1px black",
                backgroundColor: "rgb(133, 22, 22)",
              }}
              whileTap={{
                x: currentMana.current >= item.cost ? "" : [10, 0, -10, 0],
              }}
              className={`item--container`}
              onClick={() => {
                handleBuyingout(item.fileName, summonsObj[item.fileName]);
              }}
            >
              <img
                src={`/${item.fileName}.png`}
                alt="error"
                className="item--img"
                draggable={false}
              />
              <div className="no-select">
                <p>{item.name}</p>
                <p>Use: {item.action}</p>
                <p className="item--span">
                  Victims/s: {item.power} <span>Mana Cost: {item.cost}</span>
                </p>
              </div>
            </motion.div>
          );
        })}
    </div>
  );
}
