import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useWeather } from "../../context/WeatherContext";

import {
  StyledGoBackDiv,
  StyledGoBackH2,
  StyledMainDiv,
  StyledMessageDiv,
} from "./StyledSongScreen";

import { HandleRemoveStorageItem } from "../../config/api/api";
import MusicCard from "../../components/MusicCard/MusicCard";

function SongsScreen() {
  const { weatherMusic, setWeatherMusic } = useWeather();

  const location = useLocation<any>();

  const { isCelsius } = location.state;

  useEffect(() => {
    async function handleSongs() {
      const citiesJSON = await localStorage.getItem("@storage_Key");

      if (citiesJSON) {
        const newArray = JSON.parse(citiesJSON);

        return setWeatherMusic(newArray);
      }
      return setWeatherMusic([]);
    }
    handleSongs();
  }, []);

  async function removeItem(item: any) {
    await HandleRemoveStorageItem(item);
    const alteredMusicArray = weatherMusic.filter(function (music: any) {
      if (music.id === item.id) {
        return music.id !== item.id;
      }
      return music;
    });
    setWeatherMusic(alteredMusicArray);
  }

  return (
    <StyledMainDiv>
      <StyledGoBackDiv>
        <Link
          to={{ pathname: "/" }}
          style={{
            textDecoration: "none",
            marginLeft: 30,
          }}
        >
          <StyledGoBackH2>Go back</StyledGoBackH2>
        </Link>
      </StyledGoBackDiv>

      {weatherMusic && weatherMusic.length > 0 ? (
        <>
          {weatherMusic.map((item: any, index: any) => (
            <MusicCard
              item={item}
              isCelsius={isCelsius}
              key={item.id}
              removeItem={removeItem}
              index={index}
            />
          ))}
        </>
      ) : (
        <StyledMessageDiv>
          <h1 style={{ color: "white" }}>You haven't added any songs yet 🎸</h1>
          <Link to="/" style={{ textDecoration: "none" }}>
            <StyledGoBackH2>Go back</StyledGoBackH2>
          </Link>
        </StyledMessageDiv>
      )}
    </StyledMainDiv>
  );
}
export default SongsScreen;
