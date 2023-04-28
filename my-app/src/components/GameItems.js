import "./GameItems.js";

const Game = () => {
  const gameTitle = "Battelfield V";
  const platform = "XBOX";
  const gameDeveloper = "EA Digital Illusion CE";
  const gameSize = "64 GB";
  const gameGender = "Shooter FPS";

  return (
    <div className="game-items-container">
      <h2>{gameTitle}</h2>
      <h2>{platform}</h2>
      <h2>{gameDeveloper}</h2>
      <h2>{gameSize}</h2>
      <h2>{gameGender}</h2>
    </div>
  );
};
export default Game;
