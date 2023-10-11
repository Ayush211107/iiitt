import React, { useEffect, useState } from "react";
import { useLocation, Redirect } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Card,
  Typography,
  Grid,
  Box,
  CardMedia,
  CardContent,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../../components/footer/index";
import Navbar from "../../components/navbar/index";
import "./styles.css";

const createStyles = makeStyles({
  themeText: {
    color: "#2e8b57",
  },
  link: {
    textDecoration: "none",
    display: "inline-block",
    paddingTop: "1rem",
    fontWeight: "500",
    width: "auto",
    "&:hover": {
      textDecoration: "underline",
      color: "blueviolet",
    },
  },
  tableRow: {
    "&:nth-of-type(even)": {
      backgroundColor: "rgba(0,0,0,0.10)",
    },
  },
  tableHead: {
    fontWeight: "900",
    backgroundColor: "#2e8b57",
    color: "white",
  },
  table: {
    marginBottom: "1.5rem",
  },
});

export default function VlaParticipants(props) {
  const pathName = useLocation().pathname;
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "VLA | Participants";
  }, []);
  useEffect(
    () => () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    },
    [],
  );

  const [participants, setParticipants] = useState(undefined);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    import(`../../json/${pathName.slice(1, pathName.length)}.json`)
      .then((data) => setParticipants(data.data))
      .catch(() => setRedirect(true));
  }, []);

  const classes = createStyles();
  let ctr = 0;
  return (
    <div className="page-container">
      <Navbar src="vla_navbar.json" homeRoute="/vla" />
      <Grid container className="container">
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          {redirect ? (
            <Redirect to="/404" />
          ) : (
            <>
              {participants && (
                <TableContainer
                  component={Paper}
                  className={classes.table}
                  gutterBottom
                >
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          className={`${classes.tableHead} ${classes.tableCell}`}
                        >
                          S. No.
                        </TableCell>
                        <TableCell
                          className={`${classes.tableHead} ${classes.tableCell}`}
                        >
                          Name
                        </TableCell>
                        <TableCell
                          className={`${classes.tableHead} ${classes.tableCell}`}
                        >
                          Designation
                        </TableCell>
                        <TableCell
                          className={`${classes.tableHead} ${classes.tableCell}`}
                        >
                          Institute
                        </TableCell>
                        <TableCell
                          className={`${classes.tableHead} ${classes.tableCell}`}
                        >
                          State
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {participants.map((participant) => {
                        ctr++;
                        return (
                          <TableRow className={classes.tableRow}>
                            <TableCell className={classes.tableCell}>
                              {ctr}
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              {participant.name}
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              {participant.designation}
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              {participant.institute}
                            </TableCell>
                            <TableCell className={classes.tableCell}>
                              {participant.state}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </>
          )}
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  );
}
