import React from "react";
import { Typography, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import ReorderIcon from "@mui/icons-material/Reorder";
import GridViewIcon from "@mui/icons-material/GridView";
import CardComponent from "../../components/common/Card/Card";


const HomePage = () => {
  const { username } = useParams();

  return (
    <Grid container>
        <Header  username = {username}/>

      <CardComponent/>
      </Grid>
  );
};

export default HomePage;
