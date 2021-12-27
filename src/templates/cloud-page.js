import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import List from "../components/List";
import Pricing from "../components/Pricing";
import Button from "../components/Button";
import PlanGrid from "../components/Plans";

export const CloudPageTemplate = ({
  image,
  middlePageImage,
  title,
  heading,
  description,
  intro,
  row,
  bottomPageImage,
  pricing,
  cloudPlans,
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
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
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
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Features gridItems={intro.blurbs} page="cloud" />
              {/*  <div className="columns">
                <div className="column is-12" style={{ textAlign: "center" }}>
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div> */}
              {/* <div className="tile is-ancestor">
                <div className="tile is-horizontal">
                  <div className="tile">
                    <div className="tile is-parent has-text-left">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent has-text-right">
                    <article className="tile is-child">
                      <PreviewCompatibleImage
                        imageInfo={main.image3}
                        maxWidth="422px"
                      />
                    </article>
                  </div>
                </div>
              </div> */}
              {/* <Testimonials testimonials={testimonials} /> */}
              <div
                className="full-width-image-container"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(255, 102, 2, 0.3),
                    rgba(255, 102, 2, 0.3)
                  ),url(${
                    middlePageImage.childImageSharp
                      ? middlePageImage.childImageSharp.fluid.src
                      : middlePageImage
                  })`,
                  backgroundPosition: `top left`,
                  backgroundAttachment: `fixed`,
                }}
              />

              <List listItems={row.elements} page="cloud-list" />

              <h3 class="is-size-3">NUESTROS PLANES</h3>
              {/* <Features gridItems={intro.blurbs} page="cloud" /> */}
              {console.log(cloudPlans)}
              <PlanGrid cloudPlans={cloudPlans} />
              <p class="is-size-4 has-text-dark has-text-weight-bold">
                Contáctanos por medio del siguiente botón para darte más
                información sobre nuestros servicios
              </p>
              <Button></Button>

              <div
                className="full-width-image-container"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(255, 102, 2, 0.3),
                    rgba(255, 102, 2, 0.3)
                  ),url(${
                    bottomPageImage.childImageSharp
                      ? bottomPageImage.childImageSharp.fluid.src
                      : bottomPageImage
                  })`,
                  backgroundPosition: `top left`,
                  backgroundAttachment: `fixed`,
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
  list: PropTypes.shape({
    elements: PropTypes.array,
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
        middlePageImage={frontmatter.middlePageImage}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        row={frontmatter.row}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
        bottomPageImage={frontmatter.bottomPageImage}
        cloudPlans={frontmatter.cloudPlans}
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

export const cloudPageQuery = graphql`
  query CloudPage($id: String!) {
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
        middlePageImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bottomPageImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        cloudPlans {
          planEmpresarial {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            items {
              item
            }
            title
          }
          planFE {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            items {
              item
            }
            title
          }
          facturas {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            items {
              item
            }
            title,
            subtitle
          }
          nomina {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            items {
              item
            }
            title,
            subtitle
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            title
          }
          heading
          description
        }
        row {
          elements {
            image {
              childImageSharp {
                fluid(maxWidth: 16, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
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
