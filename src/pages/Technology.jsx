import React from "react";
import data from "./data.json";
import "./technology.css";
export default function Technology() {
  const TechData = data.technology;
  const [techItem, setTechItem] = React.useState(TechData[0]);
  const [animate,setAnimate]=React.useState(true);
  function handleItemClick(body) {
    setTechItem(body);
    setAnimate(false);
    setTimeout(()=>setAnimate(true),2);
  }
  const techList = TechData.map((item) => {
    return (
      <li key={item.id} className="techList">
        <div className="diamond"></div>
        <button className={`techButton ${techItem==item ? "activeTech" : ""}`} onClick={() => handleItemClick(item)}>
          {item.id}
        </button>
      </li>
    );
  });
  return (
    <div className="technologyPage">
      <h1 className="pagesHeading1 techTitle">
        <span className="numbered-title">03</span>Space Launch 101
      </h1>
      <div className="techContent">
        <div className={`ImageContainer ${animate ? "fade-in" : ""}`}>
          <picture className="techImage">
            <source
              srcSet={techItem.images.landscape}
              media="(max-width:768px)"
            />
            <source
              srcSet={techItem.images.portrait}
              media="(min:width:769px)"
            />
            <img src={techItem.images.portrait} alt={techItem.name} />
          </picture>
        </div>
        <ul className="techUL">{techList}</ul>
        <section className="techSec">
          <h3 className="terminology uppercase">The Terminology…</h3>
          <h2 className="techName">{techItem.name}</h2>
          <p className="techDescription">{techItem.description}</p>
        </section>
      </div>
    </div>
  );
}
