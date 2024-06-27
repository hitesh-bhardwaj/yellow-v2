import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children, className = "" }) => {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </>
  )
};

export default Layout;
