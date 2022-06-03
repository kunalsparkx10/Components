import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import Navbar from '../../Components/Navbar/Navbar'
// import PerLoader from '../../Components/PerLoader/PerLoader';
// import { setAllBlogs, setIsLiked, setLatestBlog, setSingleBlog } from '../../redux/action/Action';
import "../css/particularBlog.css";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import cardimg1 from "../assets/cardimg1.jpg";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { LinearProgress } from "@material-ui/core";
import EventCard from "./EventCard";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import Button from "@material-ui/core/Button";
import ReactFlow from "react-flow-renderer";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ParticularEvent = () => {
  // like handler
  const [likeBlog, setLikeBlog] = useState(false);

  //loder
  const [loaderHide, setLoaderHide] = useState(false);
  // comment
  const [comment, setComment] = useState("");
  const elements = [
    {
      id: "1",
      type: "input",
      data: { label: "Report at 10am" },
      position: { x: 50, y: 100 },
    },
    {
      id: "2",
      data: { label: "Spread Awareness" },
      position: { x: 150, y: 150 },
    },
    {
      id: "3",
      data: { label: "Distribute books" },
      position: { x: 250, y: 200 },
    },
    { id: "4", data: { label: "Teaching" }, position: { x: 350, y: 250 } },
    {
      id: "5",
      data: { label: "Distributing Chocolates" },
      position: { x: 450, y: 300 },
    },

    { id: "e1-2", source: "1", target: "2", type: "straight", animated: true },
    { id: "e1-3", source: "2", target: "3", type: "straight", animated: true },
    { id: "e1-4", source: "3", target: "4", type: "straight", animated: true },
    { id: "e1-5", source: "4", target: "5", type: "straight", animated: true },
    // { id: "e1-6", source: "1", target: "6", type: "step" }
  ];

  // const dispatch = useDispatch();
  // const { id } = useParams();
  // const userInfo = useSelector((state) => state.userLogin.userInfo);
  // const userId = userInfo.data._id;
  // console.log(`user Id ${userId}`);
  // const checkBlogLike = useSelector((state) => state.isBlogLiked.isLiked);

  // filter single blog
  // const filterSingleBlog = (response) => {
  //     response.map((e, i) => {
  //         if (e._id === id) {
  //             dispatch(setSingleBlog(e));
  //             const data = e.likes;

  //             data.map((b) => {
  //                 if (b === userId) {
  //                     dispatch(setIsLiked(true))
  //                     setLikeBlog(true)
  //                 } else {
  //                     dispatch(setIsLiked(false))
  //                     setLikeBlog(false)
  //                 }
  //             })
  //         }
  //     })
  // }

  // filter latest blog
  // const filterLastestBlog = (response) => {
  //     let arr = []
  //     // reversing arr for getting latest data
  //     for (let i = 0; i < response.length; i++) {
  //         arr.push(response[response.length - (i + 1)]);
  //     }

  //     // filtering data
  //     dispatch(setLatestBlog(arr));
  // }

  //
  // const getData = async () => {
  //     try {
  //         const response = await axios("https://mediabackend-xcitedu.herokuapp.com/blog/allBlogs");
  //         setLoaderHide(true)
  //         let data = response.data.data;
  //         // filter single blog
  //         filterSingleBlog(data);
  //         // filter latest blog
  //         filterLastestBlog(data);
  //     } catch (error) {
  //         console.log('something went wrong', error);
  //     }
  // }

  //
  // useEffect(() => {
  //     setLoaderHide(false)
  //     getData();
  // }, [])

  //get blog
  // const blog = useSelector((state) => state.SingleBlog.singleBlog);
  // //get latest blog
  // const latestBlog = useSelector((state) => state.LatestBlog.latestBlog);

  // //like handler
  // const likeHandler = async () => {
  //     setLikeBlog(!likeBlog);
  //     const body = JSON.stringify({
  //         "userId": userInfo.data._id,
  //         "blogId": id
  //     })

  //     if (likeBlog === false) {
  //         await axios({
  //             method: "POST",
  //             url: "http://localhost:8080/blog/likeBlog",
  //             headers: {
  //                 "Content-Type": "application/json",
  //             },
  //             data: body,
  //         }).then((res) => {
  //             console.log(res);
  //         }).catch((err) => {
  //             console.log(`something went wrong : ${err}`);
  //         })
  //     } else {
  //         await axios({
  //             method: "POST",
  //             url: "http://localhost:8080/blog/removeLikeBlog",
  //             headers: {
  //                 "Content-Type": "application/json",
  //             },
  //             data: body,
  //         }).then((res) => {
  //             console.log(res);
  //         }).catch((err) => {
  //             console.log(`something went wrong : ${err}`);
  //         })
  //     }
  // }

  // const totalLike = blog.likes;

  return (
    <>
      <Navbar />
      {/* <PerLoader hide={loaderHide} /> */}
      {/* <Navbar pageName={blog.type} /> */}
      <>
        <div className="singleBlog-container">
          <div className="singleBlog-container__backgroundContainer">
            <div className="singleBlog-container__backgroundContainer-bgImbx">
              <img src={cardimg1} alt="img" />
            </div>
            <div className="singleBlog-container__backgroundContainer-contentContainer">
              <div>
                <h1 className="media-title" style={{ color: "white" }}>
                  Neelam's wish of helping the underpreviledged
                </h1>
                <span className="mediaBlog-Creator" style={{ color: "white" }}>
                  By Rajesh Sawaliwala
                </span>
                <span
                  className="mediaBlog-createdAt"
                  style={{ color: "white" }}
                >
                  <QueryBuilderIcon /> 13 hours ago
                </span>
                <br />
                <div style={{ display: "flex" }}>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        marginLeft: "55px",
                        margin: "5px",
                        backgroundColor: "#03ab14",
                        // backgroundImage: "linear-gradient(to right, yellow , red)",
                        color: "white",
                      }}
                    >
                      <b>Volunteer</b>
                    </Button>
                  </Link>
                  {/* <Button style={{ borderRadius: "30px", backgroundColor: "#dbf2ff", margin: "5px" }}><QueryBuilderIcon style={{ marginRight: "5px" }} />  9 days left</Button> */}
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        marginLeft: "55px",
                        margin: "5px",
                        backgroundColor: "#03ab14",
                        // backgroundImage: "linear-gradient(to right, yellow , red)",
                        color: "white",
                      }}
                    >
                      <b>Donate Now</b>
                    </Button>
                  </Link>
                  <br />
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="singleBlog-container__contentContainer">
            <div className="singleBlog-container__contentContainer-contentBx">
              <div>
                <h3 className="media-description">
                  This is the short description of the Event.
                </h3>
                <span className="media-body">
                  This is the body of the event. This is the body of the event.
                  This is the body of the event. This is the body of the event.
                  This is the body of the event. This is the body of the event.
                  This is the body of the event. This is the body of the event.
                  This is the body of the event. This is the body of the event.
                  This is the body of the event. This is the body of the event.{" "}
                </span>
                <h1>Event Details :</h1>
                Date: 22 Feb 2022
                <br />
                Time: 5:00pm
                <br />
                No. of Volunteers needed: 20 volunteers
                <br />
                Funding Required: Rs. 29,00,000
                <br />
                Location: Churchgate, Mumbai
                <br />
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
                  <QueryBuilderIcon style={{ marginRight: "5px" }} /> 9 days
                  left
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
                <br />
                <div style={{ display: "flex" }}>
                  <Link to="/">
                    <Button
                      style={{
                        marginLeft: "55px",
                        margin: "5px",
                        backgroundColor: "#03ab14",
                        // backgroundImage: "linear-gradient(to right, yellow , red)",
                        color: "white",
                      }}
                    >
                      <b>Volunteer</b>
                    </Button>
                  </Link>
                  {/* <Button style={{ borderRadius: "30px", backgroundColor: "#dbf2ff", margin: "5px" }}><QueryBuilderIcon style={{ marginRight: "5px" }} />  9 days left</Button> */}
                  <Link to="/">
                    <Button
                      style={{
                        marginLeft: "55px",
                        margin: "5px",
                        backgroundColor: "#03ab14",
                        // backgroundImage: "linear-gradient(to right, yellow , red)",
                        color: "white",
                      }}
                    >
                      <b>Donate Now</b>
                    </Button>
                  </Link>
                  <br />
                </div>
                <h1>Event Timeline</h1>
                <ReactFlow
                  elements={elements}
                  style={{ width: "100%", height: "500px" }}
                />
                ;
                <div className="extra-section">
                  <div>
                    <span>
                      {likeBlog === true ? (
                        <FavoriteBorderIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}{" "}
                      {}
                    </span>
                    <span>
                      <ion-icon name="share-social-outline"></ion-icon>
                    </span>
                  </div>
                  <div>
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
                      <LinkedinShareButton
                        title="Donate and help the society. Neelam's Life's mission is to give abandoned people with disabilities"
                        summary="Donate and help the society. Neelam's Life's mission is to give abandoned people with disabilities"
                      >
                        <LinkedinIcon size={40} round={true} />
                      </LinkedinShareButton>
                    </div>
                  </div>
                </div>
                <span className="media-total-like">Total Likes 5</span>
                <div className="hr"></div>
                <form>
                  <div
                    className="addCommentBox"
                    style={{ marginRight: "20px" }}
                  >
                    <textarea
                      style={{ backgroundColor: "lightgrey" }}
                      placeholder="Add Your Comment..."
                      name="comment"
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                      value={comment}
                    ></textarea>
                    <div>
                      <input
                        type="submit"
                        value={"post"}
                        style={{ backgroundColor: "orange" }}
                        disabled={comment === "" ? true : false}
                      />
                    </div>
                  </div>
                </form>
                <div className="hr"></div>
              </div>
            </div>
            <div
              style={{ marginLeft: "20px", marginTop: "50px" }}
              className="singleBlog-container__contentContainer-relatedNews"
            >
              <span className="bxTitle">Related News</span>
              <div className="relatedNews_container">
                <EventCard />
                <EventCard />
                {/* {
                                    latestBlog.map((e) => {
                                        return (
                                           <a href={`/blog/${e._id}`} >
                                                <div className="relatedNews_container-card">
                                                    <div className="relatedNews_container-card__imgBx">
                                                        <img src={e.image} alt={e.title} />
                                                    </div>
                                                    <div className="relatedNews_container-card__contentBx">
                                                        <h4 className='card_title'>{e.title}</h4>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    })
                                } */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </>
  );
};

export default ParticularEvent;
