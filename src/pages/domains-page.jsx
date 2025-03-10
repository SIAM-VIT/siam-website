import DomainsPageContent from "../components/domains-page-content";
import Navbar from "../components/navbar";

const DomainsPage = () => {
  return (
    <>
      <div className="z-[999] absolute w-full">
        <Navbar />
      </div>
      <DomainsPageContent />
    </>
  );
};

export default DomainsPage;
