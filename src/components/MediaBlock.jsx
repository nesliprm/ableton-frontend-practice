import "./MediaBlock.css";

export const MediaBlock = () => {
  return (
    <>
      <div className="media-block-container">
        <div
          className="box"
          style={{ backgroundColor: "var(--clr-yellow)" }}
        ></div>
        <div
          className="media"
          style={{ backgroundImage: "url('/images/image01.png')" }}
        ></div>
        <div
          className="media"
          style={{ backgroundImage: "url('/images/image02.png')" }}
        ></div>
      </div>
    </>
  );
};
