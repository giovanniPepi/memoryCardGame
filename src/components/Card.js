const Card = (props) => {
  const {
    card: { src, image, title, backgroundColor, borderStyle },
    gameLogic,
  } = props;

  const style = {
    backgroundColor: backgroundColor,
    border: borderStyle,
  };

  return (
    <button
      className="card"
      style={style}
      onClick={gameLogic.bind(this, title)}
    >
      <figure>
        <img src={src} alt="card" />
        <figcaption>{title}</figcaption>
      </figure>
    </button>
  );
};

export default Card;
