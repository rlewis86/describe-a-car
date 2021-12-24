import React from "react";

const InteriorFeaturesCard = (props) => {
  return (
    <div className="rounded overflow-hidden shadow-lg m-5">
      <img
        className="w-full rounded-t-lg"
        src={props.feature.image}
        alt={props.feature.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{props.feature.title}</div>
        <p className="text-gray-700 text-xl">{props.feature.description}</p>
      </div>
    </div>
  );
};

export default InteriorFeaturesCard;
