import CoverVideo from "./CoverVideo";
import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
  return (
    <section className="relative h-screen overflow-hidden" id="home">
      <CoverVideo /> 
      {/* <Logo /> */}
      <NavBar />
    </section>
  );
}

export default Header;
