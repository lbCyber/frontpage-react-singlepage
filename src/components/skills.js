const Skills = () => {
  const skillList = [
    ["css", "CSS"],
    ["git", "Git/GitHub"],
    ["html5", "HTML5"],
    ["javascript", "JavaScript"],
    ["jquery", "jQuery"],
    ["mysql", "MySQL"],
    ["node", "node"],
    ["php", "PHP"],
    ["python", "Python"],
    ["react", "React"],
    ["sass", "SASS/SCSS"],
    ["wordpress", "Wordpress"],
  ];
  return (
    <section className="skillsBox">
      <div className="skillsText">
        <h5 className="mobileExclude">I am a creator</h5>
        <p className="mobileExclude">
          I consider myself a life-long creator and a veteran in web development
          (though one who is constantly learning and improving).
        </p>
        <p>
          My philosophy in design has always been to challenge myself and invent
          new and ambitious ways of developing content. In web development in
          particular, I pride myself in avoiding prefabs and third-party
          libraries in my own personal work; if it's something I can learn to do
          myself, that's what I'm going to do.
        </p>
        <p>
          That isn't to say I don't have experience with libraries, though! I
          often work with the more essential Javascript libraries, including
          jQuery and React.js
        </p>
        <h5 className="mobileExclude">I am a programmer</h5>
        <p>
          My experience as a programmer began at an early age, when I would
          explore the inner workings of DOS and write small games using chains
          of batch scripts.
        </p>
        <p>
          Since then, I have expanded on and improved my skills and abilities on
          my own as a self-taught coder with experience in languages including
          HTML, CSS, Javascript, PHP, Python, and C.
        </p>
        <h5 className="mobileExclude">I am an artist</h5>
        <p>
          On the design side of web development, as the son of an art teacher, I
          had always possessed a certain ability for visual arts and layout.
          Throughout my life I have constantly worked to improve my aptitude in
          digital graphics and animation, as well as my instincts in colours and
          form. With a formal education in print design and layout, I've used my
          collection of abilities to always come up with new and interesting
          ways of developing exciting web sites and applications.
        </p>
      </div>
      <div className="skillIconsContainer">
        {skillList.map((skill, key) => {
          return (
            <img className="skillIcon" src={`./assets/devicons/${skill[0]}.svg`} alt={skill[1]}
              key={key} />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
