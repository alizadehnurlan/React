const Card = ({imageSrc,title,description}) => {
  return (
    <div className="card">
      <img src={imageSrc} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export default Card;
