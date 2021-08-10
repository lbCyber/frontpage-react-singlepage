const Nav = () => {
  return (
    <nav className="navTop">
      <ul className="mainNav">
        <li>bio</li>
        {/* eslint-disable-next-line*/}
        <span className="navSeparator">//</span>
        <li>skills</li>
        {/* eslint-disable-next-line*/}
        <span className="navSeparator">//</span>
        <li>work</li>
        {/* eslint-disable-next-line*/}
        <span className="navSeparator">//</span>
        <li>contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
