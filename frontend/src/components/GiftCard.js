import React, { useEffect, useState } from "react";
// import ReactFlow from 'react-flow-renderer';
import Card from "@material-ui/core/Card";
import Input from "@material-ui/core/Input";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import cover from "../assets/cover.jpg";
import MailIcon from "@material-ui/icons/Mail";
import liquidCheese from "../assets/liquid-cheese2.svg";
import donationbox from "../assets/donationbox.png";
import student from "../assets/student-removebg.png";
import cardimg1 from "../assets/cardimg1.jpg";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import students from "../assets/students.jpg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ChatIcon from "@material-ui/icons/Chat";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import PetsIcon from "@material-ui/icons/Pets";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import PersonIcon from "@material-ui/icons/Person";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { Avatar } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";
import giftcard from "../assets/giftcard.jpg";
import Navbar from "./Navbar";
import axios from "axios";
import Swal from "sweetalert2";
const loadRazorPay = async () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    // script.onload = displayRazorPay;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const GiftCard = () => {
  const [giftCardValue, setGiftCardValue] = useState(500);
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // <div style={{backgroundColor:"#87d5fa"}}
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    heroContent: {
      // backgroundColor: "#FEFFFF",
      padding: theme.spacing(10, 0, 4),
      backgroundColor: "#ffaa00",
      backgroundImage: `url(${liquidCheese})`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
    },
    header: {
      height: "85vh",
      backgroundSize: "cover",
      backgroundPosition: "65% 50%",
      // backgroundImage: `url(${cover})`,
      // backgroundSize: "cover",
      // backgroundPosition: "65% 50%",
      // backgroundImage: `url(${liquidCheese})`,
      // backgroundColor: "#ffaa00"
    },
    heroDesign: {
      // border: "2px solid red",
      backgroundColor: "#af0d24",
      width: "150px",
      height: "150px",
      // marginTop: "-10%",
      // position: "absolute",
      "&:before": {
        content: "''",
        display: "block",
        width: "170px",
        height: "150px",
        // backgroundColor: "black",
        background: `linear-gradient(90deg, white 5px, transparent 1%) center, 
                      linear-gradient(white 5px, transparent 1%) center, grey`,
        backgroundSize: "6px 6px",
        marginTop: "20px",
        position: "absolute",
        zIndex: "-1",
      },
    },
    heroTextContainer: {
      // margin: "0 10% 0 10%",
      color: "black",
      padding: "0 10% !important",
      position: "relative",
      zIndex: "1",
    },
    heroText: {
      // borderLeft: "3px solid #dfdfdf",
      padding: theme.spacing(6),
      // "& h3": {
      //   color: "grey",
      //   textTransform: "lowercase",
      //   fontWeight: "bold",
      //   // letterSpacing: "1px",
      // },
    },
    heroImageItem: {
      display: "grid",
      placeItems: "center",
    },
    heroImageDiv: {
      width: "30vw",
      height: "30vw",
      border: "2px solid black",
      borderRadius: "50%",
      overflow: "hidden",
      zIndex: 1,
    },
    heroImage: {
      width: "60vw",
      marginLeft: "-30vw",
      marginTop: "10%",
    },
    heroText: {
      // margin: "0 10% 0 10%",
      color: "black",
    },
    halfCircle: {
      height: "75vh",
      width: "75vh",
      border: "2px solid black",
      borderRadius: "50%",
      position: "absolute",
      marginLeft: "calc(100vw - 37.5vh)",
      marginTop: "5vh",
    },
    cardGrid: {
      backgroundColor: "#FEFFFF",
      // paddingBottom: theme.spacing(8),
      padding: theme.spacing(8, 16),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(4),
      },
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2),
      },
      alignItems: "center",
    },
    heading: {
      width: "100%",
      fontSize: 30,
      fontWeight: "500",
      // textDecoration: "underline",
    },
    card: {
      backgroundColor: "white",
      height: "100%",
      boxShadow: "5px 5px 5px 5px lightgrey",
      display: "flex",
      flexDirection: "column",
      padding: "4%",
      "&:hover": {
        boxShadow: "0 3px 12px darkgrey",
      },
    },
    cardMedia: {
      margin: "2%",
      paddingTop: "56.25%",
      borderRadius: "0.25rem",
    },
    cardContent: {
      flexGrow: 1,
      textAlign: "center",
    },
    carousel: {
      width: "100%",
    },
    carouselItemContainer: {
      display: "flex",
      gap: "5%",
      paddingTop: "1rem",
    },
    carouselItem: {
      backgroundColor: "white",
      height: "100%",
      boxShadow: "0 3px 10px lightgrey",
      display: "flex",
      flexDirection: "column",
      padding: "4%",
      "&:hover": {
        boxShadow: "0 3px 12px darkgrey",
      },
      width: "250px",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  }));
  const classes = useStyles();

  const handleRazorpayResponse = async (
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature
  ) => {
    if (razorpay_payment_id) {
      console.log("Successful");
      // Swal.fire({
      //   title: `Confirm donation?`,
      //   // text: `Vehicle Tag: ${vehicleTag}`,
      //   icon: "warning",
      //   showCancelButton: true,
      //   confirmButtonColor: "#3acebf",
      //   cancelButtonColor: "#d33",
      //   confirmButtonText: "Yes, Confirm!",
      //   showLoaderOnConfirm: true,
      // }).then(async (result) => {
      //   if (result.isConfirmed) {
      Swal.fire("Donation has been made successfully", `Amount: $}`, "success");
      // } else {
      //   Swal.showValidationMessage(`Request failed`);
      //   // console.log("Success=true not returned");
      // }
      // });
    } else {
      // Swal.showValidationMessage(`Request failed`);
      console.log("Unsuccessful");
    }
  };

  const displayRazorPay = async () => {
    console.log("Hello");
    const res = await loadRazorPay();

    if (!res) {
      alert("Razorpay SDK Failed. Please check your connection.");
      return;
    }

    const { data } = await axios.post("/donation/razorpay");

    // console.log(data);

    const options = {
      key: "rzp_test_vdRitP9HytsLLm", // Enter the Key ID generated from the Dashboard
      // amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      // currency: "INR",
      amount: data.amount,
      currency: data.currency,
      order_id: data.id,
      name: "NGO Buddy",
      description: "Test Transaction",
      // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        handleRazorpayResponse(
          response.razorpay_payment_id,
          response.razorpay_order_id,
          response.razorpay_signature
        );
      },
      prefill: {
        name: "Ram",
        // name: userInfo.data.name,
        email: "ram@example.com",
        // email: userInfo.data.email,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#DC143C",
      },
    };
    var paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#87d5fa" }}>
        <div style={{ paddingTop: "70px", backgroundColor: "#87d5fa" }}>
          <h1 style={{ textAlign: "center", fontSize: "50px" }}>Gift Card</h1>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Card
              style={{
                marginBottom: "100px",
                borderRadius: "30px",
                boxShadow: "5px 5px 25px 5px black",
                width: "70%",
              }}
            >
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={7}>
                  <h2 style={{ marginLeft: "10%" }}>Occasion</h2>
                  <Paper square>
                    <Tabs
                      value={value}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={handleChange}
                      aria-label="disabled tabs example"
                    >
                      <Tab label="Anniversary" />
                      <Tab label="Birthday" />
                      <Tab label="Celebration" />
                    </Tabs>
                  </Paper>
                  <img
                    style={{ width: "400px" }}
                    src={giftcard}
                    alt="creditcard"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={5}>
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    style={{ marginRight: "30px" }}
                    justifyContent="center"
                  >
                    <Card
                      style={{
                        position: "relative",
                        right: "40px",
                        borderRadius: "30px",
                        margin: "30px",
                        marginRight: "100px",
                        padding: "30px",
                        boxShadow: "5px 5px 25px 5px black",
                      }}
                    >
                      <h2>Gift Card value : Rs.{giftCardValue}</h2>
                      <div style={{ display: "flex" }}>
                        <Button
                          onClick={() => {
                            setGiftCardValue(499);
                          }}
                          style={{ marginRight: "10px" }}
                          variant="contained"
                          color="primary"
                        >
                          Rs.&nbsp;499
                        </Button>
                        <Button
                          onClick={() => {
                            setGiftCardValue(1499);
                          }}
                          style={{ marginRight: "10px" }}
                          variant="contained"
                          color="primary"
                        >
                          Rs.&nbsp;1499
                        </Button>
                        <Button
                          onClick={() => {
                            setGiftCardValue(2499);
                          }}
                          style={{ marginRight: "10px" }}
                          variant="contained"
                          color="primary"
                        >
                          Rs.&nbsp;2499
                        </Button>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <h3>Currency</h3>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Currency"
                          >
                            <MenuItem value={10}>INR</MenuItem>
                          </Select>
                        </div>
                        <div>
                          <h3>Amount</h3>
                          <Input
                            onChange={(e) => {
                              setGiftCardValue(e.target.value);
                            }}
                            style={{ marginRight: "10px" }}
                            defaultValue={`${giftCardValue}`}
                          />
                        </div>
                      </div>
                      <div>
                        <h2>Reciever Details :</h2>
                        <Input
                          id="input-with-icon-adornment"
                          placeholder="Reciever Name"
                          startAdornment={
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          }
                        />
                        <Input
                          id="input-with-icon-adornment"
                          placeholder="Reciever Email ID"
                          startAdornment={
                            <InputAdornment position="start">
                              <MailIcon />
                            </InputAdornment>
                          }
                        />
                        <Input
                          id="input-with-icon-adornment"
                          placeholder="Sender Name"
                          startAdornment={
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          }
                        />
                        <h3>Message</h3>
                        <Input
                          id="input-with-icon-adornment"
                          placeholder="Message"
                          startAdornment={
                            <InputAdornment position="start">
                              <ChatIcon />
                            </InputAdornment>
                          }
                        />
                        <br />
                        <br />
                        <Button
                          style={{
                            marginLeft: "55px",
                            borderRadius: "999px",
                            width: "50%",
                            margin: "5px",
                            backgroundColor: "#03ab14",
                            // backgroundImage: "linear-gradient(to right, yellow , red)",
                            color: "white",
                          }}
                        >
                          <b>SEND</b>
                        </Button>
                      </div>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GiftCard;
