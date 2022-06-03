// import React, { useEffect, useState } from "react";
// // import ReactFlow from 'react-flow-renderer';
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// // import cover from "../assets/cover.jpg";
// import liquidCheese from "../assets/liquid-cheese2.svg";
// import donationbox from "../assets/donationbox.png";
// import student from "../assets/student-removebg.png";
// import cardimg1 from "../assets/cardimg1.jpg";
// import Button from "@material-ui/core/Button";
// import Footer from "./Footer";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
// import HomeIcon from "@material-ui/icons/Home";
// import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
// import Paper from "@material-ui/core/Paper";
// import InputBase from "@material-ui/core/InputBase";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";
// import DirectionsIcon from "@material-ui/icons/Directions";
// import students from "../assets/students.jpg";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
// import PetsIcon from "@material-ui/icons/Pets";
// import CastForEducationIcon from "@material-ui/icons/CastForEducation";
// import PersonIcon from "@material-ui/icons/Person";
// import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
// import { Avatar } from "@material-ui/core";
// import LinearProgress from "@material-ui/core/LinearProgress";
// import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
// import {
//   FacebookShareButton,
//   WhatsappShareButton,
//   LinkedinShareButton,
//   WhatsappIcon,
//   FacebookIcon,
//   LinkedinIcon,
// } from "react-share";
// import EventCard from "./EventCard";
// import alanBtn from "@alan-ai/alan-sdk-web";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { Modal, TextField } from "@material-ui/core";
// import Navbar from "./Navbar";
// // import Card from '@material-ui/core/Card';
// // import CardActions from '@material-ui/core/CardActions';
// // import CardContent from '@material-ui/core/CardContent';
// // import Button from '@material-ui/core/Button';
// // import Typography from '@material-ui/core/Typography';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: "2px 4px",
//     display: "flex",
//     alignItems: "center",
//     width: 400,
//   },
//   input: {
//     marginLeft: theme.spacing(1),
//     flex: 1,
//   },
//   iconButton: {
//     padding: 10,
//   },
//   divider: {
//     height: 28,
//     margin: 4,
//   },
//   heroContent: {
//     // backgroundColor: "#FEFFFF",
//     padding: theme.spacing(10, 0, 4),
//     backgroundColor: "#ffaa00",
//     backgroundImage: `url(${liquidCheese})`,
//     backgroundAttachment: "fixed",
//     backgroundSize: "cover",
//   },
//   header: {
//     height: "85vh",
//     backgroundSize: "cover",
//     backgroundPosition: "65% 50%",
//     // backgroundImage: `url(${cover})`,
//     // backgroundSize: "cover",
//     // backgroundPosition: "65% 50%",
//     // backgroundImage: `url(${liquidCheese})`,
//     // backgroundColor: "#ffaa00"
//   },
//   heroDesign: {
//     // border: "2px solid red",
//     backgroundColor: "#af0d24",
//     width: "150px",
//     height: "150px",
//     // marginTop: "-10%",
//     // position: "absolute",
//     "&:before": {
//       content: "''",
//       display: "block",
//       width: "170px",
//       height: "150px",
//       // backgroundColor: "black",
//       background: `linear-gradient(90deg, white 5px, transparent 1%) center,
//                   linear-gradient(white 5px, transparent 1%) center, grey`,
//       backgroundSize: "6px 6px",
//       marginTop: "20px",
//       position: "absolute",
//       zIndex: "-1",
//     },
//   },
//   heroTextContainer: {
//     // margin: "0 10% 0 10%",
//     color: "black",
//     padding: "0 10% !important",
//     position: "relative",
//     zIndex: "1",
//   },
//   heroText: {
//     // borderLeft: "3px solid #dfdfdf",
//     padding: theme.spacing(6),
//     // "& h3": {
//     //   color: "grey",
//     //   textTransform: "lowercase",
//     //   fontWeight: "bold",
//     //   // letterSpacing: "1px",
//     // },
//   },
//   heroImageItem: {
//     display: "grid",
//     placeItems: "center",
//   },
//   heroImageDiv: {
//     width: "30vw",
//     height: "30vw",
//     border: "2px solid black",
//     borderRadius: "50%",
//     overflow: "hidden",
//     zIndex: 1,
//   },
//   heroImage: {
//     width: "60vw",
//     marginLeft: "-30vw",
//     marginTop: "10%",
//   },
//   // heroText: {
//   //   // margin: "0 10% 0 10%",
//   //   color: "black",
//   // },
//   halfCircle: {
//     height: "75vh",
//     width: "75vh",
//     border: "2px solid black",
//     borderRadius: "50%",
//     position: "absolute",
//     marginLeft: "calc(100vw - 37.5vh)",
//     marginTop: "5vh",
//   },
//   cardGrid: {
//     backgroundColor: "#FEFFFF",
//     // paddingBottom: theme.spacing(8),
//     padding: theme.spacing(8, 16),
//     [theme.breakpoints.down("md")]: {
//       padding: theme.spacing(4),
//     },
//     [theme.breakpoints.down("sm")]: {
//       padding: theme.spacing(2),
//     },
//     alignItems: "center",
//   },
//   heading: {
//     width: "100%",
//     fontSize: 30,
//     fontWeight: "500",
//     // textDecoration: "underline",
//   },
//   card: {
//     backgroundColor: "white",
//     height: "100%",
//     boxShadow: "5px 5px 5px 5px lightgrey",
//     display: "flex",
//     flexDirection: "column",
//     padding: "4%",
//     "&:hover": {
//       boxShadow: "0 3px 12px darkgrey",
//     },
//   },
//   cardMedia: {
//     margin: "2%",
//     paddingTop: "56.25%",
//     borderRadius: "0.25rem",
//   },
//   cardContent: {
//     flexGrow: 1,
//     textAlign: "center",
//   },
//   carousel: {
//     width: "100%",
//   },
//   carouselItemContainer: {
//     display: "flex",
//     gap: "5%",
//     paddingTop: "1rem",
//   },
//   carouselItem: {
//     backgroundColor: "white",
//     height: "100%",
//     boxShadow: "0 3px 10px lightgrey",
//     display: "flex",
//     flexDirection: "column",
//     padding: "4%",
//     "&:hover": {
//       boxShadow: "0 3px 12px darkgrey",
//     },
//     width: "250px",
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
// }));

// const loadRazorPay = async () => {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";

//     // script.onload = displayRazorPay;
//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// };

// function Home({ history }) {
//   const classes = useStyles();
//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;
//   const [value, setValue] = React.useState(2);
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [amount, setAmount] = useState(0);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleRazorpayResponse = async (
//     razorpay_payment_id,
//     razorpay_order_id,
//     razorpay_signature
//   ) => {
//     if (razorpay_payment_id) {
//       console.log("Successful");
//       // Swal.fire({
//       //   title: `Confirm donation?`,
//       //   // text: `Vehicle Tag: ${vehicleTag}`,
//       //   icon: "warning",
//       //   showCancelButton: true,
//       //   confirmButtonColor: "#3acebf",
//       //   cancelButtonColor: "#d33",
//       //   confirmButtonText: "Yes, Confirm!",
//       //   showLoaderOnConfirm: true,
//       // }).then(async (result) => {
//       //   if (result.isConfirmed) {
//       Swal.fire("Donation has been made successfully", `Amount: $}`, "success");
//       // } else {
//       //   Swal.showValidationMessage(`Request failed`);
//       //   // console.log("Success=true not returned");
//       // }
//       // });
//     } else {
//       // Swal.showValidationMessage(`Request failed`);
//       console.log("Unsuccessful");
//     }
//   };

//   const displayRazorPay = async () => {
//     console.log("Hello");
//     const res = await loadRazorPay();

//     if (!res) {
//       alert("Razorpay SDK Failed. Please check your connection.");
//       return;
//     }

//     const { data } = await axios.post("/donation/razorpay");

//     // console.log(data);

//     const options = {
//       key: "rzp_test_vdRitP9HytsLLm", // Enter the Key ID generated from the Dashboard
//       // amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//       // currency: "INR",
//       amount: data.amount,
//       currency: data.currency,
//       order_id: data.id,
//       name: "Full Stack Simplified",
//       description: "Test Transaction",
//       // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//       handler: function (response) {
//         handleRazorpayResponse(
//           response.razorpay_payment_id,
//           response.razorpay_order_id,
//           response.razorpay_signature
//         );
//       },
//       prefill: {
//         name: "Gaurav Kumar",
//         // name: userInfo.data.name,
//         email: "gaurav.kumar@example.com",
//         // email: userInfo.data.email,
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#DC143C",
//       },
//     };
//     var paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       {/* <Header /> */}
//       <Navbar />
//       <>
//         <div className={classes.heroContent}>
//           <Container maxWidth="xl">
//             <Grid container alignItems="center" className={classes.header}>
//               <Grid
//                 item
//                 xs={12}
//                 md={6}
//                 lg={4}
//                 className={classes.heroText}
//                 style={{ marginLeft: "50px", marginRight: "30px" }}
//               >
//                 <Typography
//                   variant="h3"
//                   gutterBottom
//                   style={{ fontStyle: "bold" }}
//                 >
//   <span style={{ color: "#f75f00" }}>
//     <strong>भरोसेमंद</strong>
//   </span>{" "}
//   और{" "}
//   <span style={{ color: "#f75f00" }}>
//     <strong>पारदर्शी</strong>
//   </span>{" "}
//   जन-सहयोग मंच
// </Typography>
//                 <br />
//                 <div style={{ display: "flex" }}>
//                   <div style={{ marginRight: "10px" }}>
//                     <AddShoppingCartIcon
//                       style={{ marginLeft: "30px", fontSize: "50px" }}
//                     />
// <h3 style={{ textAlign: "center" }}>रुपये. 150 करोड़+</h3>
// <p style={{ textAlign: "center" }}>योग्य दान</p>
//                   </div>
//                   <div style={{ marginRight: "10px" }}>
//                     <SupervisorAccountIcon
//                       style={{ marginLeft: "30px", fontSize: "50px" }}
//                     />
// <h3 style={{ textAlign: "center" }}>5 लाखों +</h3>
// <p style={{ textAlign: "center" }}>अनोखा दाताओं</p>
//                   </div>
//                   <div style={{ marginRight: "10px" }}>
//                     <HomeIcon
//                       style={{ marginLeft: "30px", fontSize: "50px" }}
//                     />
// <h3 style={{ textAlign: "center" }}>1000+</h3>
// <p style={{ textAlign: "center" }}>NGOs असर पड़ा</p>
//                   </div>
//                 </div>
//                 {/* <Typography variant="h6" gutterBottom>
//                   Learn How To Build Websites & Apps Write A Code Or Start A
//                   Business

//                 </Typography> */}
//                 <br />
//                 {!userInfo ? (
//                   <Link
//                     to={"/signup"}
//                     style={{ textDecoration: "none", color: "white" }}
//                   >
//                     <Button
//                       style={{
//                         width: "250px",
//                         borderRadius: "999px",
//                         backgroundColor: "#03ab14",
//                         color: "white",
//                       }}
//                       variant="contained"
//                     >
//                       हमसे जुड़ें
//                     </Button>
//                   </Link>
//                 ) : (
//                   ""
//                 )}
//               </Grid>
//               {/* <ReactFlow elements={elements} /> */}
//               <Grid
//                 item
//                 xs={12}
//                 md={6}
//                 lg={6}
//                 className={classes.heroText}
//                 style={{ marginLeft: "50px" }}
//               >
//                 <img src={donationbox} alt="img" width="90%" />
//                 {/* <Typography variant="h4" gutterBottom>
//                   Learn HTML , CSS , Web Apps & More
//                 </Typography>
//                 <Typography variant="subtitle1" gutterBottom>
//                   Learn How To Build Websites & Apps Write A Code Or Start A
//                   Business

//                 </Typography> */}
//               </Grid>
//             </Grid>
//           </Container>
//         </div>
//         <br />
//         <br />
//         <br />
//         {/* Card and search bar */}

//         <Grid
//           container
//           spacing={0}
//           direction="column"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Card
//             style={{
//               width: "70%",
//               borderRadius: "30px",
//               boxShadow: "5px 5px 25px 5px black",
//             }}
//           >
//             <Grid container style={{ padding: "10px" }}>
//               <Grid item lg={4} md={4} sm={4}>
//                 <br />
//                 <img
//                   style={{
//                     width: "300px",
//                     borderRadius: "30px",
//                     padding: "10px",
//                   }}
//                   src={students}
//                   alt="img"
//                 />
//               </Grid>
//               <Grid item lg={8} md={8} sm={8}>
// <h2>
//   हजारों गरीब बच्चों को शिक्षित करने और उन्हें एक उज्ज्वल भविष्य
//   देने के लिए संकल्प के साथ हाथ मिलाएं।
// </h2>
// <p>
//   NGO गरीबों और वंचितों को शिक्षा देने और उन्हें वह जीवन देने के
//   लिए अथक प्रयास करता है जिसके वे हकदार हैं।
// </p>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Modal
//                     open={open}
//                     aria-labelledby="simple-modal-title"
//                     aria-describedby="simple-modal-description"
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         backgroundColor: "white",
//                       }}
//                     >
//                       <TextField
//                         id="outlined-basic"
//                         label="Enter Amount"
//                         variant="outlined"
//                         onChange={(e) => setAmount(e.target.value)}
//                       />
//                       <Button
//                         onClick={() => {
//                           displayRazorPay();
//                           setOpen(false);
//                         }}
//                       >
//                         {" "}
//                         दान करें
//                       </Button>
//                     </div>
//                   </Modal>
//                 </div>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   // onClick={displayRazorPay}
//                   onClick={() => setOpen(true)}
//                 >
//                   अभी दान कीजिए
//                 </Button>
//               </Grid>
//             </Grid>
//           </Card>
//           <br />
//           <Paper
//             style={{
//               margin: "20px",
//               border: "4px #f75f00 solid",
//               width: "60%",
//             }}
//             component="form"
//             className={classes.root}
//           >
//             {/* <IconButton className={classes.iconButton} aria-label="menu">
//             <MenuIcon />
//           </IconButton> */}
//             <InputBase
//               className={classes.input}
//               style={{ width: "120%" }}
//               placeholder="Search by Campaign Title Or NGO name    "
//               inputProps={{ "aria-label": "Search for NGOs" }}
//             />
//             <IconButton className={classes.iconButton} aria-label="search">
//               <SearchIcon />
//             </IconButton>
//             <Divider className={classes.divider} orientation="vertical" />
//             <IconButton
//               color="primary"
//               className={classes.iconButton}
//               aria-label="directions"
//             >
//               <DirectionsIcon />
//             </IconButton>
//           </Paper>
//         </Grid>
//         {/* CATEGORIES */}
//         <div
//           style={{
//             backgroundColor: "#dbf2ff",
//             paddingLeft: "10%",
//             paddingRight: "10%",
//             paddingTop: "3%",
//             paddingBottom: "3%",
//           }}
//         >
//           <h2>श्रेणियाँ</h2>
//           <Paper square>
//             <Tabs
//               value={value}
//               indicatorColor="primary"
//               textColor="primary"
//               onChange={handleChange}
//               aria-label="disabled tabs example"
//             >
//               <Tab
//                 label={
//                   <>
//                     <NotificationImportantIcon />
//                     Urgent
//                   </>
//                 }
//               />
//               <Tab
//                 label={
//                   <>
//                     <PetsIcon />
//                     Animals
//                   </>
//                 }
//               />
//               <Tab
//                 label={
//                   <>
//                     <CastForEducationIcon />
//                     Education
//                   </>
//                 }
//               />
//               <Tab
//                 label={
//                   <>
//                     <PersonIcon />
//                     Elderly
//                   </>
//                 }
//               />
//               <Tab
//                 label={
//                   <>
//                     <LocalHospitalIcon />
//                     Medical
//                   </>
//                 }
//               />
//               <Tab
//                 label={
//                   <>
//                     <HomeIcon />
//                     Disaster Relief
//                   </>
//                 }
//               />
//             </Tabs>
//           </Paper>
//           {/* EVENT CARDS */}
//           <br />
//           <div style={{ display: "flex", flexWrap: "wrap" }}>
//             <EventCard />
//             <EventCard />
//             <EventCard />
//             <EventCard />
//             <EventCard />
//             <EventCard />
//           </div>
//         </div>
//         {/* Text with GIFS */}
//         {/* <Container className={classes.cardGrid}>
//           <Grid container spacing={6}>
//             <Grid item xs={12} sm={6} md={4}>
//               <Card className={classes.card}>
//                 <CardMedia
//                   className={classes.cardMedia}
//                   // image={feature1}
//                   // image="https://jana-sa.com/image/about-us/e762bf4b8cbc5ee9e70e7e087f99e5c3.gif"
//                   image="https://cdn.dribbble.com/users/2514124/screenshots/5439070/girl_3.gif"
//                   title="Image title"
//                 />
//                 <CardContent className={classes.cardContent}>
//                   <Typography gutterBottom variant="h" component="h2">
//                     Life Time Access
//                   </Typography>
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book. It has survived not only five centuries, but
//                   also the leap into electronic typesetting, remaining
//                   essentially unchanged.
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Card className={classes.card}>
//                 <CardMedia
//                   className={classes.cardMedia}
//                   // image={feature2}
//                   image="https://i.pinimg.com/originals/16/9c/11/169c11293f5c08a325ee1bbc8a0d4cb8.gif"
//                   title="Image title"
//                 />
//                 <CardContent className={classes.cardContent}>
//                   <Typography gutterBottom variant="h" component="h2">
//                     Low Cost
//                   </Typography>
//                   यह एक लंबे समय से स्थापित तथ्य है कि एक पाठक विचलित हो जाएगा
//                   किसी पृष्ठ के लेआउट को देखते समय उसकी पठनीय सामग्री द्वारा।
//                   लोरेम इप्सम का उपयोग करने का मुद्दा यह है कि इसमें 'सामग्री' का उपयोग करने के विरोध में अक्षरों का अधिक या कम सामान्य वितरण होता है। यहाँ, सामग्री यहाँ', जिससे यह पठनीय अंग्रेजी जैसा दिखता है।
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Card className={classes.card}>
//                 <CardMedia
//                   className={classes.cardMedia}
//                   // image={feature3}
//                   // image="https://mintbook.com/assetsNew/img/university.gif"
//                   image="https://www.excelsisdeo.com/images/AlphaTestersAnimation_60.gif"
//                   title="Image title"
//                 />
//                 <CardContent className={classes.cardContent}>
//                   <Typography gutterBottom variant="h" component="h2">
//                   आसानी से सीखें
//                   </Typography>
//                   लोरेम इप्सम के मार्ग के कई रूप उपलब्ध हैं, लेकिन बहुमत को किसी न किसी रूप में परिवर्तन का सामना करना पड़ा है, हास्य इंजेक्शन द्वारा, या यादृच्छिक शब्द जो थोड़े से भी विश्वसनीय नहीं लगते हैं. यदि आप लोरेम इप्सम के मार्ग का उपयोग करने जा रहे हैं,आपको यह सुनिश्चित करने की आवश्यकता है कि पाठ के बीच में कुछ भी शर्मनाक नहीं छिपा है।
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container> */}
//       </>
//       <Footer />
//     </React.Fragment>
//   );
// }

// export default Home;
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
// import cover from "../assets/cover.jpg";
import liquidCheese from "../assets/liquid-cheese2.svg";
import donationbox from "../assets/donationbox.png";
import student from "../assets/student-removebg.png";
import cardimg1 from "../assets/cardimg1.jpg";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
import EventCard from "./EventCard";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useSpeechSynthesis } from "react-speech-kit";

// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import Box from "@material-ui/core/Box";
// import cardimg1 from "../assets/cardimg1.jpg"
import axios from "axios";
import Swal from "sweetalert2";
import { Modal, TextField } from "@material-ui/core";
import Navbar from "./Navbar";
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
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
  // heroText: {
  //   // margin: "0 10% 0 10%",
  //   color: "black",
  // },
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

function Home({ history }) {
  const classes = useStyles();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // const [value, setValue] = React.useState(2);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [value, setValue] = useState(0);
  const [openVolunteer, setOpenVolunteer] = useState(false);

  const handleOpenVolunteer = () => {
    setOpenVolunteer(true);
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
      name: "Full Stack Simplified",
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
        name: "Gaurav Kumar",
        // name: userInfo.data.name,
        email: "gaurav.kumar@example.com",
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

  const { speak } = useSpeechSynthesis();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Header /> */}
      <Navbar />
      <>
        <div className={classes.heroContent}>
          <Container maxWidth="xl">
            <Grid container alignItems="center" className={classes.header}>
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                className={classes.heroText}
                style={{ marginLeft: "50px", marginRight: "30px" }}
              >
                <Typography
                  variant="h3"
                  gutterBottom
                  style={{ fontStyle: "bold" }}
                >
                  <span style={{ color: "#f75f00" }}>
                    <strong>भरोसेमंद</strong>
                  </span>{" "}
                  और{" "}
                  <span style={{ color: "#f75f00" }}>
                    <strong>पारदर्शी</strong>
                  </span>{" "}
                  जन-सहयोग मंच
                </Typography>
                <br />
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "10px" }}>
                    <AddShoppingCartIcon
                      style={{ marginLeft: "30px", fontSize: "50px" }}
                    />
                    <h3 style={{ textAlign: "center" }}>रुपये. 150 करोड़+</h3>
                    <p style={{ textAlign: "center" }}>योग्य दान</p>
                  </div>
                  <div style={{ marginRight: "10px" }}>
                    <SupervisorAccountIcon
                      style={{ marginLeft: "30px", fontSize: "50px" }}
                    />
                    <h3 style={{ textAlign: "center" }}>5 लाखों +</h3>
                    <p style={{ textAlign: "center" }}>अनोखा दाताओं</p>
                  </div>
                  <div style={{ marginRight: "10px" }}>
                    <HomeIcon
                      style={{ marginLeft: "30px", fontSize: "50px" }}
                    />
                    <h3 style={{ textAlign: "center" }}>1000+</h3>
                    <p style={{ textAlign: "center" }}>NGOs असर पड़ा</p>
                  </div>
                </div>
                <br />
                {!userInfo ? (
                  <>
                    <Link
                      to={"/signup"}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Button
                        style={{
                          width: "250px",
                          borderRadius: "999px",
                          backgroundColor: "#03ab14",
                          color: "white",
                        }}
                        variant="contained"
                      >
                        हमसे जुड़ें
                      </Button>
                    </Link>
                    <Button
                      style={{
                        width: "250px",
                        borderRadius: "999px",
                        backgroundColor: "#03ab14",
                        color: "white",
                        marginTop: "20px",
                      }}
                      variant="contained"
                      onClick={() =>
                        speak({
                          text: "NGO Buddy is the most trusted and transparent Crowdfunding Platform. We are grateful to 2 lakh+ donors who have contributed to the social causes of 1000+ NGO's which in total has led to the fundraising of more than 50 crore in donations. ",
                        })
                      }
                    >
                      बोलो
                    </Button>
                  </>
                ) : (
                  <Button
                    style={{
                      width: "250px",
                      borderRadius: "999px",
                      backgroundColor: "#03ab14",
                      color: "white",
                      marginTop: "20px",
                    }}
                    variant="contained"
                    onClick={() =>
                      speak({
                        text: "NGO Buddy is the most trusted and transparent Crowdfunding Platform. We are grateful to 2 lakh+ donors who have contributed to the social causes of 1000+ NGO's which in total has led to the fundraising of more than 50 crore in donations. ",
                      })
                    }
                  >
                    बोलो
                  </Button>
                )}
              </Grid>
              {/* <ReactFlow elements={elements} /> */}
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                className={classes.heroText}
                style={{ marginLeft: "50px" }}
              >
                <img src={donationbox} alt="img" width="90%" />
              </Grid>
            </Grid>
          </Container>
        </div>
        <br />
        <br />
        <br />
        {/* Card and search bar */}

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Card
            style={{
              width: "70%",
              borderRadius: "30px",
              boxShadow: "5px 5px 25px 5px black",
            }}
          >
            <Grid container style={{ padding: "10px" }}>
              <Grid item lg={4} md={4} sm={4}>
                <br />
                <img
                  style={{
                    width: "300px",
                    borderRadius: "30px",
                    padding: "10px",
                  }}
                  src={students}
                  alt="img"
                />
              </Grid>
              <Grid item lg={8} md={8} sm={8}>
                <h2>
                  हजारों गरीब बच्चों को शिक्षित करने और उन्हें एक उज्ज्वल भविष्य
                  देने के लिए संकल्प के साथ हाथ मिलाएं।
                </h2>
                <p>
                  NGO गरीबों और वंचितों को शिक्षा देने और उन्हें वह जीवन देने के
                  लिए अथक प्रयास करता है जिसके वे हकदार हैं।
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Modal
                    open={open}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "white",
                      }}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Enter Amount"
                        variant="outlined"
                        onChange={(e) => setAmount(e.target.value)}
                      />
                      <Button
                        onClick={() => {
                          displayRazorPay();
                          setOpen(false);
                        }}
                      >
                        {" "}
                        दान करें
                      </Button>
                    </div>
                  </Modal>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  // onClick={displayRazorPay}
                  onClick={() => setOpen(true)}
                >
                  दान करें
                </Button>
              </Grid>
            </Grid>
          </Card>
          <br />
          <Paper
            style={{
              margin: "20px",
              border: "4px #f75f00 solid",
              width: "60%",
            }}
            component="form"
            className={classes.root}
          >
            {/* <IconButton className={classes.iconButton} aria-label="menu">
            <MenuIcon />
          </IconButton> */}
            <InputBase
              className={classes.input}
              style={{ width: "120%" }}
              placeholder="Search by Campaign Title Or NGO name    "
              inputProps={{ "aria-label": "Search for NGOs" }}
            />
            <IconButton className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="directions"
            >
              <DirectionsIcon />
            </IconButton>
          </Paper>
        </Grid>
        {/* CATEGORIES */}
        <div
          style={{
            backgroundColor: "#dbf2ff",
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingTop: "3%",
            paddingBottom: "3%",
          }}
        >
          <h2>श्रेणियाँ</h2>
          <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab
                label={
                  <>
                    <NotificationImportantIcon />
                    अति आवश्यक
                  </>
                }
              />
              <Tab
                label={
                  <>
                    <PetsIcon />
                    जानवरों
                  </>
                }
              />
              <Tab
                label={
                  <>
                    <CastForEducationIcon />
                    शिक्षा
                  </>
                }
              />
              <Tab
                label={
                  <>
                    <PersonIcon />
                    बुज़ुर्ग
                  </>
                }
              />
              <Tab
                label={
                  <>
                    <LocalHospitalIcon />
                    मेडिकल
                  </>
                }
              />
              <Tab
                label={
                  <>
                    <HomeIcon />
                    आपदा राहत
                  </>
                }
              />
            </Tabs>
          </Paper>
          {value === 0 ? (
            <>
              <br />
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <EventCard
                  img={cardimg1}
                  title="कमजोर बच्चों की मदद करने की नीलम की इच्छा..."
                />
                <EventCard
                  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFhffduNgW4touPjcJwIwi3Hsr9pWQhF2YPQGgEKUrVC6K7X6fwDXuYDd8DP6jc5yWjY&usqp=CAU"
                  title="जुहू बीच, मुंबई में समुद्र तट की सफाई अभियान एक बहुत बड़ी सफलता थी ..."
                />
                <EventCard
                  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGqihl2RTKrX2V5W4d2916TUky-pWcf0MvA&usqp=CAU"
                  title="कृपया इस मरीज की मदद करें। उसे लगभग एक साल से लक्षण हो रहे हैं ..."
                />
                <EventCard
                  img="https://www.bestshowerchairs.com/wp-content/uploads/2017/08/bedridden-patient-care.jpg"
                  title="कृपया इस मरीज की मदद करें। उसे लगभग एक साल से लक्षण हो रहे हैं ..."
                />
              </div>
            </>
          ) : (
            ""
          )}
          {value === 1 ? (
            <>
              <br />
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <EventCard
                  img="https://files.globalgiving.org/pfil/21710/ph_21710_106494.jpg?m=1493378925000"
                  title="इंटरनेशनल एलीफेंट फाउंडेशन ने इस महान पहल का समर्थन किया..."
                />
                <EventCard
                  img="https://upload.wikimedia.org/wikipedia/commons/a/ad/Dogs_1123.jpg"
                  title="ये हैं 5 टिप्स जिनसे आप आवारा कुत्तों की सुरक्षित मदद कर सकते हैं..."
                />
              </div>
            </>
          ) : (
            ""
          )}
          {value === 2 ? (
            <>
              <br />
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <EventCard
                  img="https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/6/Desk/2020_6$largeimg_1693180643.jpg"
                  title="मुमनान नगर के गाँव को गणित पढ़ाया जाता था जिसके माध्यम से वे ..."
                />
                <EventCard
                  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77hp9HQ9YzRmkbK1lF_oAroVrT7DpOcNoFFDdErEj9rweoxxV5FcQrv7pfLKKKukGddo&usqp=CAU"
                  title="शिक्षण का नया इंटरैक्टिव तरीका लागू किया गया है जहां छात्र बातचीत करते हैं ..."
                />
                {/* <EventCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFhffduNgW4touPjcJwIwi3Hsr9pWQhF2YPQGgEKUrVC6K7X6fwDXuYDd8DP6jc5yWjY&usqp=CAU" title="जुहू बीच, मुंबई में समुद्र तट की सफाई अभियान एक बहुत बड़ी सफलता थी..." /> */}
                {/* <EventCard img={cardimg1} title="कमजोर बच्चों की मदद करने की नीलम की इच्छा ..." /> */}
              </div>
            </>
          ) : (
            ""
          )}
          {value === 3 ? (
            <>
              <br />
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <EventCard
                  img="https://www.bestshowerchairs.com/wp-content/uploads/2017/08/bedridden-patient-care.jpg"
                  title="कृपया इस मरीज की मदद करें। उसे लगभग एक साल से लक्षण हो रहे हैं ..."
                />

                <EventCard
                  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGqihl2RTKrX2V5W4d2916TUky-pWcf0MvA&usqp=CAU"
                  title="कृपया इस मरीज की मदद करें। उसे लगभग एक साल से लक्षण हो रहे हैं ..."
                />
              </div>
            </>
          ) : (
            ""
          )}
          {value === 4 ? (
            <>
              <br />
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <EventCard
                  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGqihl2RTKrX2V5W4d2916TUky-pWcf0MvA&usqp=CAU"
                  title="कृपया इस मरीज की मदद करें। उसे लगभग एक साल से लक्षण हो रहे हैं..."
                />

                <EventCard
                  img="https://www.bestshowerchairs.com/wp-content/uploads/2017/08/bedridden-patient-care.jpg"
                  title="कृपया इस मरीज की मदद करें। उसे लगभग एक साल से लक्षण हो रहे हैं ..."
                />
              </div>
            </>
          ) : (
            ""
          )}
          {value === 5 ? (
            <>
              <br />
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <EventCard
                  img="https://www.financialexpress.com/wp-content/uploads/2021/07/goa-flood-620x400.jpg"
                  title="पंजाब में बाढ़ ने कई लोगों को किया बेघर ..."
                />
              </div>
            </>
          ) : (
            ""
          )}

          {/* <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">

                  <Tab value={1} label={<><NotificationImportantIcon />Urgent</>} />
                  <Tab value={2} label={<><PetsIcon />Animals</>} />
                  <Tab value={3} label={<><CastForEducationIcon />Education</>} />
                  <Tab value={4} label={<><PersonIcon />Elderly</>} />
                  <Tab value={5} label={<><LocalHospitalIcon />Medical</>} />
                  <Tab value={6} label={<><HomeIcon />Disaster Relief</>} />
                </TabList>
              </Box>
              <TabPanel value="1">अंक एक</TabPanel>
              <TabPanel value="2">अंक दो</TabPanel>
              <TabPanel value="3">अंक तीन</TabPanel>
            </TabContext>
          </Box> */}

          {/* EVENT CARDS */}
          {/* <br />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div> */}
        </div>
      </>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
