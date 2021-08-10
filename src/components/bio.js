const Bio = () => {
  const dootAudio = new Audio("./assets/doot.mp3");

  return (
    <section classname="bioBox">
      <div className="paulPic">
        <div className="avContainer paulAv" id="paulAv">
          <img
            src="./assets/meAvT.png"
            alt="Pixel-art illustration of myself"
            onMouseDown={() => dootAudio.play()}
          />
        </div>
      </div>
      <h5>Hey there!</h5>
      <p>
        I'm a multi-skilled front-end developer and writer based in Toronto,
        Canada.
      </p>
      <p>
        I'm always refining my skills as a creator and as both a front-end and
        back-end developer. Below you can see just a small glimpse of the work
        I've done as a front-end developer, applying my past skills in print
        design, graphic design, animation, writing, and photography!
      </p>
      <h5 className="mobileExclude">What's your story?</h5>
      <p className="mobileExclude">
        Born and raised in Niagara Falls, I eventually found myself in love with
        the city of Toronto, studying at prestigious schools including{" "}
        <a href="http://utoronto.ca" target="_blank" rel="noopener noreferrer">
          University of Toronto
        </a>
        ,{" "}
        <a href="http://humber.ca" target="_blank" rel="noopener noreferrer">
          Humber College
        </a>
        , and{" "}
        <a
          href="https://junocollege.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Juno
        </a>{" "}
        (formerly{" "}
        <a
          href="https://hackeryou.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          HackerYou
        </a>
        ).
      </p>
      <p>
        I have years of experience freelancing as a web developer for small
        businesses and non-profits, as well as a copy editor and writer, trading
        largely with local publications.
      </p>
      <h5 className="mobileExclude">Okay, but what else?</h5>
      <p>
        Having graduated from Juno's immersive front-end development program, I
        have become a highly-skilled and dedicated front-end developer, with a
        deeply-rooted love for what I do.
      </p>
      <p>
        I have an indomitable passion for giving back to the LGBTQ+ community,
        of which I owe so much, and love working with people and working toward
        making the world a better place through both charity foundations and
        advocacy.
      </p>
      <p>
        Most of all, I am dedicated to growing as a person and becoming better
        every day, however I can. I have a genuine love of all people and will
        always go out of my way to provide whatever support I can for those in
        need.
      </p>
      <h6 className="ds">(Also I'm pretty good at Dark Souls)</h6>
      <p className="mobileExclude">
        So if you have anything you'd like to talk about, please{" "}
        <a href="mailto:paul@lintbox.com">contact me!</a>
      </p>
    </section>
  );
};
export default Bio;
