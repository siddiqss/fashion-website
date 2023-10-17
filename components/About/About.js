import AboutText from "./AboutText";
import Title from "./Title";
import Images from "./Images";

function About() {
  return (
    <section
      id="about"
      className="relative md:min-h-[100vh] min-h-[150vh] md:w-[80vw] flex w-screen"
      style={{ margin: "0 auto" }}
    >
      <div>
        <Title />

        <AboutText />
      </div>

      <Images />
    </section>
  );
}

export default About;
