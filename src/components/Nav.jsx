import React from "react";
import "./nav.css";
import data from "../pages/data.json";
export default function Nav() {
  const [burgerClass, setBurgerClass] = React.useState("bar unclicked");
  const [menuClass, setMenuClass] = React.useState("menu hidden");
  const [isOpened, toggleOpen] = React.useState(false);
  function updateMenu() {
    if (isOpened) {
      setMenuClass("menu hidden");
      setBurgerClass("bar unclicked");
    } else {
      setMenuClass("menu visible");
      setBurgerClass("bar clicked");
    }
    toggleOpen(!isOpened);
  }
  const location = window.location.pathname;
  const navData = data.nav;
  const navLink = navData.map((item) => {
    return (
      <li className="navList" key={item.id}>
        <a
          href={item.path}
          className={`navLink ${location === item.path ? "activeNavLink" : ""}`}
        >
          <span className="navNumber numbered-title">0{item.id}</span>
          {item.title}
        </a>
      </li>
    );
  });

  return (
    <nav>
      <div className="nav">
        <img src="/FMC-Space-tourism-multi-page-website/shared/logo.svg" alt="logo" className="logo" />
        <button className="HamburgerNav" onClick={updateMenu} aria-label="Menu">
          <span className={burgerClass}></span>
          <span className={burgerClass}></span>
          <span className={burgerClass}></span>
        </button>
      </div>
      <div className="hidden line"></div>
      <div className={menuClass}>
        <ul className="menuContent">{navLink}</ul>
      </div>
    </nav>
  );
}
