import React, { useState } from "react";
import "./registerEvent.css";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Swal from "sweetalert2";
import axios from "axios";

export default function RegisterEvent() {
  const [subEvents, setSubEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState("");

  const handleSubmit = async () => {
    const headers = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.post("/user/sendEventRegistrationEmail", {
      headers,
    });
    // console.log(data);
    if (data.success === true) {
      console.log("Success");
      Swal.fire(
        "Email Alert is sent",
        `Event Name: Tree Plantation Drive`,
        "success"
      );
    } else {
      console.log("Success=true not returned");
      Swal.fire(`Email Alert could not be sent`, `Please try again.`, "error");
    }
  };

  return (
    <div className="App">
      {/* <Typography gutterBottom variant="h3" align="center">
        Event Registeration
      </Typography> */}
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              NGO Event Registeration
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Enter Event name"
                    label="Event Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    multiline
                    rows={4}
                    placeholder="Description"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Address"
                    placeholder="Address"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="City"
                    placeholder="City"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Pincode"
                    type="number"
                    placeholder="Address"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="number"
                    placeholder="Number of Volunteers Required"
                    label="Volunteers"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="number"
                    placeholder="Funding Required(in Rs)"
                    label="Funding"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" component="label">
                    Upload Images
                    <input type="file" hidden />
                  </Button>
                </Grid>
                <Typography variant="h5">Enter Subevents</Typography>
                <Grid item xs={12}>
                  {subEvents.map((each, index) => {
                    return (
                      <div
                        style={{ border: "1px solid black", margin: "10px" }}
                      >
                        <Typography key={index}>
                          {index + 1} {each}
                        </Typography>
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    label="Sub Event Title"
                    placeholder="Sub Event Title"
                    variant="outlined"
                    value={currentEvent}
                    fullWidth
                    required
                    onChange={(e) => {
                      setCurrentEvent(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    style={{
                      display: "flex",
                      flexDirection: "center",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      setSubEvents((old) => [...old, currentEvent]);
                      // alert(old)
                      setCurrentEvent("");
                    }}
                  >
                    <AddCircleOutlineIcon fontSize="large" />
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
