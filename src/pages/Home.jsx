import "./home.css";
export default function Home() {
  return (
    <div className="homePage">
      <div className="homeContent">
        <h2 className="homeSpaceheading2">So, you want to travel to</h2>
        <h1 className="space">Space</h1>
        <p className="homeSpaceDescription">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="exploreHoverEffect">
        <a href="/destination" className="exploreLink">
          <span className="exploreText">Explore</span>
        </a>
      </div>
    </div>
  );
}
