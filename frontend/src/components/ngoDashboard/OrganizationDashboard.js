import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { List, ListItem, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import GroupIcon from "@material-ui/icons/Group";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import LocalHotelIcon from "@material-ui/icons/LocalHotel";
import ComputerIcon from "@material-ui/icons/Computer";
import Schools from "./Schools";
import "./Dashboard.css";
import "../../App.css";

import NgoList from "./NgoList";

const useStyles = makeStyles({
  paper: {
    background: "white",
  },
});

function OrganizationDashboard() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("dashboard");
  const classes = useStyles();
  const list = () => (
    <div
      onClick={() => {
        setOpen(false);
      }}
    >
      <List>
        <ListItem>
          <Button onClick={() => setMode("dashboard")}>
            <h4>
              <i className="fa fa-th-large"></i> Dashboard
            </h4>
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => setMode("ngo")}>
            <h4>
              <i className="fa fa-play-circle"></i> NgoList
            </h4>
          </Button>
        </ListItem>
      </List>
    </div>
  );
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#E63E6D",
            height: "50px",
          }}
        >
          <Button
            style={{ textDecoration: "none", color: "white" }}
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuIcon />
            More
          </Button>
          <Button
            style={{ textDecoration: "none", color: "white" }}
            onClick={() => {
              alert("Logout");
            }}
          >
            Logout
            <ExitToAppIcon />
          </Button>
        </div>
        <Drawer
          classes={{ paper: classes.paper }}
          anchor={"left"}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          {list()}
        </Drawer>
        {mode === "dashboard" && (
          <div>
            <h1 style={{ textAlign: "center" }}>
              Lotus Hospitals 🩸 - Healthcare organization.
            </h1>
            <br />
            {/* if you want 3 cards in a line */}
            <Grid container alignItems="center" justify="center">
              <Grid item xs={12} sm={4}>
                <Card className="userscard">
                  <h2 style={{ textAlign: "center" }}>People Helped</h2>
                  <GroupIcon className="groupicon" />
                  <h2 style={{ textAlign: "center" }}>687</h2>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card className="userscard">
                  <h2 style={{ textAlign: "center" }}>Beds Available</h2>
                  <LocalHotelIcon className="groupicon" />
                  <h2 style={{ textAlign: "center" }}>50</h2>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card className="userscard">
                  <h2 style={{ textAlign: "center" }}>Total Funds</h2>
                  <ComputerIcon fontSize="large" className="courseicon" />
                  <h2 style={{ textAlign: "center" }}>300000</h2>
                </Card>
              </Grid>
            </Grid>
          </div>
        )}
        {mode === "ngo" && <NgoList />}
      </div>
    </>
  );
}

export default OrganizationDashboard;
