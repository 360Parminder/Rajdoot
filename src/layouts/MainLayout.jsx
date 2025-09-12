import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-neutral-300 text-neutral-600 dark:bg-neutral-950 dark:text-neutral-100 min-h-screen flex flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
