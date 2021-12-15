import React from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
import logo from "../img/logo_small.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is-active"
          })
          : this.setState({
            navBarActiveClass: ""
          });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="logo" title="Logo">
              <img
                src={logo}
                alt="Orange Consulting"
                style={{ width: "200px", maxHeight: "fit-content" }}
              />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              style={{ marginBottom: "auto", marginTop: "auto" }}
              onClick={() => this.toggleHamburger()}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/nube" >
                   FACTURA Y NÓMINA ELECTRÓNICA EN LA NUBE
              </Link>
              <Link className="navbar-item" to="/nosotros">
                Nosotros
              </Link>
              <Link className="navbar-item" to="/productos">
                Portafolio
              </Link>
              {/* <Link className="navbar-item" to="/blog">
                Blog
              </Link> */}
              <Link className="navbar-item" to="/contactanos">
                Contáctanos
              </Link>
              <Link className="navbar-item" to="/soporte">
                Soporte técnico
              </Link>
              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
            {/* <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
