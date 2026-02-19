import React from "react";

function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero-card">
        <h1 className="home-title">Welcome to Tunisia</h1>
        <div className="home-card">
          <p className="home-intro">
            Tunisia captivates with its perfect fusion of ancient wonders and
            pristine beaches. Birthplace of Hannibal's Carthage empire, cradle of
            Roman Africa, and Islamic golden age hub, it boasts 9 UNESCO World
            Heritage Sites - more per capita than any other country. Ancient
            Glory at Carthage and El Jem, Mediterranean beaches in Sousse and
            Djerba, Sahara adventures in Tozeur and Douz, and vibrant souks in
            Tunis Medina make Tunisia a compact treasure trove of history and
            natural beauty.
          </p>
        </div>
      </section>

      <section className="photo-grid">
        <div className="photo-item">
          <img
            src="https://www.marhba.com/images/culture/culture2018/coverhannibal1.jpg"
            alt="Hannibal"
          />
        </div>
        <div className="photo-item">
          <img
            src="https://node01.flagstat.net/media/image/h485/yt-UgCYShLj06k-r.jpg"
            alt="Tunisian flag"
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
