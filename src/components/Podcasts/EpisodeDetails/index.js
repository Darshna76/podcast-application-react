import React from "react";
import Button from "../../common/Button";
import { FaPlay } from "react-icons/fa";

function EpisodeDetails({ index, title, description, audioFile, onClick }) {
  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ textAlign: "left", marginBottom: 0 }}>
        {index}. {title}
      </h1>
      <p style={{ marginLeft: "1.5rem" }} className="podcast-description ">
        {description}
      </p>
      <Button
        text={"Play"}
        onClick={() => onClick(audioFdile)}
        width={"100px"}
        
      />
     
    </div>
  );
}

export default EpisodeDetails;
