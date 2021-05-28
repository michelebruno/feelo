import '../scss/style.scss';
import { Helmet } from 'react-helmet';
import SwiperCore, {
  Navigation, Pagination, Scrollbar, Mousewheel,
} from 'swiper/core';
import Navbar from './Navbar';
import Footer from './Footer';

SwiperCore.use([Pagination, Scrollbar, Navigation, Mousewheel]);

export default function Layout({
  children, title, fixedHeader, hideFooter,
}) {
  return (
    <>
      <Helmet title={title || 'Feelo'} />
      <Navbar fixed={fixedHeader} />
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}