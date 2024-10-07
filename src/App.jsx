import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribers from "./components/Subscribers/Subscribers";
import Community from "./components/Banner/Community";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Subscribers />
      <Community />
    </main>
  );
};

export default App;
