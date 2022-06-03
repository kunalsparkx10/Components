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
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import login1 from "../assets/login1.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import { login } from "../actions/userActions";
import alanBtn from "@alan-ai/alan-sdk-web";
import Navbar from "./Navbar";

const Signin = () => {
  const navigate = useNavigate();

  const responseGoogle = (res) => {
    console.log(res);
    console.log(res.profileObj);
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(user.email, user.password));
    console.log("Login dispatch");
    setUser({
      email: "",
      password: "",
    });
  };
  let name, value;
  const handleChange = (e) => {
    console.log(user);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
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
            <Grid item lg={6} xs={12}>
              {/* <form onSubmit={submitHandler}> */}
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

                    <h1>Welcome back</h1>

                    <GoogleLogin
                      clientId={process.env.REACT_APP_CLIENT_ID}
                      buttonText="Login with Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                    {/* <form onSubmit={submitHandler}> */}
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                        value={user.email}
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
                        value={user.password}
                      />
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                      <br />
                      <Button
                        type="submit"
                        onClick={submitHandler}
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                        style={{ borderRadius: "999px" }}
                      >
                        Sign In
                      </Button>
                      <br />
                      <br />
                      <Grid container>
                        <Grid item xs>
                          <Link to="/signup" variant="body2">
                            Forgot password?
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link to="/signup" variant="body2">
                            {"Don't have an account? Sign Up"}
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                    {/* </form> */}
                  </Box>
                </Card>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
              </Container>
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
                  src={login1}
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

export default Signin;
