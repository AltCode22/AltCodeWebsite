import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | AltCode</title>
      </Helmet>
      <div>
        Hello
      </div>
    </>
  );
}

export default Home;
