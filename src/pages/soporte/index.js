import React from "react";
import Layout from "../../components/Layout";

export default function Index(props) {
  return (
    <Layout noChat>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `linear-gradient(
            rgba(255, 102, 2, 0.3),
            rgba(255, 102, 2, 0.3)
          ), url("../img/helpdesk.jpg")`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`
        }}
      >
        <h2
          className="has-text-weight-bold is-size-1"
          style={{
            color: "white",
            textShadow: "1px 1px black",
            padding: "1rem"
          }}
        >
          Soporte técnico
        </h2>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Chat online</h1>
            <p>
              Si necesitas soporte técnico puedes iniciar un chat con uno de
              nuestros asesores dando click en el siguiente botón.
            </p>
            <button
              className="button is-primary"
              onClick={() =>
                window.open(
                  "https://tawk.to/chat/5e7bd36169e9320caabd0c0c/default",
                  "chat",
                  `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
                  width=400,height=700,left=0,top=0`
                )
              }
            >
              Chat online
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
