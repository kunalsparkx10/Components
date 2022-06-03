import React, { useEffect, useState } from "react";
// import ReactFlow from 'react-flow-renderer';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
// import cover from "../assets/cover.jpg";
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
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import PetsIcon from "@material-ui/icons/Pets";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import PersonIcon from "@material-ui/icons/Person";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { Avatar } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";
import axios from "axios";
import Swal from "sweetalert2";
import { TextField } from "@material-ui/core";

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
const EventCard = (props) => {
  const [openVolunteer, setOpenVolunteer] = useState(false);
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const handleOpenVolunteer = () => {
    setOpenVolunteer(true);
  };

  const handleCloseVolunteer = () => {
    setOpenVolunteer(false);
  };

  const handleRazorpayResponse = async (
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature
  ) => {
    if (razorpay_payment_id) {
      console.log("Successful");
      Swal.fire("Donation has been made successfully", `Amount: $}`, "success");
    } else {
      console.log("Unsuccessful");
    }
  };

  const displayRazorPay = async () => {
    console.log("Hello");
    const res = await loadRazorPay();

    if (!res) {
      alert("Razorpay SDK Failed. Please check your connection.");
      return null;
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
  };
  return (
    <>
      <Card style={{ width: "320px", borderRadius: "30px", margin: "15px" }}>
        <img
          style={{ borderRadius: "30px", width: "300px", margin: "10px" }}
          src={props.img}
          alt="img"
        />
        {/* <br /> */}
        <div style={{ margin: "10px" }}>
          <h3>{props.title}</h3>
          <div style={{ display: "flex" }}>
            <Avatar>RS</Avatar>{" "}
            <p style={{ marginTop: "7px", marginLeft: "15px" }}>
              By Rajesh Sawaliwala
            </p>
          </div>
          <div style={{ display: "flex", marginLeft: "5px" }}>
            <h3>Rs. 9,30,000</h3>{" "}
            <p style={{ marginTop: "18px", marginLeft: "5px" }}>
              raised out of Rs. 29,00,000
            </p>
          </div>
          <LinearProgress
            color="secondary"
            style={{ margin: "10px" }}
            variant="determinate"
            value={50}
          />
          <Button
            style={{
              borderRadius: "30px",
              backgroundColor: "#dbf2ff",
              margin: "5px",
            }}
          >
            <QueryBuilderIcon style={{ marginRight: "5px" }} /> 9 days left
          </Button>
          <Button
            style={{
              borderRadius: "30px",
              backgroundColor: "#dbf2ff",
              margin: "5px",
            }}
          >
            <SupervisorAccountIcon style={{ marginRight: "5px" }} />
            881 Contributors
          </Button>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Button
                onClick={handleOpenVolunteer}
                color="primary"
                variant="contained"
                style={{
                  marginLeft: "55px",
                  margin: "5px",
                  // backgroundImage: "linear-gradient(to right, yellow , red)",
                  color: "white",
                  borderRadius: "999px",
                }}
              >
                <b>Volunteer</b>
              </Button>
            </Link>
            {/* <Button style={{ borderRadius: "30px", backgroundColor: "#dbf2ff", margin: "5px" }}><QueryBuilderIcon style={{ marginRight: "5px" }} />  9 days left</Button> */}
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Button
                style={{
                  marginLeft: "55px",
                  margin: "5px",
                  backgroundColor: "#03ab14",
                  // backgroundImage: "linear-gradient(to right, yellow , red)",
                  color: "white",
                  borderRadius: "999px",
                }}
              >
                <b>Donate Now</b>
              </Button>
            </Link>
            <br />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ marginTop: "10px" }}>
              <FacebookShareButton
                title="Share on Facebook"
                url="http://www.xcitedu.com"
                quote="Donate and help the society. Neelam's Life's mission is to give abandoned people with disabilities"
                hashtag={"#NGO"}
              >
                <FacebookIcon size={40} round={true} />
              </FacebookShareButton>
              <WhatsappShareButton
                title="Donate and help the society. Neelam's Life's mission is to give abandoned people with disabilities"
                url="http://www.xcitedu.com"
                separator={" : "}
              >
                <WhatsappIcon size={40} round={true} />
              </WhatsappShareButton>
            </div>
            {/* <Button style={{ borderRadius: "30px", backgroundColor: "#dbf2ff", margin: "5px" }}><QueryBuilderIcon style={{ marginRight: "5px" }} />  9 days left</Button> */}
            <Link
              to="/event/particularEvent"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                style={{
                  marginLeft: "55px",
                  marginTop: "5px",
                  margin: "5px",
                  backgroundColor: "orange",
                  // backgroundImage: "linear-gradient(to right, yellow , red)",
                  color: "white",
                  borderRadius: "999px",
                }}
              >
                <b>Read More</b>
              </Button>
            </Link>
            <br />
          </div>
        </div>
      </Card>
      {/* <Modal
                // aria-labelledby="spring-modal-title"
                // aria-describedby="spring-modal-description"
                // className={classes.modal}
                open={openVolunteer}
                onClose={handleCloseVolunteer}
            // closeAfterTransition
            // BackdropComponent={Backdrop}
            // BackdropProps={{
            //   timeout: 500,
            // }}
            >Hello
            </Modal> */}
    </>
  );
};

export default EventCard;
