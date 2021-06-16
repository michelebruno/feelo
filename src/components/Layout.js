import '../scss/style.scss';
import { Helmet } from 'react-helmet';
import SwiperCore, { Autoplay, EffectFade } from 'swiper/core';
import Navbar from './Navbar';
import Footer from './Footer';
import { ReactComponent as DownloadClip } from '../images/wave-10-1x.svg';
import { ReactComponent as Wave01 } from '../images/wave-01-1x.svg';
import { ReactComponent as Wave102x } from '../images/wave-10-2x.svg';
import { ReactComponent as Wave012x } from '../images/wave-01-2x.svg';

SwiperCore.use([Autoplay, EffectFade]);

console.log('Hey, what are you looking for?');
export default function Layout({
  children, title, hideFooter, page,
}) {
  if (page !== '') {
    return (
      <div id="page-wrapper" className={page}>
        <Helmet
          title={title || 'Feelo'}
          htmlAttributes={{ lang: 'it' }}
        />
        <Navbar />
        {children}
        {!hideFooter && <Footer />}
        <div className="visually-hidden position-absolute">
          <DownloadClip width={0} height={0} />
          <Wave01 width={0} height={0} />
          <Wave012x width={0} height={0} />
          <Wave102x width={0} height={0} />
        </div>
      </div>
    );
  }
}
