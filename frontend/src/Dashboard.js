import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { TrackAnalysis, UserTracks } from "react-spotify-api";
import "./dashboard.css";
import Card from "./Card.js";
import BasicTable from "./BasicTable.js";
import StatGauge from "./StatGauge";
import CardList from "./CardList";
import { Input, List, Avatar } from "antd";
import SearchBar from "./SearchBar.js";

//=======================================================================

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Dashboard({ props }) {
  const spotify = props.spotify;
  const [tracks, setTracks] = useState([]);

  //FUNCTION CREATION HERE===============================================
  // valence: float 0-1
  // loudness: float 0-60 DB
  // energy: float 0-1
  //https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-features

  function intForZeroToOne(metric) {
    return Math.round(metric * 100);
  }

  function decibalToAudioIntensity(metric) {
    // let audioIntensity = 10 ** ((metric * -1) / 10 - 12);
    return 10 ** ((metric * -1) / 10 - 12);
  }
  function intForLoudness(metric) {
    let temp = Math.round(10 * (decibalToAudioIntensity(metric) * 10 ** 12));

    if (temp >= 100) {
      temp = 100;
    }
    return temp;
  }

  useEffect(() => {
    let trackList = [];
    spotify.getMyTopTracks().then(
      (tracks) => {
        let trackFts = tracks.items.map((track) => {
          spotify.getAudioFeaturesForTrack(track.id).then((results) => {
            let temp = {
              id: track.id,
              name: track.name,
              artists: track.artists[0].name,
              energy: results.energy,
              loudness: results.loudness,
              acousticness: results.acousticness,
              valence: results.valence,
              dancibility: results.dancibility,
              instrumentalness: results.instrumentalness,
              img: track.album.images[0].url,
            };

            setTracks((tracks) => [...tracks, temp]);
          });
        });
      },
      (err) => {
        console.log("Error:", err);
      }
    );
  }, []);

  //create an item then map it to a card in typescript
  const trackInfo = [];
  const divRowsFor20MostListened = [];
  //variables for 1-10 metric transformation===================================
  let transformedEnergy = 0;
  let transformedValence = 0;
  let transformedLoudness = 0;

  for (let item of tracks) {
    //FUNCTION FOR TRANSFORMING METRICS FOR CARDS HERE=============================
    transformedEnergy = intForZeroToOne(item.energy);
    transformedValence = intForZeroToOne(item.valence);
    transformedLoudness = intForLoudness(item.loudness);
    const row = (
      <div class="top20Row">
        <div class="top20Img">
          <img src={item.img} alt={"Song Cover for" + item.name} />
        </div>
        <div class="songInfo">
          <div class="songName">{item.name}</div>
          <div class="songArtist">{item.artists}</div>
        </div>

        <div class="songMetrics">
          <div class="metric">
            <div class="stringName">{"Energy: "}</div>
            <div class="stat">{transformedEnergy}</div>
          </div>

          <div class="metric">
            <div class="stringName">{"Loudness: "}</div>
            <div class="stat">{transformedLoudness}</div>
          </div>

          <div class="metric">
            <div class="stringName">{"Happiness: "}</div>
            <div class="stat">{transformedValence}</div>
          </div>
          {/* <div class="rank">1</div> */}
        </div>
      </div>
    );
    divRowsFor20MostListened.push(row);

    //FUNCTION FOR FINDING METRIC AVGS=============================
    //below probably goes inside function
    let trackInfoTemp = {
      name: item.name,
      artists: item.artists,
      energy: transformedEnergy,
      loudness: transformedLoudness,
      valence: transformedValence,
      img: item.img,
    };
    trackInfo.push(trackInfoTemp);
  }

  return (
    <div className="dashboard_container">
      <Box sx={{ flexGrow: 1 }}>
        <SearchBar props={props} />
      </Box>
      <StatGauge props={trackInfo} />
      <div class="top20Table">{divRowsFor20MostListened}</div>
      {/* <BasicTable props={trackInfo} /> */}
      {/* <CardList /> */}
    </div>
  );
}

export default Dashboard;
