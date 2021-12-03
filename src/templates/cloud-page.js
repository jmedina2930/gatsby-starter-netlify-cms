import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
// import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PrincingTab from "../components/PrincingTable";
import FeaturesTable from "../components/FuaturesTable";

export const CloudPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `linear-gradient(
          rgba(255, 102, 2, 0.3),
          rgba(255, 102, 2, 0.3)
        ), url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          color: "white",
          textShadow: "1px 1px black",
          padding: "1rem",
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3
                className="has-text-weight-semibold is-size-2"
                style={{ textAlign: "center" }}
              >
                {heading}
              </h3>
              <h4 style={{ textAlign: "justify" }}>{description}</h4>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div>
                <FeaturesTable></FeaturesTable>
              </div>
              <div className="column is-12" style={{ textAlign: "center" }}>
                <h3 className="has-text-weight-semibold is-size-3">
                  <p class="text-yellow-500">{main.heading}</p>
                </h3>
                <p>{main.description}</p>
              </div>

              <div className="columns ">
                <div className="column is-12">
                  <PrincingTab></PrincingTab>
                </div>
              </div>

              <div className="column is-12" style={{ textAlign: "center" }}>
                  <p class=" has-text-weight-semibold  text-yellow-500">Para nómina electrónica, entre el 1 y 15 de diciembre recibe el 20% de descuento en la activación de nómina (semestre) y 20% de descuento en soporte, activación y actualizaciones (anualidad) </p>
                
              </div>

              <div className="column is-12" style={{ textAlign: "center" }}>
                  <p class=" has-text-weight-semibold is-size-3 text-yellow-500">Contáctanos por medio del siguiente botón para darte más información sobre nuestros servicios </p>
                
              </div>

              <div className="mt-8 sm:ml-72 md:ml-96 lg:ml-96">
                <button
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send?phone=+573053357482&text=Cotizar%20Facturaci%C3%B3n%20y%20N%C3%B3mina%20Electr%C3%B3nica",
                      "_blank"
                    )
                  }
                  class=" mt-8 sm:ml-24 md:ml-24 lg:ml-24 inline-flex items-center h-11 px-5 text-indigo-100 transition-colors duration-150 bg-green-500 rounded-lg focus:shadow-outline hover:bg-green-400"
                >
                  <span>Cotizar</span>
                  <svg class="w-4 h-8 ml-3 fill-current" viewBox="0 0 23 20">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* <Testimonials testimonials={testimonials} /> */}
              <div
                className="full-width-image-container"
                style={{
                  backgroundImage: `url(${
                    fullImage.childImageSharp
                      ? fullImage.childImageSharp.fluid.src
                      : fullImage
                  })`,
                }}
              />
              <h2 className="has-text-weight-semibold is-size-2">
                {pricing.heading}
              </h2>
              <p className="is-size-5">{pricing.description}</p>
              <Pricing data={pricing.plans} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

CloudPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const CloudPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <CloudPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

CloudPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default CloudPage;

export const CloudPageQuery = graphql`
  query CloudtPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items {
              name
              logo
            }
            plan
            price
          }
        }
      }
    }
  }
`;
