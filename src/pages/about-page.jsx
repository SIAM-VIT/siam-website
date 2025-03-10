import Navbar from "../components/navbar";
import AboutPageContent from "../components/about-page-content";

const AboutPage = () => {
  return (
    <>
      <div className="z-[999] absolute w-full">
        <Navbar />
      </div>
      <AboutPageContent />
    </>
  );
};

export default AboutPage;
