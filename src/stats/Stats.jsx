import "./stat-styles.css";
import MonsterMap from "./MonsterMap";

export default function Stats({ monsterDataRef, testDeath }) {
  const monsterDataRefArray = Object.values(monsterDataRef.current);

  return (
    <div className="game-container">
      <div className="stats-container">
        <h2 className="stats-header">Stats</h2>
        <div className="stat-number-container">
          <div className="stats-screen">
            <p className="">{testDeath()} Deaths/s</p>
          </div>
          <div className="monster-stats">
            {monsterDataRefArray.map((monster, index) => {
              return <MonsterMap key={index} monster={monster} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
