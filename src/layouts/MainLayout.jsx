import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
