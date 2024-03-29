import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems, page }) => {
  let width;
  page == "cloud" ? (width = "64px") : (width = "240px");
  return (
    <div className="columns is-multiline">
      {gridItems.map((item) => (
        <div key={item.text} className="column is-6">
          <section className="section">
            <div className="has-text-centered ">
              <h4>{item.title}</h4>
            </div>
            <div className="has-text-centered">
              <div
                style={{
                  width,
                  display: "inline-block",
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
            <p>{item.text}</p>
          </section>
        </div>
      ))}
    </div>
  );
};

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
