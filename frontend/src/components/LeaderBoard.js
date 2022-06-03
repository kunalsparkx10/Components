import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import Footer from "./Footer";
import Avatar from "@material-ui/core/Avatar";
import Navbar from "./Navbar";

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

function createData(srno, avatar, name, points, badge) {
  return { srno, avatar, name, points, badge };
}

const rows = [
  createData("1", "RS", "Raj Sanghavi", "2100", "gold"),
  createData("2", "VP", "Vidhish Panchal", "2000", "gold"),
  createData("3", "AA", "Adnan Ahmed", "2000", "gold"),
  createData("4", "BS", "Burhan Sawliwala", "1800", "gold"),
  createData("5", "TA", "Thakur Avnod", "1700", "silver"),
  createData("6", "TR", "Tripur Rashi", "1600", "silver"),
  createData("7", "UV", "Urvashi Vaani", "1500", "silver"),
];
const LeaderBoard = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: "#87d5fa",
          paddingTop: "20px",
          ppaddingBottom: "50px",
        }}
      >
        <div style={{ margin: "100px" }}>
          <h1 style={{ textAlign: "center" }}>LeaderBoard</h1>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h3 style={{ textAlign: "center" }}>Sr. No.</h3>
                  </TableCell>
                  <TableCell align="right">
                    <h3 style={{ textAlign: "center" }}>Avatar</h3>
                  </TableCell>
                  <TableCell align="right">
                    <h3 style={{ textAlign: "center" }}>Name</h3>
                  </TableCell>
                  <TableCell align="right">
                    <h3 style={{ textAlign: "center" }}>Points</h3>
                  </TableCell>
                  <TableCell align="right">
                    <h3 style={{ textAlign: "center" }}>Badge</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.srno}>
                    <TableCell component="th" align="center" scope="row">
                      {row.srno}
                    </TableCell>
                    <TableCell align="right">
                      <Avatar>{row.avatar}</Avatar>
                    </TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.points}</TableCell>
                    <TableCell align="center">
                      <Button style={{ backgroundColor: `${row.badge}` }}>
                        {row.badge}
                      </Button>
                    </TableCell>

                    {/* <TableCell align="center"><Link to="/event/particularEvent"><Button variant="contained" color="primary">{row.details}</Button></Link></TableCell> */}

                    {/* <TableCell align="center"><Button variant="contained" color="primary"><EmailIcon style={{ marginRight: "5px" }} />{row.certificate}</Button></TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LeaderBoard;
