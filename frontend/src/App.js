import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Pages
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import HindiHome from "./components/HindiHome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";
import Chatbot from "./components/Chatbot";
import Map from "./components/Map";
import EditProfile from "./components/EditProfile";
import alanBtn from "@alan-ai/alan-sdk-web";
import Blogs from "./components/Blogs";
import ParticularBlog from "./components/ParticularBlog";
import ParticularEvent from "./components/ParticularEvent";
import GiftCard from "./components/GiftCard";
import EventsAttended from "./components/EventsAttended";
import Maps from "./components/Maps";
import LeaderBoard from "./components/LeaderBoard";
import InfluencersLeaderboard from "./components/InfluencersLeaderboard";

import Dashboard from "./components/ngoDashboard/Dashboard";
import OrganizationDashboard from "./components/ngoDashboard/OrganizationDashboard";
import Speech from "./components/Speech";

function App() {
  const navigate = useNavigate();
  const alanKey =
    "cfdac5b36d0a78de9cd6709b0a7e592e2e956eca572e1d8b807a3e2338fdd0dc/stage";
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "login") {
          navigate("/signin");
        } else if (command === "signup") {
          navigate("/signup");
        } else if (command === "home") {
          navigate("/");
        } else if (command === "maps") {
          navigate("/map");
        } else if (command === "blogs") {
          navigate("/blogs");
        }
      },
    });
  }, []);
  return (
    // <BrowserRouter>
    <>
      {/* <Navbar component={Navbar} style={{ marginBottom: "100px" }} /> */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} exact></Route>
        <Route path="/organization" element={<OrganizationDashboard />} exact></Route>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/hin" element={<HindiHome />} exact></Route>
        <Route path="/signin" element={<Signin />} exact></Route>
        <Route path="/signup" element={<Signup />} exact></Route>
        <Route path="/myProfile" element={<ProfilePage />} exact></Route>
        <Route path="/editProfile" element={<EditProfile />} exact></Route>
        <Route path="/map" element={<Map />} exact></Route>
        <Route path="/blogs" element={<Blogs />} exact />
        <Route path="/blog/particularBlog" element={<ParticularBlog />} exact />
        <Route
          path="/event/particularEvent"
          element={<ParticularEvent />}
          exact
        />
        <Route path="/giftcard" element={<GiftCard />} exact />
        <Route path="/eventsAttended" element={<EventsAttended />} exact />
        <Route path="/maps" element={<Maps />} exact />
        <Route path="/leaderboard" element={<LeaderBoard />} exact />
        <Route path="/speech" element={<Speech />} exact />
        <Route
          path="/influencersleaderboard"
          element={<InfluencersLeaderboard />}
          exact
        />

        {/* <Route path="/course/:id" component={CoursePage} exact></Route>
      <Route path="/assignments/:id" component={Assignments} exact></Route>
      <Route path="/admin/login" component={AdminLogin} exact></Route>
      <Route path="/admin/access" component={AdminDashboard} exact></Route>
      <Route path="/mycourses/:id" component={MyCoursesUser} exact></Route>
      <Route path="/contactForm" component={ContactForm} exact></Route>
      <Route path="/careerForm" component={CareerForm} exact></Route>
      <Route path="/myProfile" component={ProfilePage} exact></Route>
      <Route
        path="/instructorcourses/:id"
        component={MyCoursesInstr}
        exact
      ></Route>
      <Route path="/createCourse" component={CreateCourse} exact></Route>
      <Route path="/createChapter/:id" component={CreateChapter} exact></Route> */}
      </Routes>
      <Chatbot />
      {/* <Footer /> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
