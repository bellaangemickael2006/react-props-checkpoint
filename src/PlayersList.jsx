import Player from "./Player.jsx";
import players from "./players.js";

function PlayersList() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Cartes de joueurs FIFA</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {players.map((player) => (
          <Player
            key={player.name}
            name={player.name}
            team={player.team}
            nationality={player.nationality}
            jerseyNumber={player.jerseyNumber}
            age={player.age}
            image={player.image}
          />
        ))}
      </div>
    </div>
  );
}

export default PlayersList;
