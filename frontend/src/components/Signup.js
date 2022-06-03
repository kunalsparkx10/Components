import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { GoogleLogin } from "react-google-login";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import signup1 from "../assets/signup1.svg";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { register } from "../actions/userActions";
import alanBtn from "@alan-ai/alan-sdk-web";
import Navbar from "./Navbar";

const Signup = () => {
  const responseGoogle = (res) => {
    console.log(res);
    console.log(res.profileObj);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const submitHandler = (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   setMessage("Passwords do not match");
    // } else {
    //   //dispatch
    //   dispatch(register(name, email, password));
    // }
    dispatch(
      register(
        user.name,
        user.email,
        user.password,
        user.isAdmin,
        user.profilePicture,
        user.description,
        user.mobileNumber
      )
    );
    navigate("/signin");
    // setUser({
    //     name: "",
    //     email: "",
    //     password: "",
    //     isAdmin: false,
    //     profilePicture: "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=612x612&w=0&h=8J3VgOZab_OiYoIuZfiMIvucFYB8vWYlKnSjKuKeYQM=",
    //     description: "",
    //     mobileNumber: ""
    // })
  };
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
    profilePicture:
      "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=612x612&w=0&h=8J3VgOZab_OiYoIuZfiMIvucFYB8vWYlKnSjKuKeYQM=",
    description: "",
    mobileNumber: "",
  });
  let name, value;
  const handleChange = (e) => {
    console.log(user);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const uploadProfilePicture = async (e) => {
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
  useEffect(() => {
    if (userInfo) {
      // if (userInfo.data.isInstructor === true) {
      //   history.push("/instructorHomePage");
      // } else
      navigate("/");
      console.log("LoggedIn");
      console.log(userInfo);
    }
  }, [userInfo, navigate]);
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#87d5fa" }}>
        <div>
          <Grid container>
            <Grid
              direction="column"
              alignItems="center"
              justifyContent="center"
              item
              lg={6}
              xs={12}
            >
              <Container
                style={{ margin: "50px", padding: "50px" }}
                component="main"
              >
                <CssBaseline />
                <Card
                  style={{
                    padding: "30px",
                    width: "80%",
                    borderRadius: "30px",
                    boxShadow: "5px 5px 25px 5px",
                  }}
                >
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      sx={{ m: 1 }}
                      style={{ backgroundColor: "#1976d2" }}
                    >
                      <LockOutlinedIcon />
                    </Avatar>

                    <h1>Sign up</h1>
                    <GoogleLogin
                      clientId={process.env.REACT_APP_CLIENT_ID}
                      buttonText="Login with Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoFocus
                        onChange={handleChange}
                        //value={user.name}
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                        onChange={handleChange}
                        //value={user.email}
                      />
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                        //value={user.password}
                      />
                      <br />
                      <br />
                      <Typography>Profile Picture</Typography>
                      <TextField
                        required
                        fullWidth
                        name="profilePicture"
                        label="Profile Picture"
                        type="file"
                        id="profilePicture"
                        onChange={uploadProfilePicture}
                        //value={user.profilePicture}
                      />
                      <br />
                      <br />
                      <TextField
                        required
                        fullWidth
                        name="description"
                        label="Description"
                        type="text"
                        id="description"
                        autofocus
                        onChange={handleChange}
                        // value={user.description}
                      />
                      <TextField
                        required
                        fullWidth
                        name="mobileNumber"
                        label="Mobile Number"
                        type="number"
                        id="mobileNumber"
                        autofocus
                        onChange={handleChange}
                        // value={user.mobileNumber}
                      />
                      {/* <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label="Remember me"
                                        /> */}
                      <br />
                      <br />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                        style={{ borderRadius: "999px" }}
                        onClick={submitHandler}
                      >
                        Signup
                      </Button>
                      <br />
                      <br />
                      <Grid container>
                        <Grid item>
                          <Link to="/signin" variant="body2">
                            {"Already have an account? Login"}
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Card>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
              </Container>
              {/* <Card
                            style={{ marginTop: "100px", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                            <h1 style={{ textAlign: "center" }}>Welcome Back</h1>
                            <GoogleLogin
                                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </Card> */}
            </Grid>
            <Grid item lg={6} xs={12}>
              {/* <Card style={{ marginTop: "100px" }}> */}
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={signup1}
                  style={{ width: "80%", marginTop: "50px" }}
                  alt="login1"
                />
                {/* </Card> */}
              </Box>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Signup;
