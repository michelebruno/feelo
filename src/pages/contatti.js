import Layout from '../components/Layout';

export default function Contatti() {
  return (
    <Layout title="Contatti">
      <div className="container">
        <div className="row">
          <div className="col-12"><h1 className="handwritten text-center">Contattaci</h1></div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="">
              <h2>Vuoi saperne di più?</h2>
              <form action="#" className="row">
                <div className="mb-3 col-12 col-lg-6">
                  <label htmlFor="nome" className="form-label">Email address</label>
                  <input type="text" className="form-control" id="nome" />
                </div>
                <div className="mb-3 col-12 col-lg-6">
                  <label htmlFor="inputCognome" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="inputCognome" />
                </div>
                <div className="mb-3 col-12">
                  <label htmlFor="emailInput" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="emailInput" />
                </div>
                <div className="mb-3 col-12">
                  <label htmlFor="emailInput" className="form-label">
                    Per chi sei
                    preoccupato?
                  </label>
                  <div className="form-check row row-cols-3">
                    <div>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label className="form-check-label me-3" htmlFor="flexRadioDefault1">
                        Per me
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Per un mio famigliare
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Per un amico/a
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
