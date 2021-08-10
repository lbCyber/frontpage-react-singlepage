const NameTag = () => {
  return (
    <section className="headerMain">
      <div className="centerHeaderItems">
        {/* <div className="backgroundStyle"></div> */}
        <div className="myPicContainer">
          <img src="./assets/mePic-squareBW.png" alt="It's me, Paul. Hello!" />
        </div>
        <div className="headerText">
          <h2>
            Hi there<span className="blue">!</span>
          </h2>
          <h2>My name is</h2>
          <h1>
            Paul R<span className="white">.</span>
          </h1>
        </div>
      </div>
      <h3>And I'm a Toronto-based web developer</h3>
    </section>
  );
};

export default NameTag;
