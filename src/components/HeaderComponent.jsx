import netflixLogo from "../assets/netflix_logo.png";

const HeaderComponent = () => (
  <div className="">
    <img src={netflixLogo} alt="netflix-logo" style={{ maxWidth: "115px" }} />
    <h1 className="text-white text-center">Edit Profile</h1>
    <hr className="text-white" />
  </div>
);

export default HeaderComponent;
