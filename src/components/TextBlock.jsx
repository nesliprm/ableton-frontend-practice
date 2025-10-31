import "./TextBlock.css";

export const TextBlock = ({ heading, body }) => {
  return (
    <>
      <div className="text-block-container">
        <p className="heading">{heading}</p>
        <p className="body">{body}</p>
      </div>
    </>
  );
};
