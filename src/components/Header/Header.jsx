import "./Header.scss";
import headerImg from "../../assets/Browser_xoynxe.png";

const Header = () => {
  return (
    <header>
      <div className="header__cont">
        <div>
          <div>
            <h1>Branding do you know who you are</h1>
            <p>
              The following tips on creating a direct mail advertising campaign
              have been street-tested and will bring you huge returns in a short
              period of time.
            </p>
          </div>
        </div>
        <section>
          <button className="btn">DESIGN YOUR MODULE</button>
          <button className="btn">GET DEMO VERSION</button>
          <p className="learn__more">Learn More</p>
        </section>
      </div>

      <figure>
        <img src={headerImg} alt="header img" />
      </figure>
    </header>
  );
};

export default Header;
