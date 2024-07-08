import data from "./data.json";
import React from "react";
import "./crew.css";
export default function Crew() {
  const crewData = data.crew;
  const [crewItem, setCrewItem] = React.useState(crewData[0]);
  const [animate,setAnimate]=React.useState(true);
  function handleClick(body) {
    setCrewItem(body);
    setAnimate(false);
    setTimeout(()=>{
        setAnimate(true);
      },2);
  }
  const crewList = crewData.map((item) => {
    return (
      <li key={item.id} className="crewList">
        <button
          className={`crewButton ${crewItem == item ? "activeCrewButton" : ""}`}
          onClick={() => handleClick(item)}
          aria-label={item.name}
        ></button>
      </li>
    );
  });
  return (
    <div className="crewPage">
      <h1 className="pagesHeading1 uppercase crewTitle">
        <span className="numbered-title">02</span>Meet your crew
      </h1>
      <div className="crewReverse">
        <img src={crewItem.images} alt={crewItem.name} className="crewImage" />
        <div className="crewLine"></div>
        <div className="reverse2">
          <ul className="crewUL">{crewList}</ul>
          <section className={`${animate ? "fade-in" : ""}`}>
            <h3 className="crewRole uppercase">{crewItem.role}</h3>
            <h2 className="crewName uppercase">{crewItem.name}</h2>
            <p className="crewBio">{crewItem.bio}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
