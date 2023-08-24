
function Card({ beer }) {
  return (
    <div className="card">
      <img className="card-img" src={beer.image_url} alt={beer.name} />
      <h4 className="card-title">{beer.name}</h4>
      <p className="card-desc">{beer.description}</p>
    </div>
  );
}

export default Card

