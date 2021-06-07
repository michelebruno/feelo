import { ReactComponent as AtIcon } from '../images/at-sign.svg';
import { ReactComponent as FacebookIcon } from '../images/facebook.svg';
import { ReactComponent as TwitterIcon } from '../images/twitter.svg';
import { ReactComponent as IgIcon } from '../images/instagram.svg';
import { GooglePlayButton, PlayStoreButton } from './Download';

export default function Footer() {
  return (
    <footer className="container mt-3">
      <div className="row justify-content-between small text-dark">
        <div className="col-3">
          <IgIcon />
          <FacebookIcon />
          <TwitterIcon />
          <AtIcon />

        </div>
        <div className="col-auto">
          <p>
            Termini e condizioni    Cookie policy    Privacy policy
          </p>
        </div>
        <div className="col-3">
          <PlayStoreButton className=" d-inline-block w-50" />
          <GooglePlayButton className="w-50 d-inline-block" />
        </div>
      </div>
    </footer>
  );
}
