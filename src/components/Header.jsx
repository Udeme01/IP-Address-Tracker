import bgImgMobile from "../assets/pattern-bg-mobile.png";
import bgImgDesktop from "../assets/pattern-bg-desktop.png";

const Header = () => {
  return (
    <picture>
      <source
        media="(min-width: 765px)"
        srcSet={bgImgDesktop}
        alt="desktop background image"
      />
      <img
        src={bgImgMobile}
        alt="mobile background image"
        className="w-full h-80 object-cover"
      />
    </picture>
  );
};

export default Header;
