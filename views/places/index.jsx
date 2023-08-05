import React from "react";
import Def from "../default";

function Index({ places }) {
  let placesFormatted = places.map((place) => (
    <div className="col-sm-6" key={place.id}>
      <h2>
        <a href={`/places/${place.id}`}>{place.name}</a>
      </h2>
      <p className="text-center">{place.cuisines}</p>
      <img src={place.pic} alt={place.name} />
      <p className="text-center">
        Located in {place.city}, {place.state}
      </p>
    </div>
  ));

  return (
    <Def>
      <main>{placesFormatted}</main>
    </Def>
  );
}


module.exports = Index;
