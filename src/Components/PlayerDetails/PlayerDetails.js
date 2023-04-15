import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { playersList } from "../json-file-main/PlayersList";
import "./PlayerDetails.css";
import { Helmet } from "react-helmet";

const PlayerDetails = () => {
  const [indexNmbr, setIndexNmbr] = useState(null);
  const params = useParams();
  console.log(params.Id);

  const indexHandler = () => {
    const playerIndex = playersList
      .map((object) => object.use_name)
      .indexOf(params.Id);

    console.log(playerIndex);
    setIndexNmbr(playerIndex);
  };

  useEffect(() => {
    const ogImage = document.getElementById("og-image");
    ogImage.setAttribute(
      "content",
      playersList[indexNmbr]?.image + `${`?_v=123`}`
    );
    indexHandler();
  });
  if (indexNmbr !== null) {
    const check = playersList[indexNmbr].first_name;
    console.log(check);
  }

  // const svgDataUri = `data:image/svg+xml,${encodeURIComponent(svgCode)}`;
  return (
    <div className="container">
      <Helmet>
        <title>KHAWATEEN ROZGAR</title>
        <meta
          property="og:image"
          itemprop="image"
          content={playersList[indexNmbr]?.image}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
      </Helmet>
      <h1 className="py-4">Player Details</h1>
      <img src={playersList[indexNmbr]?.image} alt="" />

      {indexNmbr !== null && (
        <>
          <div className="container details">
            <div className="image">
              <img src={playersList[indexNmbr].image} alt="" />
            </div>
            <div className="name">
              <span className="fw-semibold">
                {playersList[indexNmbr].first_name}
                {playersList[indexNmbr].last_name}
              </span>
            </div>
            <div className="dateOfbirth">
              {playersList[indexNmbr].birth_date}
            </div>
            <div className="level">{playersList[indexNmbr].level}</div>
            <div className="height">{playersList[indexNmbr].height_feet}</div>
            <div className="weight">{playersList[indexNmbr].weight}</div>
          </div>
          <div className="fetching">
            <div className="container py-4">
              <div className="firstStats">
                {playersList[indexNmbr].pitching_stats.map((data) => {
                  return (
                    <>
                      <div>{data.year}</div>
                      {data.team}
                      {data.loses}
                      {data.hit_by_pitch}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerDetails;
