import React, { useEffect, useState } from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem",
  },
  themeText: {
    color: "#2e8b57",
  },
  text: {
    fontSize: "1.3rem",
  },
  subText: {
    fontSize: "1.2rem",
  },
  list: {
    listStylePosition: "inside",
    marginBottom: "1rem",
  },
  link: {
    textDecoration: "none",
    display: "inline-block",
    fontWeight: "500",
    width: "auto",
    "&:hover": {
      textTecoration: "underline",
      color: "blueviolet",
    },
  },
  download: {
    marginRight: "0.3rem",
    position: "relative",
    top: "0.3rem",
  },
});

export default function Undergraduate() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Undergraduate";
  }, []);

  useEffect(
    () => () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    },
    [],
  );

  const classes = createStyles();
  const file = "Ph.D_regulations_IIITT_final_2020.pdf";

  return (
    <div className="page-container">
      <Navbar />
      <Grid container className={classes.container}>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className={classes.themeText}
          >
            <Box component="span" fontWeight={380}>
              Doctor of Philosophy (Ph.D)
            </Box>
          </Typography>
          <br />
          <Typography variant="h6">Ph.D Regulations</Typography>
          <a href={require(`../../docs/${file}`)} download={`${file}`}>
            <Typography variant="h6">Download Ph.D regulations</Typography>
          </a>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
