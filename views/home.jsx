const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div>
          <img src="/images/Mcdonals.png" alt="Chia Fruit Shake" width="100px" height="100px"/>
          <div>
            Photo by <a href="AUTHOR_LINK">Mcdonals</a> on{" "}
            <a href="UNSPLASH_LINK">internet</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
