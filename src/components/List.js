import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const List = ({ listItems, page }) => {
  let width;
  page == "cloud-list" ? (width = "16px") : (width = "240px");
  return (
    <div>
      <h3 class="is-size-3">BENEFICIOS</h3>
      {listItems.map((item) => (
        <div class="columns is-vcentered">
          <div class="column">
            <section>
              <div
                style={{
                  width,
                  display: "inline-block",
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </section>
          </div>
          <div class="column is-12">
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

List.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default List;
