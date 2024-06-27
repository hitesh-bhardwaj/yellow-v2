import Footer from "../Footer";

const Layout = ({ children, className = "" }) => {
  return (
    <>
      <main className={className}>{children}</main>
      <Footer />
    </>
  )
};

export default Layout;
