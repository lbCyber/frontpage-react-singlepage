const NameTag = () => {
  return (
    <header className="">
      <div className="wrapper">
        {/* <div className="backgroundStyle"></div> */}
        <div className="">
          <img
            src="./assets/mePic-squareBW.png"
            alt="It's me, Paul. Hello!" />
        </div>
        <div className="">
          <h2>
            Hi there<span className="">!</span>
          </h2>
          <h2>My name is</h2>
          <h1>
            Paul R<span className="">.</span>
          </h1>
        </div>
      </div>
      <h3>And I'm a Toronto-based web developer</h3>
    </header>
  );
};

export default NameTag;
