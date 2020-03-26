import React from "react";
import PropTypes from "prop-types";

const Pricing = ({ data }) => (
  <div className="columns">
    {data.map(price => (
      <div key={price.plan} className="column">
        <section className="section">
          <h4 className="has-text-centered has-text-weight-semibold">
            {price.plan}
          </h4>
          <p className="has-text-weight-semibold">{price.description}</p>
          <ul style={{ marginLeft: "0rem" }}>
            {price.items.map(item => (
              <li
                key={item.name}
                className="is-size-5"
                style={{
                  marginTop: "2rem",
                  marginBottom: "2rem",
                  listStyleType: "none"
                }}
              >
                <img src={item.logo} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array
    })
  )
};

export default Pricing;
