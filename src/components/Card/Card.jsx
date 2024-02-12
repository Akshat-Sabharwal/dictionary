import "./Card.css";

export const Card = ({ image, text }) => {
  return (
    <div className="container">
      <div
        className="image"
        style={{
          borderBottomRightRadius: text === undefined ? "1.3rem" : "0",
          borderBottomLeftRadius: text === undefined ? "1.3rem" : "0",
          padding: text === undefined ? "2.5rem 1.8rem" : "2rem 0",
        }}
      >
        <img
          src={image}
          style={{
            maxWidth: text === undefined ? "15rem" : "10rem",
          }}
        />
      </div>
      {text !== undefined ? (
        <div className="text">
          <p>{text}</p>
        </div>
      ) : null}
    </div>
  );
};
