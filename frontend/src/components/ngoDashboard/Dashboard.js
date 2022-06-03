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
import ComputerIcon from "@material-ui/icons/Computer";
import Schools from "./Schools";
import Interview from "./Interview";
import DonationsRecieved from "./DonationsRecieved";
import DonationsRequested from "./DonationsRequested";
import RegisterEvent from "./RegisterEvent";
import DiscussionForum from "./DiscussionForum";
import OngoingEvents from "./OngoingEvents";
import Inventory from "./Inventory";
import VideoCall from "../videoCall/VideoCall";
// import
import "./Dashboard.css";
import "../../App.css";
import CanvasJSReact from "./canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const useStyles = makeStyles({
  paper: {
    background: "white",
  },
});

function Dashboard() {
  const pieoptions = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Event Donations",
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 18, label: "Beach Cleaning" },
          { y: 49, label: "Blood Donation" },
          { y: 9, label: "River Rejuvenation" },
          { y: 5, label: "Teach for India" },
          { y: 19, label: "Blanket Donation" },
        ],
      },
    ],
  };
  const options = {
    animationEnabled: true,
    title: {
      text: "Funding vs Donation",
    },
    axisY: {
      title: "Funding",
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "spline",
        name: "2019",
        showInLegend: true,
        dataPoints: [
          { y: 155, label: "Jan" },
          { y: 150, label: "Feb" },
          { y: 152, label: "Mar" },
          { y: 148, label: "Apr" },
          { y: 142, label: "May" },
          { y: 150, label: "Jun" },
          { y: 146, label: "Jul" },
          { y: 149, label: "Aug" },
          { y: 153, label: "Sept" },
          { y: 158, label: "Oct" },
          { y: 154, label: "Nov" },
          { y: 150, label: "Dec" },
        ],
      },
      {
        type: "spline",
        name: "2020",
        showInLegend: true,
        dataPoints: [
          { y: 172, label: "Jan" },
          { y: 173, label: "Feb" },
          { y: 175, label: "Mar" },
          { y: 172, label: "Apr" },
          { y: 162, label: "May" },
          { y: 165, label: "Jun" },
          { y: 172, label: "Jul" },
          { y: 168, label: "Aug" },
          { y: 175, label: "Sept" },
          { y: 170, label: "Oct" },
          { y: 165, label: "Nov" },
          { y: 169, label: "Dec" },
        ],
      },
      {
        type: "spline",
        name: "2021",
        showInLegend: true,
        dataPoints: [
          { y: 132, label: "Jan" },
          { y: 133, label: "Feb" },
          { y: 135, label: "Mar" },
          { y: 142, label: "Apr" },
          { y: 172, label: "May" },
          { y: 115, label: "Jun" },
          { y: 132, label: "Jul" },
          { y: 148, label: "Aug" },
          { y: 125, label: "Sept" },
          { y: 130, label: "Oct" },
          { y: 165, label: "Nov" },
          { y: 139, label: "Dec" },
        ],
      },
    ],
  };
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
        {/* <ListItem>
          <Button onClick={() => setMode("schools")}>
            <h4>
              <i className="fa fa-play-circle"></i> School
            </h4>
          </Button>
        </ListItem> */}
        <ListItem>
          <Button onClick={() => setMode("EventReg")}>
            <h4>
              <i className="fa fa-play-circle"></i> Event Register
            </h4>
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => setMode("Interview")}>
            <h4>
              <i className="fa fa-play-circle"></i> Interview
            </h4>
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => setMode("donationsRecieved")}>
            <h4>
              <i className="fa fa-play-circle"></i> Donations Recieved
            </h4>
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => setMode("donationsRequested")}>
            <h4>
              <i className="fa fa-play-circle"></i> Donations Requested
            </h4>
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => setMode("discussionForum")}>
            <h4>
              <i className="fa fa-play-circle"></i> Discussion Forum
            </h4>
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => setMode("ongoingEvent")}>
            <h4>
              <i className="fa fa-play-circle"></i> Ongoing Event
            </h4>
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => setMode("inventory")}>
            <h4>
              <i className="fa fa-play-circle"></i> Inventory Data
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
            <h1 style={{ textAlign: "center" }}>NGO Dashboard</h1>
            <br />
            {/* if you want 3 cards in a line */}
            <Grid container alignItems="center" justify="center">
              <Grid item xs={12} sm={4}>
                <Card className="userscard">
                  <h2 style={{ textAlign: "center" }}>Students Helped</h2>
                  <GroupIcon className="groupicon" />
                  <h2 style={{ textAlign: "center" }}>687</h2>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card className="userscard">
                  <h2 style={{ textAlign: "center" }}>Schools Funded</h2>
                  <AccountBalanceIcon className="groupicon" />
                  <h2 style={{ textAlign: "center" }}>5</h2>
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
            <div
              style={{
                margin: "20px",
                flexWrap: "nowrap",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div style={{ width: "500px" }}>
                <CanvasJSChart
                  options={options}
                  /* onRef={ref => this.chart = ref} */
                />
              </div>
              <div style={{ width: "500px" }}>
                <CanvasJSChart options={pieoptions} />
              </div>
            </div>
          </div>
        )}
        {mode === "schools" && <Schools />}
        {mode === "EventReg" && <RegisterEvent />}
        {mode === "Interview" && <Interview />}
        {mode === "donationsRecieved" && <DonationsRecieved />}
        {mode === "donationsRequested" && <DonationsRequested />}
        {mode === "discussionForum" && <DiscussionForum />}
        {mode === "ongoingEvent" && <OngoingEvents />}
        {mode === "inventory" && <Inventory />}
      </div>
    </>
  );
}

export default Dashboard;
