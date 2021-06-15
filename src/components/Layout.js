import '../scss/style.scss';
import { Helmet } from 'react-helmet';
import SwiperCore, {
  Navigation, Pagination, Scrollbar, Mousewheel, Autoplay, Parallax, EffectFade,
} from 'swiper/core';
import Navbar from './Navbar';
import Footer from './Footer';
import { ReactComponent as DownloadClip } from '../images/wave-10-1x.svg';
import { ReactComponent as Wave01 } from '../images/wave-01-1x.svg';

SwiperCore.use([Pagination, Scrollbar, Navigation, Mousewheel, Autoplay, EffectFade, Parallax]);

console.log('Hey, what are you looking for?');
export default function Layout({
  children, title, fixedHeader, hideFooter, page,
}) {
  console.log('Page is: ', page);

  if (page !== '') {
    return (
      <div id="page-wrapper" className={page}>

        <Helmet title={title || 'Feelo'} />
        <Navbar fixed={fixedHeader} />
        {children}
        {!hideFooter && <Footer />}
        <div className="visually-hidden">
          <DownloadClip width={0} height={0} />
          <Wave01 width={0} height={0} />
        </div>
      </div>
    );
  }
}
