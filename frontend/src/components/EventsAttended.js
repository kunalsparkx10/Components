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
import Navbar from "./Navbar";

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

function createData(event, date, location, details, certificate) {
  return { event, date, location, details, certificate };
}
const sendCertificate = async (e) => {
  e.preventDefault();

  // const { name, domain, date1, date2, email } = user;
  const res = await fetch("http://localhost:8080/sendCertificate", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Ram",
      email: "rajsanghavi9@gmail.com",
      event: "Beach Cleaning",
      date: "22 Feb 2022",
    }),
  });
  const data = await res.json();
  if (data.status === 500 || !data) {
    window.alert(
      "Unsuccessful. Some error occured. Did you fill all the details?"
    );
    console.log(
      "Unsuccessful. Some error occured. Did you fill all the details?"
    );
  } else {
    window.alert("Successfully sent the mail to the recipient");
    console.log("Successfully sent the mail to the recipient");
    // navigate("/");
  }
};

const rows = [
  createData(
    "Beach Cleaning 1",
    "22-2-2022",
    "Mumbai",
    "Details",
    "Get Certificate"
  ),
  createData(
    "Beach Cleaning 2",
    "22-2-2022",
    "Mumbai",
    "Details",
    "Get Certificate"
  ),
  createData(
    "Beach Cleaning 3",
    "22-2-2022",
    "Mumbai",
    "Details",
    "Get Certificate"
  ),
  createData(
    "Beach Cleaning 4",
    "22-2-2022",
    "Mumbai",
    "Details",
    "Get Certificate"
  ),
  createData(
    "Beach Cleaning 5",
    "22-2-2022",
    "Mumbai",
    "Details",
    "Get Certificate"
  ),
];
const EventsAttended = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const name = "Ram";
  const email = "vidhishp185@gmail.com";
  const event = "Beach Cleaning";
  const date = "22 Feb 2022";
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
          <h1 style={{ textAlign: "center" }}>Events Attended</h1>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h3 style={{ textAlign: "center" }}>Event</h3>
                  </TableCell>
                  <TableCell align="right">
                    <h3 style={{ textAlign: "center" }}>Date</h3>
                  </TableCell>
                  <TableCell align="right">
                    <h3 style={{ textAlign: "center" }}>Location</h3>
                  </TableCell>
                  <TableCell align="right">
                    <h3 style={{ textAlign: "center" }}>Details</h3>
                  </TableCell>
                  <TableCell align="right">
                    <h3 style={{ textAlign: "center" }}>Certificate</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.event}>
                    <TableCell component="th" align="center" scope="row">
                      {row.event}
                    </TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.location}</TableCell>
                    <TableCell align="center">
                      <Link to="/event/particularEvent">
                        <Button variant="contained" color="primary">
                          {row.details}
                        </Button>
                      </Link>
                    </TableCell>

                    <TableCell align="center">
                      <Button
                        onClick={sendCertificate}
                        variant="contained"
                        color="primary"
                      >
                        <EmailIcon style={{ marginRight: "5px" }} />
                        {row.certificate}
                      </Button>
                    </TableCell>
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

export default EventsAttended;
