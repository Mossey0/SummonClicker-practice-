import { useEffect, useRef, useState } from "react";
import ClickerIcon from "./ClickerIcon/ClickerIcon";
import TaskAndSummon from "./TaskAndSummonMenu/TaskAndSummonMenu";
import "./App.css";
import Stats from "./stats/Stats";

export default function App() {
  const [taskSelected, setTaskSelected] = useState("grimoire");
  const [mana, setMana] = useState(0);
  const [deaths, setDeaths] = useState(0);

  const currentMana = useRef(mana);
  const intervalIDForMana = useRef(null);
  const currentDeaths = useRef(deaths);

  const monsterDataRef = useRef({
    spider: [0, 0, "Giant Spiders"],
    skull: [0, 0, "Animated Skeletons"],
    zombie: [0, 0, "Raised Zombies"],
    mummy: [0, 0, "Mummies"],
    ghost: [0, 0, "Lost Souls"],
    werewolf: [0, 0, "Werewolves"],
    frankenstein: [0, 0, "Frankensteins"],
    swampmonster: [0, 0, "Swamp Monsters"],
    witch: [0, 0, "Witches"],
    vampire: [0, 0, "Vampires"],
    dracula: [0, 0, "Draculas"],
    devil: [0, 0, "Devils"],
    death: [0, 0, "Death"],
  });

  const testDeath = () => {
    const totalMonsters = Object.values(monsterDataRef.current).reduce(
      (a, b) => a + b[1],
      0
    );
    return totalMonsters;
  };

  useEffect(() => {
    intervalIDForMana.current = setInterval(() => {
      currentMana.current++;
      currentDeaths.current += 12;
      setDeaths((currentDeaths.current += testDeath()));
      setMana(currentMana.current);
    }, 3000);

    return () => {
      clearInterval(intervalIDForMana.current);
    };
  }, []);

  return (
    <>
      <div className="game-container">
        <div className="header">
          <div>Mana: {mana}</div>
          <div>Deaths: {deaths}</div>
        </div>
        <div className="gameplay">
          <ClickerIcon taskSelected={taskSelected} currentMana={currentMana} />
          <TaskAndSummon
            setTaskSelected={setTaskSelected}
            monsterDataRef={monsterDataRef}
            currentMana={currentMana}
          />
        </div>
      </div>
      <Stats monsterDataRef={monsterDataRef} testDeath={testDeath} />
    </>
  );
}
