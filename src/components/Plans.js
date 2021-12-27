import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const PlanGrid = ({ cloudPlans }) => {
  const plans = Object.values(cloudPlans);
  console.log("ESTE ES EL PLAN");
  console.log(plans);
/*   const listItems = plans[0].items.map((it) => <li>{it.item}</li>); */
  return (
    <div className="columns is-multiline">
      {plans.map((item, i) => (
        <div key={item.title} className="column is-6">
          <section className="section">
            <div className="has-text-centered ">
              <h4>{item.title}</h4>
            </div>
            <div className="has-text-centered">
              <div
                style={{
                  width: "64px",
                  display: "inline-block",
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
            <p>{item.subtitle}</p>
            {jsx(i, plans)}
          </section>
        </div>
      ))}
    </div>
  );
};

function jsx(i, arr) {
  return(<ul>
    {arr[i].items.map((item) => (
      <li key={item.item}>{item.item}</li>
    ))}
  </ul>);
}

PlanGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default PlanGrid;
