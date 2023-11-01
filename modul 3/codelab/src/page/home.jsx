import React from "react";
import Navbar from "../komponen/navbar";
import Hero from "../komponen/hero";
import Footer from "../komponen/footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero title="Home Page" />
      <Footer />
    </div>
  );
}

export default Home;
