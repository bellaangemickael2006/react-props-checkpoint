function Player({ name, team, nationality, jerseyNumber, age, image }) {
  const cardStyle = {
    width: "18rem",
    borderTop: "4px solid #0d6efd",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  };

  const titleStyle = {
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  return (
    <div className="card m-3" style={cardStyle}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body text-center">
        <h5 className="card-title" style={titleStyle}>
          {name}
        </h5>
        <p className="card-text mb-1">
          <strong>Équipe :</strong> {team}
        </p>
        <p className="card-text mb-1">
          <strong>Nationalité :</strong> {nationality}
        </p>
        <p className="card-text mb-1">
          <strong>Numéro :</strong> {jerseyNumber}
        </p>
        <p className="card-text mb-0">
          <strong>Âge :</strong> {age} ans
        </p>
      </div>
    </div>
  );
}

Player.defaultProps = {
  name: "Joueur inconnu",
  team: "Sans équipe",
  nationality: "Inconnue",
  jerseyNumber: 0,
  age: 0,
  image: "https://placehold.co/300x300?text=Joueur",
};

export default Player;
