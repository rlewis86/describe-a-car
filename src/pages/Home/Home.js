import React from "react";
import Hero from "../../components/Hero";
import InteriorFeatures from "../../components/InteriorFeatures";
import CallToAction from "../../components/CallToAction";
import Stats from "../../components/Stats";

const Home = () => {
  return (
    <div className="w-full">
      <Hero></Hero>
      <Stats></Stats>
      <InteriorFeatures></InteriorFeatures>
      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;
