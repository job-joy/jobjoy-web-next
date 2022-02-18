// import Navbar from "./navbar";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  console.log('props: ', props);
  const { children } = props
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
