import React from "react";
import Admin from "../admin/Admin";
import Home from "../home/Home";
import News from "../news/News"
import Fundraisers from "../fundraisers/Fundraisers"
import Publisher from "../publisher/Publisher"
import SignIn from "../signIn/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Navi = () => {
  return (
    <>
      <div className="nav-bar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/fundraisers">Fundraisers</a></li>
          <li><a href="/publisher">Publish project</a></li>
          <li><a href="/news">News</a></li>
          <li className="sign-in"> <a href="/sign-in">Sign in</a></li>
        </ul>
      </div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/fundraisers" element={<Fundraisers />} />
          <Route path="/publisher" element={<Publisher />} />
          <Route path="/news" element={<News />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-in" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
};

export default Navi;
