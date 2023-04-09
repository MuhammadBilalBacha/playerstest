import React, { useState } from "react";
import { playersList } from "../json-file-main/PlayersList";
import Players from "./players";
import "./PlayerList.css";
import { useNavigate } from "react-router-dom";
const PlayerList = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  console.log(playersList);

  return (
    <div className="container">
      <div className="mysearch py-3">
        <input
          type="text"
          placeholder="Search Player by name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="player-top bg-dark fw-semibold py-3 text-light d-flex justify-content-between px-3">
        <span>Profile</span>
        <span>First</span>
        <span>Last</span>
        <span>Club</span>
        <span>Action</span>
      </div>
      {playersList
        .filter((mydata) => {
          return input.toLowerCase() === ""
            ? mydata
            : mydata.first_name.toLowerCase().includes(input);
        })
        .map((data) => {
          return (
            <div className="all-players" key={data.id}>
              <Players
                image={data.image}
                first_name={data.first_name}
                last_name={data.last_name}
                club={data.club}
                click={() => {
                  const ogImage = document.getElementById("og-image");
                  ogImage.setAttribute("content", data.image);
                  //   console.log("player Id", data.id);
                  navigate(`/details/${data.use_name}`);
                }}
              />
            </div>
          );
        })}
    </div>
  );
};

export default PlayerList;
