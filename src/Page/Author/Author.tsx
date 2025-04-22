import Section from "../../components/Section";
import "./Author.css";

const Author = () => {
  return (
    <Section className="card-container">
      <div className="card">
        <div className="card__top">
          <img
            src="https://cdn.pixabay.com/photo/2016/10/26/23/24/colors-1772977_1280.jpg"
            alt="Sky"
          />
          <div className="profile__photo">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Profile Photo"
            />
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
          <a href="#" className="button">
            Read More
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Author;
