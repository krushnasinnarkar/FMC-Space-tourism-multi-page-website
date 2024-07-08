import data from "./data.json";
import React from "react";
import "./destination.css";
export default function Destination() {
  const [animate,setAnimate]=React.useState(true);
  const DestItems = data.destinations;
  const [selectedBody, setSelectedBody] = React.useState(DestItems[0]);
  function handleItemClick(body) {
    setSelectedBody(body);
    setAnimate(false);
    setTimeout(()=>{
      setAnimate(true);
    },2);
  }
  return (
    <div className="destinationPage text-white">
      <div>
        <h1 className="destTitle uppercase pagesHeading1">
          <span className="numbered-title destNum">01</span>
          Pick your destination
        </h1>
        <img
          src={selectedBody.images}
          alt={selectedBody.name}
          className={`destImage ${animate ? "fade-in" : ""}`}
        />
      </div>
      <div>
        <ul className="destUL">
          {DestItems.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="destList"
              >
                <button
                  className={`destButton uppercase ${
                    item == selectedBody ? "selectedBody" : ""
                  }`}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
        <section>
            <div>
            <h2 className="destName uppercase">{selectedBody.name}</h2>
            <p className="destDescription">{selectedBody.description}</p>
            <div className="destMeasure uppercase">
              <div>
                <h3 className="desth3">Avg. distance</h3>
                <p className="Measurement">{selectedBody.distance}</p>
              </div>
              <div>
                <h3 className="desth3">Est. travel time</h3>
                <p className="Measurement">{selectedBody.travel}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
