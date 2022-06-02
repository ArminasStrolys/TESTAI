import React from "react";

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
    </>
  );
};

export default Navi;
