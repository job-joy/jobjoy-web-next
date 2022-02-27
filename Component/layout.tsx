import Footer from './Footer';
import Header from './Header';

export default (props: any) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
