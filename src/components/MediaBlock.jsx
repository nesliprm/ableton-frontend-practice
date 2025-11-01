import "./MediaBlock.css";

export const MediaBlock = ({ color, images }) => {
  return (
    <>
      <div className="media-block-container">
        <div className="box" style={{ backgroundColor: color }}></div>
        {images.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
    </>
  );
};
