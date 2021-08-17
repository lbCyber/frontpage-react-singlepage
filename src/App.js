import NameTag from "./components/header";
import Bio from "./components/bio";
import Skills from "./components/skills";
import Work from "./components/work";
import Contact from "./components/contact";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <Nav />
      <main>
        <NameTag />
        <Bio />
        <Skills />
        <Work />
        <Contact />
      </main>
      <div className="preload" aria-hidden>
        {/* prevent assets from blinking on load */}
        <img src="./assets/meAvT.png" alt="" />
        <img src="./assets/meAvTSkeletondoot.png" alt="" />
        <img src="./assets/meAvTSkeletondoot-horn.png" alt="" />
        <img src="./assets/axologosmile.svg" alt="" />
      </div>
    </>
  );
}

export default App;
