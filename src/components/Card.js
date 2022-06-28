const Card = (props) => {
  const { image, name } = props;

  return (
    <div className="card">
      <img src={image} alt="card" />
      <p>{name}</p>
    </div>
  );
};

export default Card;
