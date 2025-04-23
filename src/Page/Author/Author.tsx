import "./Author.css";
import profile from "../../assets/img/profile.jpg";
import { Link } from "react-router-dom";

const Author = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card__top">
          <img
            src="https://cdn.pixabay.com/photo/2016/10/26/23/24/colors-1772977_1280.jpg"
            alt="Sky"
          />
          <div className="profile__photo">
            <img src={profile} alt="Profile Photo" />
          </div>
        </div>
        <div className="card__content">
          <h2>Alison Doe</h2>
          <h3>Web Designer</h3>
          <p>
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            Paris, France
          </p>
          <p>
            <span>
              <i className="far fa-building"></i>
            </span>
            Fantasy Company Inc.
          </p>
          <p>
            <span>
              <i className="far fa-envelope"></i>
            </span>
            <a href="#">alison@fantasy.com</a>
          </p>
          <Link to={"/"} className="button">
            Read More
          </Link>
        </div>
        https://www.youtube.com/watch?app=desktop&v=CAnVhvWZurc
      </div>
    </div>
  );
};

export default Author;
