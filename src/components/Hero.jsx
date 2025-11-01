import "./Hero.css";
import HeroImage from "/hero-image.png";

export const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <img src={HeroImage} alt="" />
      </div>
    </>
  );
};
