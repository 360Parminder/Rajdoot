import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-white  dark:bg-neutral-900 dark:text-neutral-100 flex flex-col
       min-h-screen text-white items-center">
      <Header />
      <main className="min-w-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
