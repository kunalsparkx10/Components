import Box from "@material-ui/core/Box";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Typography from "@material-ui/core/Typography";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
// Importing Header
// import Header from "./Header";
import { USER_LOGIN_SUCCESS } from "../constants/userConstants";
import { TextField } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles({
  profileCard: {
    width: "85% !important",

    /* display: flex !important; */
    justifyContent: "center !important",
    alignItems: "center !important",
    margin: "30px auto !important",
    margin: "2% !important",
    boxShadow: "5px 5px 25px 5px !important",
    borderRadius: "30px !important",
    zIndex: "0",
    marginLeft: "8% !important",
  },
  profilePic: {
    borderRadius: "999px",
    width: "150px",
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    margin: "70px auto !important",
    position: "relative",
    bottom: "10px",
    padding: "1%",
    border: "5px solid gray",
    zIndex: "1",
  },
  name: {
    textAlign: "center",
    position: "relative",
    bottom: "30px",
  },
  description: {
    padding: "5%",
    marginTop: "-50px",
    marginLeft: "20px",
  },
  table: {
    minWidth: "400 !important",
    width: "70% !important",
    padding: "4% !important",
    /* margin: 5%; */
    boxShadow: "5px 5px 5px 5px lightgrey !important",
    borderRadius: "30px !important",
    display: "flex !important",
    /* justify-content: center !important; */
    /* align-items: center !important; */
    margin: "5% auto !important",
    /* height: 400px; */
  },
  tableText: {
    fontWeight: "bold",
    color: "rgb(0, 153, 255)",
    /* line-height: -10px; */
  },
  editBtn: {
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    margin: "50px auto !important",
    borderRadius: "999px",
  },
  smallCard: {
    width: "70%",
    /* display: flex !important; */
    justifyContent: "center !important",
    alignItems: "center !important",
    margin: "10px auto !important",
    boxShadow: " 5px 5px 5px 5px lightgrey !important",
    borderRadius: "30px !important",
    padding: "3%",
    height: "50%",
    paddingLeft: "50px",
    /* margin-bottom: 100px; */
  },
  numOfCourses: {
    fontSize: "60px",
    position: "relative",
    bottom: "80px",
  },
  smallCardImg: {
    width: "200px",
    /* z-index: 100;
     */
    position: "relative",
    bottom: "200px",
    right: "-100px",
    margin: "5%",
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function EditProfile({ history }) {
  const classes = useStyles();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();
  // const [names, setName] = useState(userInfo.data.name);
  // const [email, setEmail] = useState(userInfo.data.email);
  // const [password, setPassword] = useState(userInfo.data.password);
  // const [phone, setPhone] = useState(userInfo.data.mobileNumber);
  // const [image, setImage] = useState("");
  // const [description, setDescription] = useState(userInfo.data.description);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: userInfo.data.name,
    email: userInfo.data.email,
    password: userInfo.data.password,
    isAdmin: false,
    profilePicture: userInfo.data.profilePicture,
    description: userInfo.data.description,
  });
  let name, value;
  const handleChange = (e) => {
    console.log(user);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const uploadNewPic = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "ih1rthv8");
    await axios
      .post("https://api.cloudinary.com/v1_1/vdshgp/image/upload", formData)
      .then((response) => {
        // console.log(response.data.secure_url);
        setUser({ ...user, profilePicture: response.data.secure_url });
        console.log(user);
      });
  };

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#87d5fa" }}>
        <div>
          {/* <Header /> */}
          <Box m={2} pt={9} />
          <Card className={classes.profileCard}>
            <Grid container>
              <h1 style={{ marginLeft: "100px", textAlign: "center" }}>
                Edit Profile
              </h1>
              <Grid item xs={12} sm={12}>
                <div style={{ marginLeft: "100px" }}>
                  <img
                    src={userInfo.data.profilePicture}
                    alt="profilepic"
                    style={{
                      borderRadius: "100%",
                      width: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                  <Typography>Edit your Profile Picture</Typography>
                  <TextField
                    type="file"
                    name="profilePicture"
                    onChange={uploadNewPic}
                  >
                    Edit Profile Picture
                  </TextField>
                </div>
                <TableContainer component={Paper} className={classes.table}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow></TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow key="Name">
                        <TableCell component="th" scope="row">
                          Name
                        </TableCell>
                        <TableCell align="right">
                          <TextField
                            onChange={handleChange}
                            name="name"
                            defaultValue={user.name}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow key="Email">
                        <TableCell component="th" scope="row">
                          Email
                        </TableCell>
                        <TableCell align="right">{user.email}</TableCell>
                      </TableRow>
                      <TableRow key="Description">
                        <TableCell component="th" scope="row">
                          Description
                        </TableCell>
                        <TableCell align="right">
                          <TextField
                            onChange={handleChange}
                            name="description"
                            defaultValue={user.description}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow key="Mobile Number">
                        <TableCell component="th" scope="row">
                          Mobile Number
                        </TableCell>
                        {user.mobileNumber === "" || null ? (
                          <TableCell align="right">----</TableCell>
                        ) : (
                          <TableCell align="right">
                            <TextField
                              onChange={handleChange}
                              type="number"
                              name="mobileNumber"
                              defaultValue={user.mobileNumber}
                            />
                          </TableCell>
                        )}
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.editBtn}
                  // onClick={editProfileSubmitHandler}
                >
                  Save Details
                </Button>
              </Grid>
            </Grid>
          </Card>
          <br />
          <br />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default EditProfile;
