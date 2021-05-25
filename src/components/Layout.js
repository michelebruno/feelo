import '../scss/style.scss';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title }) {
  return (
    <>
      <Helmet title={title || 'Feelo'} />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
