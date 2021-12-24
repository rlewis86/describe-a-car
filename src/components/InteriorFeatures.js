import React from "react";
import FeaturesCard from "./FeaturesCard";
import appleCarPlay from "../assets/img/2021-nissan-gtr-apple-carplay.webp";
import rearViewMonitor from "../assets/img/2021-nissan-gtr-backup-camera.webp";
import commandCenter from "../assets/img/2021-nissan-gtr-display-commander.webp";

const InteriorFeatures = () => {
  const features = [
    {
      image: rearViewMonitor,
      title: "Rearview monitor",
      description:
        "The RearView Monitor helps you see what's directly behind you. Sonar sensors on all four corners look out for static objects. When you're getting close to a detected object, it will let you know with an audible warning",
    },
    {
      image: appleCarPlay,
      title: "Apple CarPlay® integration",
      description:
        "People to see? Places to be? Just ask Siri®. Equipped with Siri® voice control, Apple CarPlay® brings on board your contacts, favorite messaging apps, Apple Music® playlists, Apple Maps, and more. Simply plug in your compatible iPhone® and go.",
    },
    {
      image: commandCenter,
      title: "Command Center",
      description:
        "In addition to its touch functionality, you can control the 8” touch-screen using the Display Commander. Positioned just behind the gearshift, it lets you toggle up and down, side-to-side, rotate, scroll through, and control your infotainment system, all without the need to look down or touch the display screen",
    },
  ];

  return (
    <div className="container mx-auto pt-10 pb-10 px-6 w-full">
      <div className="py-10 flex justify-center text-3xl xl:text-5xl">
        - Interior Features -
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {features.map((feature, i) => (
          <FeaturesCard key={i} feature={feature}></FeaturesCard>
        ))}
      </div>
    </div>
  );
};

export default InteriorFeatures;
