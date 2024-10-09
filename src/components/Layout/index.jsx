// import Footer from "../Footer";
// import Header from "../Header";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import('../Header'), {
  ssr: false,
  loading: () => <p></p>,
})

const DynaminFooter = dynamic(() => import('../Footer'), {
  ssr: false,
  loading: () => <p></p>,
})

const Layout = ({ children, className = "" }) => {
  return (
    <>
      <DynamicHeader />
        <main className={className}>{children}</main>
      <DynaminFooter />
    </>
  )
};

export default Layout;
