import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-neutral-300  dark:bg-neutral-950 dark:text-neutral-100 flex flex-col
      bg-radial-[at_25%_75%] from-[#5da6a2] via-[#80c7c4] to-[#086FCA] min-h-screen text-white">
      <Header />
      <main >{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
