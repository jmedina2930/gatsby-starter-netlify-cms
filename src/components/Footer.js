import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo_small.png";
// import facebook from "../img/social/facebook.svg";
// import instagram from "../img/social/instagram.svg";
// import twitter from "../img/social/twitter.svg";
// import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <h3 className="has-text-white-ter has-text-left">
                      Links rápidos
                    </h3>
                    <li>
                      <Link to="/" className="navbar-item">
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/nosotros">
                        Nosotros
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/productos">
                        Productos
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <h3 className="has-text-white-ter has-text-left">
                      Canales de atención
                    </h3>
                    <li>
                      <Link className="navbar-item" to="/contactanos">
                        Contáctanos
                      </Link>
                      <Link className="navbar-item" to="/soporte">
                        Soporte técnico
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section style={{ paddingTop: "1rem" }}>
                  <h3 className="has-text-white-ter has-text-left">
                    Nuestra oficina
                  </h3>
                  <div
                    style={{ paddingLeft: "1rem", paddingTop: "0.5rem" }}
                    className="has-text-left"
                  >
                    <p className="has-text-white-ter">
                      <strong className="has-text-white-ter">Dirección:</strong>{" "}
                      Diagonal 50A # 32-200, Bello, Antioquia
                    </p>
                    <p className="has-text-white-ter">
                      <strong className="has-text-white-ter">Teléfono:</strong>{" "}
                      2983801
                    </p>
                  </div>
                </section>
              </div>
              {/* <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a> 
              </div>*/}
            </div>
            <hr />
            <div className="columns">
              <div className="copyright column is-6 has-text-left">
                <img src={logo} alt="Orange Consulting" />
              </div>
              <div className="copyright column is-6 has-text-right">
                Copyright Orange Consulting S.A.S. 2020
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
