import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-left">
          <a className="navbar-logo" href="#">
            <img src="../../public/ableton.svg" alt="ableton logo" />
          </a>

          <a href="#">Live</a>
          <a href="#">Push</a>
          <a href="#">Link</a>
          <a href="#">Shop</a>
          <a href="#">Packs</a>
          <a href="#">Help</a>
          <a href="#">More +</a>
        </div>
        <div className="navbar-right">
          <a style={{ color: "var(--clr-dark-blue)" }} href="#">
            Try Live for free
          </a>
          <a href="">Account</a>
          <a href="">Log out</a>
        </div>
      </div>
    </>
  );
};
