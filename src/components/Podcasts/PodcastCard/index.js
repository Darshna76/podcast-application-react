import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

function PodcastCard({ id, title, displayImage }) {
  return (
    <Link to={`/podcast/${id}`}>
      <div className="podcast-card">
        <img className="display-image-podcast" src={displayImage} />
        <div className="title-icon">
        <p className="title-podcast">{title}</p>
        <FaPlay  style={{ color: "white", margin: "0.6rem 0rem" }}  />
        </div>


      </div>
    </Link>
  );
}

export default PodcastCard;
